import random
import re

from sanic import Blueprint
from Config.configuration import *
from ChatGPT.Service.OpenAIController import ChatGPT

Authorization = []  # 替换你自己的Authorization
if not Authorization:
    raise "Please enter your Authorization"

SERVERINDEX = Blueprint("Index")
chatGPT = ChatGPT()


@SERVERINDEX.route("", methods=["POST", "GET"])
async def process_index_request(request):
    return template('ChatGPT.html')


NoneRequest = Blueprint("NonRequest")


@NoneRequest.route("feishu-config", methods=["POST", "GET"])
async def process_error_request(request):
    return Json({})


CHATGPT_API = Blueprint("ChatgptApi")


@CHATGPT_API.route("/v1/chatgpt/chatgpt", methods=["POST", "GET"])
async def post_chatgpt_decode(request):
    userText = request.json.get("prompt", "")
    userText, AIText = userText.rsplit("\nAI:", 1)
    userText = userText.lstrip("Human:")
    data = {"choices": [{"text": "非法请求", "index": 0, "finish_reason": "stop", "block": False}], "error": None}
    if userText:
        if userText.startswith("DeletePrivateAuthorization:"):
            result = Json({
                "choices": [
                    {
                        "text": "User Cancel Authorization",
                        "index": 0,
                        "finish_reason": "stop",
                        "block": False
                    }],
                "error": None})
            result.cookies["PrivateAuthorization"] = ""
            return result

        if userText.startswith("AddPrivateAuthorization:"):
            authorizationResult = re.search("AddPrivateAuthorization:\[(.*?)\]", userText)
            if authorizationResult:
                result = Json({
                    "choices": [
                        {
                            "text": "User authorization succeeded",
                            "index": 0,
                            "finish_reason": "stop",
                            "block": False
                        }],
                    "error": None})
                privateAuthorization = authorizationResult.group(1).strip()
                result.cookies["PrivateAuthorization"] = privateAuthorization
                return result

        data["choices"] = chatGPT.GetApi(userText, request.cookies.get("PrivateAuthorization") or random.choice(Authorization))
    return Json(data)

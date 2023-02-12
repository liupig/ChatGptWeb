from sanic import Blueprint
from Config.configuration import *
from ChatGPT.Service.OpenAIController import ChatGPT

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
        data["choices"] = chatGPT.GetApi(userText)
    return Json(data)

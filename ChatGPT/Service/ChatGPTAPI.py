import json
import random
import re
import time
from sanic import response

from sanic import Blueprint, text
from Config.configuration import *
from ChatGPT.Service.OpenAIController import ChatGPT

Authorization = []  # 替换你自己的Authorization
if not Authorization:
    raise "Please enter your Authorization"

SERVERINDEX = Blueprint("Index")
chatGPT = ChatGPT()
INDEX_TEMPLATE = ["LiuPigVip.html"]
# INDEX_TEMPLATE = ["LiuPig.html"]
# INDEX_TEMPLATE = ["LiuPig.html", "LiuPigVip.html"]


@SERVERINDEX.route("", methods=["POST", "GET"])
async def process_index_request(request):
    return template(random.choice(INDEX_TEMPLATE))


NoneRequest = Blueprint("NonRequest")


@NoneRequest.route("feishu-config", methods=["POST", "GET"])
async def process_error_request(request):
    return Json({})


CHATGPT_API = Blueprint("ChatgptApi")


@CHATGPT_API.route("/backend-api/conversation/", methods=["POST", "GET"])
async def post_chatgpt_decode1(request):
    body = request.json
    import uuid
    conversation_id = body.get("conversation_id") or str(uuid.uuid4())
    userText = request.json["messages"][0]["content"]["parts"][0]

    result = chatGPT.GetContent(userText, request.cookies.get("PrivateAuthorization") or random.choice(Authorization))
    content = (result or {}).get("choices", [])[0]["text"]
    contentId = result["id"]

    async def sample_streaming_fn(response):
        output = [content]
        for c in re.findall(r'.{10}', output):
            data555 = {
                "message": {
                    "id": "{}".format(str(uuid.uuid4())),
                    "role": "assistant",
                    "user": None,
                    "create_time": None,
                    "update_time": None,
                    "content": {
                        "content_type": "text",
                        "parts": [
                            "{}".format(c)
                        ]
                    },
                    "end_turn": None,
                    "weight": 1.0,
                    "metadata": {},
                    "recipient": "all"
                },
                "conversation_id": conversation_id,
                "error": None
            }
            await response.write("""data: {}\n\n""".format(json.dumps(data555)).encode("utf8"))
            time.sleep(1)

        await response.write("""data: [DONE]\n\n""".encode("utf8"))

    return response.stream(sample_streaming_fn, content_type="text/event-stream; charset=utf-8")


@CHATGPT_API.route("/backend-api/conversation/gen_title/<pid:str>", methods=["POST", "GET"])
async def post_chatgpt_decode12(request, pid):
    print("/backend-api/conversations")
    print(json.dumps(request.json, ensure_ascii=False))

    return Json({"ok": "yes"})


@CHATGPT_API.route("/backend-api/conversations", methods=["POST", "GET"])
async def post_chatgpt_decode2(request):
    print("/backend-api/conversations")
    print(json.dumps(request.json, ensure_ascii=False))
    # data = {"items": [{"id": "45e01359-123f-43c8-92e2-8ba340081bc5", "title": "AI Can't Feel Love.",
    #                    "create_time": "2023-02-15T09:25:06.199387"}
    #                   ], "total": 8, "limit": 20, "offset": 0}

    data = {"items": [], "total": 8, "limit": 20, "offset": 0}
    return Json(data)


@CHATGPT_API.route("/api/auth/session", methods=["POST", "GET"])
async def post_chatgpt_decode3(request):
    data = {
        "user": {
            "id": "LiuPig",
            "name": "LiuPig",
            "email": "Hello@LiuPig.com",
            "image": "",
            "picture": "",
            "groups": []
        },
        "expires": "2520-03-07T06:08:06.555Z",
        "accessToken": "LiuPigToken"
    }

    return Json(data)


@CHATGPT_API.route("/backend-api/moderations", methods=["POST", "GET"])
async def post_chatgpt_decode4(request):
    data = {"flagged": False, "blocked": False, "moderation_id": "moderation_id_test"}
    return Json(data)


@CHATGPT_API.route("/backend-api/models", methods=["POST", "GET"])
async def post_chatgpt_decode333(request):
    data = {
        "models": [
            {
                "slug": "text-davinci-002-render-sha",
                "max_tokens": 4097,
                "title": "Turbo (Default for free users)",
                "description": "The standard ChatGPT model",
                "tags": [
                    "not_concise"
                ]
            }
        ]
    }
    return Json(data)


@CHATGPT_API.route("/v1/chatgpt/chatgpt", methods=["POST", "GET"])
async def post_chatgpt_decode5(request):
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


@CHATGPT_API.route('/_next/image', methods=["POST", "GET"])
async def handle_request567(request):
    return await response.file_stream('./static/image/chatgpt.png')

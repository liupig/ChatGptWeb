#!/usr/bin/env python
# -*- coding: utf-8 -*-
from sanic import Sanic
from sanic_session import Session, InMemorySessionInterface
from sanic_cors import CORS

from ChatGPT.Service.ChatGPTAPI import CHATGPT_API, SERVERINDEX, NoneRequest

APP = Sanic(__name__)
APP.static('/static', './static')
CORS(APP)
session = Session(APP, interface=InMemorySessionInterface())
APP.blueprint(CHATGPT_API)
APP.blueprint(SERVERINDEX)
APP.blueprint(NoneRequest)

if __name__ == "__main__":
    # sanic RunBing.APP --host=0.0.0.0 --port=7777 --workers=4
    # python -m sanic RunBing.APP --host=0.0.0.0 --port=7777 --workers=4
    APP.run(host='0.0.0.0', port=8090, debug=False, auto_reload=True, workers=4)

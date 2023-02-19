import json

import requests

URL = "https://api.openai.com/v1/completions"


class ChatGPT(object):
    @staticmethod
    def GetApi(prompt, authorization, model="text-davinci-003", temperature=0, max_tokens=3000):
        data = json.dumps({
            "model": model,
            "prompt": prompt,
            "temperature": temperature,
            "max_tokens": max_tokens
            # "stream": True
        })
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer {}".format(authorization)
        }
        response = requests.post(url=URL, headers=headers, data=data)
        result = response.json()
        return (result or {}).get("choices", [])

    @staticmethod
    def GetContent(prompt, authorization, model="text-davinci-003", temperature=0, max_tokens=3000):
        data = json.dumps({
            "model": model,
            "prompt": prompt,
            "temperature": temperature,
            "max_tokens": max_tokens
            # "stream": True
        })
        headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer {}".format(authorization)
        }
        response = requests.post(url=URL, headers=headers, data=data)
        return response.json() or {}

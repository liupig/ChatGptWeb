import json

import requests

URL = "https://api.openai.com/v1/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer you-Authorization"  # 替换你自己的Authorization
}


class ChatGPT(object):
    @staticmethod
    def GetApi(prompt, model="text-davinci-003", temperature=0, max_tokens=3000):
        data = json.dumps({
            "model": model,
            "prompt": prompt,
            "temperature": temperature,
            "max_tokens": max_tokens
            # "stream": True
        })
        response = requests.post(url=URL, headers=headers, data=data)
        result = response.json()
        return (result or {}).get("choices", [])

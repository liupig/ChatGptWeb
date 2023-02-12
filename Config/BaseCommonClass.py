import copy
import json
import sys

import pandas as pd
from jinja2 import Environment, select_autoescape, FileSystemLoader
from sanic import html
from werkzeug.routing import BaseConverter


class LoadConfig(object):
    def __init__(self, _MAIN_PARSER):
        self.__PythonScriptFileSet = dict()
        self.__AiIdentityInformation = _MAIN_PARSER["AiIdentityInformation"]
        self.__ServerInformation = _MAIN_PARSER["ServerInformation"]
        self.__FilePath = _MAIN_PARSER["FilePath"]
        self.__KeyName = _MAIN_PARSER["KeyName"]
        self.__LowServer = json.loads(_MAIN_PARSER["Server"]["LowServer"])
        self.__IllegalUser = set()

    @property
    def AiIdentityInformation(self):
        return copy.deepcopy(self.__AiIdentityInformation)

    @property
    def ServerInformation(self):
        return copy.deepcopy(self.__ServerInformation)

    @property
    def FilePath(self):
        return copy.deepcopy(self.__FilePath)

    @property
    def IllegalUser(self):
        return copy.deepcopy(self.__IllegalUser)

    @property
    def KeyName(self):
        return copy.deepcopy(self.__KeyName)

    @property
    def LowServer(self):
        return copy.deepcopy(self.__LowServer)

    def LoadFile(self, filePath, fileType="json", expect="json", extra=None):
        fileKey = f"{filePath}:{fileType}:{expect}:{str(extra)}"
        if fileKey in self.__PythonScriptFileSet:
            return self.__PythonScriptFileSet[fileKey]

        elif fileType == "json" and expect == 'json':
            with open(filePath, 'r', encoding='utf-8') as f:
                jsonContext = json.load(f)
                self.__PythonScriptFileSet[fileKey] = jsonContext
                return self.__PythonScriptFileSet[fileKey]

        elif fileType == "xlsx" and expect == "df":
            if extra:
                df = pd.read_excel(filePath, sheet_name=extra)
            else:
                df = pd.read_excel(filePath)

            self.__PythonScriptFileSet[fileKey] = df
            return self.__PythonScriptFileSet[fileKey]

        elif fileType == "txt" and expect == "readlines":
            lines = None
            with open(filePath, 'r', encoding='utf8') as f:
                lines = f.readlines()

            self.__PythonScriptFileSet[fileKey] = lines
            return self.__PythonScriptFileSet[fileKey]

    def SetIllegalUser(self, ip):
        self.__IllegalUser.add(ip)


class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


class JinJaTemplate(object):
    def __init__(self):
        self.template_paths = ["./templates"]
        self.env_sync = Environment(loader=FileSystemLoader(self.template_paths),
                                    autoescape=select_autoescape(['html', 'xml', 'tpl']),
                                    enable_async=False)
        self.enable_async_flag = sys.version_info >= (3, 6)
        self.env_async = Environment(loader=FileSystemLoader(self.template_paths),
                                     autoescape=select_autoescape(['html', 'xml', 'tpl']),
                                     enable_async=self.enable_async_flag)

    def template_render_sync(self, template_file, **kwargs):
        template = self.env_sync.get_template(template_file)
        rendered_template = template.render(kwargs)
        return html(rendered_template)

    async def template_render_async(self, template_file, **kwargs):
        template = self.env_async.get_template(template_file)
        rendered_template = await template.render_async(kwargs)
        return html(rendered_template)

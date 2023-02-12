import copy
import json
import sys

import pandas as pd
from jinja2 import Environment, select_autoescape, FileSystemLoader
from sanic import html
from werkzeug.routing import BaseConverter


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

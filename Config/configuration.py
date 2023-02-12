#!/usr/bin/env python
# -*- coding: utf-8 -*-


from Config.BaseCommonClass import *
from sanic import json as Json

JinJaTemplate = JinJaTemplate()
template = JinJaTemplate.template_render_sync
template_async = JinJaTemplate.template_render_async

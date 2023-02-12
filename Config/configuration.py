#!/usr/bin/env python
# -*- coding: utf-8 -*-

import logging
import os
from configparser import ConfigParser
from pkg_resources import resource_filename

from Config.BaseCommonClass import *
from sanic import json as Json

# _CONFIG_DISPATCHER = ConfigParser()
# _CONFIG_DISPATCHER.read(resource_filename("config", "application.ini"))
# _MAIN_PARSER = ConfigParser()
# _MAIN_PARSER.read(resource_filename("config", _CONFIG_DISPATCHER["configuration_file"]["active_file"]))


JinJaTemplate = JinJaTemplate()

template = JinJaTemplate.template_render_sync
template_async = JinJaTemplate.template_render_async

# ServerConfig = LoadConfig(_MAIN_PARSER)
Log = logging
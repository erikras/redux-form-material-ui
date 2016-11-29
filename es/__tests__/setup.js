'use strict';

var _jsdom = require('jsdom');

require('babel-polyfill');


global.document = (0, _jsdom.jsdom)('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
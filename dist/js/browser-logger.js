(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BrowserLogger"] = factory();
	else
		root["BrowserLogger"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _messages = [];
	var _style = [];
	var _method = "log";
	var _data = {};

	function Logger(msg, style, method) {
		if (msg) {
			Logger.set(method).put(msg, style).print();
		}

		return Logger;
	}

	Logger.set = function () {
		var method = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "log";

		_method = method;
		return Logger;
	};

	Logger.put = function (msg) {
		var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

		_messages.push("%c" + msg);
		_style.push(style);
		return Logger;
	};

	Logger.print = function () {
		var message = [_messages.join(" ")].concat(_style);
		console[_method].apply({}, message);

		_messages = [];
		_style = [];
		_method = "log";
	};

	Logger.data = function (data) {
		_data = data;
		return Logger;
	};

	Logger.error = function (code, style) {
		var msg = _data[code];
		return Logger(msg, style, "error");
	};

	Logger.warn = function (code, style) {
		var msg = _data[code];
		return Logger(msg, style, "warn");
	};

	Logger.info = function (code, style) {
		var msg = _data[code];
		return Logger(msg, style, "info");
	};

	Logger.log = function (code, style) {
		var msg = _data[code];
		return Logger(msg, style, "log");
	};

	Logger.success = function (code, style) {
		var msg = _data[code];
		return Logger(msg, "color: green;" + style, "log");
	};

	exports.default = Logger;

	module.exports = Logger;

/***/ }
/******/ ])
});
;
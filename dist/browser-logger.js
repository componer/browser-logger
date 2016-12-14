(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["browserLogger"] = factory();
	else
		root["browserLogger"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	var _attributions = {
		method: "log",
		separator: " "
	};
	var _messages = [];
	var _style = [];
	var _data = {};
	
	function Logger(msg) {
		var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
		var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "log";
	
		if (msg) {
			Logger.set("method", method).put(msg, style).print();
		}
		return Logger;
	}
	
	Logger.set = function (key, value) {
		_attributions[key] = value;
		return Logger;
	};
	
	Logger.get = function (key) {
		return _attributions[key];
	};
	
	Logger.put = function (msg) {
		var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
		_messages.push("%c" + msg);
		_style.push(style);
		_messages.push("%c" + Logger.get("separator"));
		_style.push("");
		return Logger;
	};
	
	Logger.print = function () {
		_messages.pop();
		_style.pop();
		var message = [_messages.join("")].concat(_style);
		var method = Logger.get("method");
		console[method].apply({}, message);
	
		_messages = [];
		_style = [];
		Logger.set("method", "log");
	};
	
	Logger.data = function (data) {
		_data = data;
		return Logger;
	};
	
	Logger.error = function (code, style) {
		var msg = _data[code] || code;
		return Logger(msg, style, "error");
	};
	
	Logger.warn = function (code, style) {
		var msg = _data[code] || code;
		return Logger(msg, style, "warn");
	};
	
	Logger.info = function (code, style) {
		var msg = _data[code] || code;
		return Logger(msg, style, "info");
	};
	
	Logger.log = function (code, style) {
		var msg = _data[code] || code;
		return Logger(msg, style, "log");
	};
	
	Logger.success = function (code, style) {
		var msg = _data[code] || code;
		return Logger(msg, style + ";color: green", "log");
	};
	
	exports.default = Logger;
	
	module.exports = Logger;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=browser-logger.js.map
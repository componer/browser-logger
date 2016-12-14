var _attributions = {
	method: "log",
	separator: " ",
}
var _messages = []
var _style = []
var _data = {}

function Logger(msg, style = "", method = "log") {
	if(msg) {
		Logger.set("method", method).put(msg, style).print()
	}
    return Logger
}

Logger.set = function(key, value) {
	_attributions[key] = value
	return Logger
}

Logger.get = function(key) {
	return _attributions[key]
}

Logger.put = function(msg, style = "") {
	_messages.push("%c" + msg)
	_style.push(style)
	_messages.push("%c" + Logger.get("separator"))
	_style.push("")
	return Logger
}

Logger.print = function() {
	_messages.pop()
	_style.pop() 
	var message = [_messages.join("")].concat(_style)
	var method = Logger.get("method")
    console[method].apply({},message)

    _messages = []
	_style = []
	Logger.set("method", "log")
}

Logger.data = function(data) {
	_data = data
	return Logger
}

Logger.error = function(code, style) {
    var msg = _data[code] || code
    return Logger(msg, style, "error")
}

Logger.warn = function(code, style) {
    var msg = _data[code] || code
    return Logger(msg, style, "warn")
}

Logger.info = function(code, style) {
    var msg = _data[code] || code
    return Logger(msg, style, "info")
}

Logger.log = function(code, style) {
	var msg = _data[code] || code
    return Logger(msg, style, "log")
}

Logger.success = function(code, style) {
	var msg = _data[code] || code
    return Logger(msg, style + ";color: green", "log")
}

export default Logger
module.exports = Logger
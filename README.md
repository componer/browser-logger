# BrowserLogger

Help you to log info easily in browser console.

## Install

```
<script src="browser-logger/dist/js/browser-logger.min.js"></script>
```

Or you can use it in AMD modules system:

```
define(function(require, exports, module) {
	var BrowserLogger = require('BrowserLogger');
})
```

It can only be used in browser. If you want to use in CMD/CLI, look into https://github.com/tangshuang/process.logger

## Usage

```
BrowserLogger(msg[, style = "", method = "log"])
```

**msg**

The text you want to log into console.

**style**

Style you want to apply to `msg`, e.g. you can set `color: blue` and the text color in console will be blue.

You can always try to use css style, e.g. `background: #000; color: #fff; font-size: 2em`

**method**

Console log method you want to use, in ["log", "error", "warn", "info"]. Default is "log".

**example**

```
BrowserLogger("Don't touch the button!", "color: red; font-size: 2em", "warn")
```

## APIs

In fact, in my opinion, I want you to rewrite message info in a config file, and git config data to logger. When you want to log a message, just give the message id. Then, when you want to change a message text, just edit the config file.

So, I give `.log()` `.error()` `.info()` `.warn()` `.success()` based on this idea.

#### .data()

Set config data

```
BrowserLogger.data({
	1003: "request fail!",
	1004: "touch remote!",
	1005: "miss file!",
})
```

#### .log(code, style)

Like `console.log`, just log info with error code

```
BrowserLogger.log(1003, "color: grey")
```

#### .error(code, style)

Like `console.error`, with code

```
BrowserLogger.log(1003, "weight: bold")
```

#### .warn(code, style)

#### .info(code, style)

#### .success(code, style)

Make `.log()` text color to be green.

```
BrowserLogger.success(1003, "weight: bold")
```

**Notice:** relationship between `.data()` and `.log(), .error(), .info(), .warn(), .success()` is: set data once use everywhere util you set data again.

#### .set(method).put(msg, style).print()

Some times you want to use different style in defferent words, you can do like this:

```
BrowserLogger.set("warn").put("You", "color: red").put("are", "color: black").put("a", "weight: bold").put("pig", "font-size: 3em").print()
```

Don't forget to call `.print()` at last.


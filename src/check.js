/**
 * @file check.js
 * @author Y3G
 * @fileoverview
 * 对象检查器
 */

'use strict';

var is = require('./is');
var defineProperty = require('./defineProperty');
var makePolicy = require('./makePolicy');
var equal = require('deep-equal');

var isFunction = is['function'];
var isString = is['string'];
var isNumber = is['number'];
var isUndefined = is['undefined'];
var isNull = is['null'];
var isRegExp = is['regExp'];

module.exports = {
	check : check,
	Checker : Checker,
	NotChecker : NotChecker,
	setCheckFailureCallback : setCheckFailureCallback,
	setIsExternalSourceFileCallback : setIsExternalSourceFileCallback,
};

var checkFailureCallback = null;

function setCheckFailureCallback(cb) {
	checkFailureCallback = cb;
}

var rexpPosition = /[^/\\:*?"<>|]+:\d+(?:\:\d+)?\)?$/;
var pauseCallback = false;

var isExternalSourceFile = function (line) {
	return (line.indexOf('param-check.js') === -1);
}

function setIsExternalSourceFileCallback(fn) {
	isExternalSourceFile = fn;
}

function throwError(err) {
	if (err.stack &&
		!pauseCallback &&
		err.message.indexOf('[PARAM-CHECK]') === 0) {
		// 找到发生异常的外部代码
		// 因为位置是给外部使用者看的，所以 pauseCallback 生效时，没有必要分析位置
		var lines = err.stack.split('\n');
		var len = lines.length;

		for (var i = 1; i < len; ++i) {
			var line = lines[i];
			if (isExternalSourceFile(line)) {
				var pos = rexpPosition.exec(line);

				if (pos) {
					pos = ' position: ' + pos[0] + '.';
					err.message = err.message + pos;
					break;
				}
			}
		}
	}

	var ignore = false;

	if (!pauseCallback && isFunction(checkFailureCallback)) {
		ignore = checkFailureCallback(err);
	}

	if (!ignore) {
		throw err;
	}
}

function assert(condition, message) {
	if (!condition) {
		throwError(new Error(message));
	}
}

function Checker(obj, name, owner) {
	this.obj_ = obj;
	this.name_ = name || '[unknown]';
	this.owner_ = owner;

	try {
		defineProperty(this, 'not', function () {
			var ret = this.not_ || (this.not_ = new NotChecker(this));
			return ret;
		});
		
		defineProperty(this, 'owner', function () {
			return this.owner_;
		});
	} catch (e) {
		this.not = new NotChecker(this);
		this.owner = owner;
	}
}

function getObjStr(obj) {
	return isString(obj) ? ('"' + obj + '"') : ('' + obj);
}

Checker.prototype._makeMessage = function (entry, args) {
	var reason;
	
	if (entry === 'is') {
		reason = 'is NOT ' + Array.prototype.join.call(args, ', ');
	} else if (entry === 'gt') {
		reason = 'is NOT greater than ' + getObjStr(args[0]);
	} else if (entry === 'lt') {
		reason = 'is NOT less than ' + getObjStr(args[0]);
	} else if (entry === 'within') {
		reason = 'is NOT in ranges: ' + Array.prototype.join.call(args, ', ');
	} else if (entry === 'match') {
		reason = 'does NOT match regexp: ' + getObjStr(args[0]);
	} else if (entry === 'same') {
		reason = 'is NOT the same object to ' +getObjStr(args[0]);
	} else if (entry === 'eq') {
		reason = 'is NOT equal to ' + getObjStr(args[0]);
	} else if (entry === 'has') {
		reason = 'has NO own property: ' + getObjStr(args[0]);
	} else if (entry === 'length') {
		reason = 'has NO length';
	} else if (entry == 'and') {
		// args[0] 是执行失败的检查序号,args[1] 是具体原因
		var no = args[0];
		var detail = args[1] || 'unknown';

		if (detail.isPolicy) {
			detail = detail.path();
		}

		reason = 'FAILED when executing check[' +
			no + '] of an "AND" check, detail: {' + detail + '}';
	} else if (entry == 'or') {
		var mapArgs = [];
		
		for (var i = 0; i < args.length; ++i) {
			var detail = args[i] || 'unknown';

			if (detail.isPolicy) {
				detail = detail.path();
			}
			
			mapArgs.push(detail);
		}
		
		reason = 'FAILED when executing an "OR" check, detail: {' + mapArgs.join('}{') + '}';
	} else {
		reason = 'for unknown reason';
	}

	var objValue = getObjStr(this.obj_);

	return '[PARAM-CHECK] Check failure: ' + this.name_ + '(' + objValue + ') ' + reason + '.';
}

Checker.prototype.is = function () {
	var len = arguments.length;
	var obj = this.obj_;
	var yes = false;

	for (var i = 0; i < len; ++i) {
		var key = arguments[i];
		assert(isString(key), '[PARAM-CHECK-INTERNAL] Bad param: arguments[' + i + '] is NOT string');
		var fn = is[key];

		if (is.hasOwnProperty(key) && isFunction(fn)) {
			if (fn(obj)) {
				yes = true;
				break;
			}
		}
	}

	assert(yes, this._makeMessage('is', arguments));

	return this;
};

Checker.prototype.gt = function (n) {
	assert(isNumber(n), '[PARAM-CHECK-INTERNAL] Bad param: n is NOT a number');
	assert(this.obj_ > n, this._makeMessage('gt', arguments));
	
	return this;
};

Checker.prototype.lt = function (n) {
	assert(isNumber(n), '[PARAM-CHECK-INTERNAL] Bad param: n is NOT a number');
	assert(this.obj_ < n, this._makeMessage('lt', arguments));
	
	return this;
};

var rangeFns = {};
var rexpRange = /^([(\[])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/;

function getRangeFn(range) {
	var fn = rangeFns[range];

	if (fn) return fn;
	
	var match = rexpRange.exec(range);
	
	assert(match && match.length === 5, '[PARAM-CHECK-INTERNAL] Bad range string: ' + range);
	
	var op1 = (match[1] === '[') ? '>=' : '>';
	var op2 = (match[2] === ']') ? '<=' : '<';
	var lowerBound = parseFloat(match[2]);
	var higherBound = parseFloat(match[3]);
	
	var fnSource = ('return (n $op1 $lowerBound) && (n $op2 $higherBound);')
		.replace('$op1', op1)
		.replace('$lowerBound', lowerBound)
		.replace('$op2', op2)
		.replace('$higherBound', higherBound);

	fn = rangeFns[range] = new Function(['n'], fnSource);
	
	return fn;
}

Checker.prototype.within = function () {
	var len = arguments.length;
	
	if (len === 0) {
		return this;
	}

	var obj = this.obj_;
	var yes = false;

	for (var i = 0; i < len; ++i) {
		var range = arguments[i];
		assert(isString(range), '[PARAM-CHECK-INTERNAL] Bad param: arguments[' + i + '] is NOT string');
		var fn = getRangeFn(range);

		if (fn(obj)) {
			yes = true;
			break;
		}
	}

	assert(yes, this._makeMessage('within', arguments));
	
	return this;
};

Checker.prototype.match = function (rexp) {
	var obj = this.obj_;

	assert(isRegExp(rexp), '[PARAM-CHECK-INTERNAL] Bad param: n is NOT a regexp');
	assert(isString(obj) && rexp.test(obj), this._makeMessage('match', arguments));
	
	return this;
}

Checker.prototype.same = function (other) {
	assert((this.obj_ === other), this._makeMessage('same', arguments));
	return this;
};

Checker.prototype.eq = function (other) {
	assert(equal(this.obj_, other), this._makeMessage('eq', arguments));
	return this;
};

Checker.prototype.has = function (key) {
	assert(isString(key) || isNumber(key), '[PARAM-CHECK-INTERNAL] key is neither a string nor a number');
	
	var obj = this.obj_;

	assert(!isUndefined(obj) &&
		!isNull(obj) &&
		obj.hasOwnProperty &&
		obj.hasOwnProperty(key), this._makeMessage('has', arguments));

	return new Checker(obj[key], this.name_ + '.' + key, this);
}

Checker.prototype.length = function () {
	var obj = this.obj_;

	assert(!isUndefined(obj) &&
		!isNull(obj) &&
		isNumber(obj.length), this._makeMessage('length', arguments));
	
	return new Checker(obj.length, this.name_ + '.length', this);
}

Checker.prototype.map = function (fn) {
	var obj = this.obj_;
	var mapObj;

	try {
		if (isFunction(fn)) {
			mapObj = fn(obj);
		} else if (isString(fn)) {
			assert(!isUndefined(obj) && !isNull(obj));
			var fn = obj[fn];
			assert(isFunction(fn));
			var args = Array.prototype.slice.call(arguments, 1);

			mapObj = fn.apply(obj, args);
		} else {
			throw '';
		}
	} catch (e) {
		var msg = '[PARAM-CHECK-INTERNAL] Map failed: ' + fn.toString();
		throwError(new Error(msg));
	}
	
	var str = isString(fn) ? '=>' + fn : '=>[anonymous function]';
	return new Checker(mapObj, this.name_ + str, this);
}

Checker.prototype.and = function () {
	var obj = this.obj_;
	var errorMsg;
	var len = arguments.length;

	for (var i = 0; i < len; ++i) {
		var fn = arguments[i];
		
		if (isFunction(fn)) {
			try {
				var ret = fn(this.obj_);
			} catch (err) {
				errorMsg = err.message;
				ret = false;
			}

			if (!ret) {
				errorMsg = this._makeMessage('and', [i, errorMsg]);
				break;
			}
		} else if (fn.isPolicy) {
			try {
				fn.exec(this);
			} catch (e) {
				errorMsg = this._makeMessage('and', [i, e.message]);
				break;
			}
		} else {
			errorMsg = '[PARAM-CHECK-INTERNAL] Bad param: argument[' + i + '] is NOT a function or policy';
			break;
		}
	}
	
	if (errorMsg) {
		throwError(new Error(errorMsg));
	}

	return this;
}

Checker.prototype.or = function () {
	var obj = this.obj_;
	var errorMsg;
	var errorDetail = [];
	var len = arguments.length;
	var errorCount = 0;

	for (var i = 0; i < len; ++i) {
		var fn = arguments[i];
		
		if (isFunction(fn)) {
			try {
				var ret = fn(this.obj_);
				
				if (ret) {
					break;
				}
			} catch (err) {
				errorDetail.push(err.message);
				errorCount++;
				continue;
			}

			errorDetail.push('unknown');
			errorCount++;
		} else if (fn.isPolicy) {
			try {
				fn.exec(this);
			} catch (err) {
				errorDetail.push(err.message);
				errorCount++;
				continue;
			}

			break;
		} else {
			errorMsg = '[PARAM-CHECK-INTERNAL] Bad param: argument[' + i + '] is NOT a function or policy';
			break;
		}
	}

	if (errorMsg) {
		// 优先抛出内部错误
		throwError(new Error(errorMsg));
	}

	if (errorCount === len) {
		throwError(new Error(this._makeMessage('or', errorDetail)));
	}

	return this;
}

function NotChecker(checker) {
	this.checker_ = checker;
}

var arr = ['is', 'gt', 'lt', 'within', 'match', 'same', 'eq', 'has', 'length', 'and', 'or'];

for (var i = 0; i < arr.length; ++i) {
	var currName = arr[i];

	NotChecker.prototype[currName] = (function (name) {
		return function () {
			var args = Array.prototype.slice.call(arguments, 0);
			var that = this.checker_;
			var yes = false;
			var pauseCallbackBak = pauseCallback;
			
			pauseCallback = true;

			try {
				var ret = that[name].apply(that, args);
			} catch (e) {
				if (e.message.indexOf('[PARAM-CHECK]') === 0) {
					yes = true;
				} else {
					// 内部错误
					throw e;
				}
			} finally {
				pauseCallback = pauseCallbackBak;
			}

			assert(yes, that._makeMessage(name, args)
				.replace('[PARAM-CHECK]', '[PARAM-CHECK][NOT-CHECK]')
				.replace(/NOT? /, '')
				.replace(/FAILED /, 'SUCCESS '));

			return that;
		}
	})(currName);
}

function check(obj, name) {
	return new Checker(obj, name);
}

check.policy = makePolicy(Checker.prototype, ['not', 'owner']);

/**
 * @file check.js
 * @author Y3G
 * @fileoverview
 * 对象检查器
 */

'use strict';

var is = require('./is');
var message = require('./message');
var defineProperty = require('./defineProperty');
var equal = require('deep-equal');

var isFunction = is.isFunction;
var isString = is.isString;
var isNumber = is.isNumber;
var isUndefined = is.isUndefined;
var isNull = is.isNull;
var isExist = is.isExist;
var isRegExp = is.isRegExp;

module.exports = {
	check: check,
	Checker: Checker,
	NotChecker: NotChecker,
};

function check(obj, name) {
	return new Checker(obj, name);
}

function throwError(err, async) {
	if (async) {
		setTimeout(function() {
			throw err;
		}, 0);

		return;
	}

	throw err;
}

function verify(condition, message, async) {
	if (!condition) {
		var msg = isFunction(message) ? message() : message;
		throwError(new Error(msg), async);
	}
}

function verifyInternal(condition, message) {
	if (!condition) {
		console.warn('[PARAM-CHECK-INTERNAL] ' + message);
	}

	return condition;
}

function Checker(obj, name, owner) {
	this.obj_ = obj;
	this.name_ = name || '[unknown object]';
	this.owner = owner;

	try {
		defineProperty(this, 'not', function() {
			var ret = this.not_ || (this.not_ = new NotChecker(this));
			return ret;
		});
	} catch (e) {
		this.not = new NotChecker(this);
	}
}

Checker.prototype.is = function() {
	var obj = this.obj_,
		name = this.name_;
	var len = arguments.length;
	var yes = false;

	for (var i = 0; i < len; ++i) {
		var key = arguments[i];

		if (verifyInternal(isString(key),
				'Bad param: arguments[' + i + '] is NOT string')) {
			key = key.toLowerCase();

			var fn = is[key];

			if (verifyInternal(is.hasOwnProperty(key) && isFunction(fn),
					'Bad param: arguments[' + i + '] is NOT a legal type') && fn(obj)) {
				yes = true;
				break;
			}
		}
	}

	verify(yes, message('is', obj, name, arguments));

	return this;
};

for (var entry in is) {
	var fn = is[entry];

	if (!is.hasOwnProperty(entry) || !isFunction(fn)) {
		continue;
	}

	(function(entry, fn) {
		Checker.prototype[entry] = function() {
			var obj = this.obj_,
				name = this.name_;
			verify(fn(obj), message(entry, obj, name, arguments));
			return this;
		}
	})(entry, fn);
}

Checker.prototype.instanceOf = function(ctor) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isFunction(ctor), 'Bad param: ctor is NOT a function')) {
		verify(obj instanceof ctor, message('instanceOf', obj, name, arguments));
	}

	return this;
}

Checker.prototype.gt = function(n) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
		verify(isNumber(obj), message('isNumber', obj, name, arguments));
		verify(obj > n, message('gt', obj, name, arguments));
	}

	return this;
};

Checker.prototype.greaterThan = Checker.prototype.gt;

Checker.prototype.egt = function(n) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
		verify(isNumber(obj), message('isNumber', obj, name, arguments));
		verify(obj >= n, message('gt', obj, name, arguments));
	}

	return this;
};

Checker.prototype.equalOrGreaterThan = Checker.prototype.egt;

Checker.prototype.lt = function(n) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
		verify(isNumber(obj), message('isNumber', obj, name, arguments));
		verify(obj < n, message('lt', obj, name, arguments));
	}

	return this;
};

Checker.prototype.lessThan = Checker.prototype.lt;

Checker.prototype.elt = function(n) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
		verify(isNumber(obj), message('isNumber', obj, name, arguments));
		verify(obj <= n, message('lt', obj, name, arguments));
	}

	return this;
};

Checker.prototype.qeualOrLessThan = Checker.prototype.elt;

var rangeFnCache = {};
var rexpRange = /^([(\[])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/;

function getRangeFn(range) {
	var fn = rangeFnCache[range];

	if (fn) return fn;

	if (!verifyInternal(isString(range),
			'Bad param: range is NOT string')) {
		return null;
	}

	var match = rexpRange.exec(range);

	if (!verifyInternal(match && match.length === 5,
			'Bad param: bad range string: ' + range)) {
		return null;
	}

	try {
		var op1 = (match[1] === '[') ? '>=' : '>';
		var op2 = (match[2] === ']') ? '<=' : '<';
		var lowerBound = parseFloat(match[2]);
		var higherBound = parseFloat(match[3]);

		var fnSource = ('return (n $op1 $lowerBound) && (n $op2 $higherBound);')
			.replace('$op1', op1)
			.replace('$lowerBound', lowerBound)
			.replace('$op2', op2)
			.replace('$higherBound', higherBound);

		fn = rangeFnCache[range] = new Function(['n'], fnSource);
	} catch (err) {
		return null;
	}

	return fn;
}

Checker.prototype.within = function() {
	var len = arguments.length;

	if (len === 0) {
		return this;
	}

	var obj = this.obj_,
		name = this.name_;
	var yes = false;

	for (var i = 0; i < len; ++i) {
		var range = arguments[i];
		var fn = getRangeFn(range);

		if (fn && fn(obj)) {
			yes = true;
			break;
		}
	}

	verify(yes, message('within', obj, name, arguments));

	return this;
};

Checker.prototype.match = function(rexp) {
	var obj = this.obj_,
		name = this.name_;

	if (verifyInternal(isRegExp(rexp),
			'Bad param: n is NOT a regexp')) {
		verify(isString(obj), message('isString', obj, name, arguments))
		verify(rexp.test(obj), message('match', obj, name, arguments));
	}

	return this;
};

Checker.prototype.same = function(other) {
	var obj = this.obj_,
		name = this.name_;

	verify((obj === other), message('same', obj, name, arguments));

	return this;
};

Checker.prototype.eq = function(other) {
	var obj = this.obj_,
		name = this.name_;

	verify(equal(obj, other), message('eq', obj, name, arguments));

	return this;
};

Checker.prototype.equal = Checker.prototype.eq;

Checker.prototype.has = function(key) {
	var obj = this.obj_,
		name = this.name_;

	verify(isExist(obj), message('isExist', obj, name, arguments))
	verify(obj.hasOwnProperty && obj.hasOwnProperty(key),
		message('has', obj, name, arguments));

	return new Checker(obj[key], name + '.' + key, this);
}

Checker.prototype.hasOwn = Checker.prototype.has;

Checker.prototype.got = function(key) {
	var obj = this.obj_,
		name = this.name_;

	verify(isExist(obj), message('isExist', obj, name, arguments));
	verify(!isUndefined(obj[key]), message('got', obj, name, arguments));

	return new Checker(obj[key], name + '.' + key, this);
};

Checker.prototype.length = function() {
	return this.got('length');
};

Checker.prototype.map = function(fn) {
	var obj = this.obj_,
		name = this.name_;
	var mapObj;

	verify(isExist(obj), message('isExist', obj, name, arguments));

	try {
		if (isFunction(fn)) {
			mapObj = fn(obj);
		} else if (isString(fn)) {
			var f = obj[fn];
			if (verifyInternal(isFunction(f),
					'Bad param: the obj has NOT got a(n) method called' + fn)) {
				mapObj = f.apply(obj, Array.prototype.slice.call(arguments, 1));
			}
		} else {
			verifyInternal(false, 'Bad param: fn is illegal');
		}
	} catch (err) {
		verify(false, err.message);
	}

	var str = name + '=>' + (isString(fn) ? fn : '[anonymous function]');
	return new Checker(mapObj, str, this);
};

function errorMessage(fn) {
	var args = Array.prototype.slice.call(arguments, 1);

	try {
		if (!fn.apply(this, args)) {
			var message = fn.name || fn.toString();
			
			return message;
		}
	} catch (err) {
		return err.message;
	}
}

Checker.prototype.meet = function(fn) {
	var obj = this.obj_,
		name = this.name_;
	var errorMsg;

	if (verifyInternal(isFunction(fn) || fn.isPolicy,
			'Bad param: fn is NOT a function or policy')) {
		if (fn.isPolicy) {
			try {
				fn.exec(this);
			} catch (e) {
				errorMsg = fn.path();
			}
		} else {
			errorMsg = errorMessage(fn, obj);
		}
	}

	verify(!errorMsg, message('meet', obj, name, [errorMsg]));

	return this;
};

Checker.prototype.and = function() {
	var obj = this.obj_,
		name = this.name_;
	var len = arguments.length;
	var errorMsg;

	for (var i = 0; i < len; ++i) {
		var fn = arguments[i];

		if (isFunction(fn)) {
			errorMsg = errorMessage(fn, obj);
			if (errorMsg) {
				errorMsg = message('and', obj, name, [i, errorMsg]);
				break;
			}
		} else if (fn.isPolicy) {
			try {
				fn.exec(this);
			} catch (e) {
				errorMsg = message('and', obj, name, [i, fn.path()]);
				break;
			}
		} else {
			verifyInternal(false, 'Bad param: argument[' + i + '] is NOT a function or policy');
		}
	}

	verify(!errorMsg, errorMsg)

	return this;
};

Checker.prototype.or = function() {
	var obj = this.obj_,
		name = this.name_;
	var len = arguments.length;
	var errorDetail = [];
	var errorCount = 0;

	for (var i = 0; i < len; ++i) {
		var fn = arguments[i];

		if (isFunction(fn)) {
			var errorMsg = errorMessage(fn, obj);
			if (errorMsg) {
				errorDetail.push(errorMsg);
				errorCount++;
				continue;
			}

			break;
		} else if (fn.isPolicy) {
			try {
				fn.exec(this);
			} catch (err) {
				errorDetail.push(fn.path());
				errorCount++;
				continue;
			}

			break;
		} else {
			verifyInternal(false, 'Bad param: argument[' + i + '] is NOT a function or policy');
		}
	}

	verify(errorCount < len, message('or', obj, name, errorDetail));

	return this;
};

function NotChecker(checker) {
	this.checker_ = checker;
}

for (var methodName in Checker.prototype) {
	var method = Checker.prototype[methodName];

	if (!Checker.prototype.hasOwnProperty(methodName) ||
		!isFunction(method)) {
		continue;
	}

	NotChecker.prototype[methodName] = (function(name) {
		return function() {
			var that = this.checker_;
			var obj = that.obj_;
			var objName = that.name_;
			var args = Array.prototype.slice.call(arguments, 0);
			var yes = false;

			try {
				that[name].apply(that, args);
			} catch (err) {
				if (err.message.indexOf('[PARAM-CHECK]') === 0) {
					yes = true;
				} else {
					throw err; // 内部错误，非检查失败
				}
			}

			verify(yes, function() {
				return message(name, obj, objName, args)()
					.replace('[PARAM-CHECK]', '[PARAM-CHECK][NOT-CHECK]');
			});

			return that;
		}
	})(methodName);
}
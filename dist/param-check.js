(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["param-check"] = factory();
	else
		root["param-check"] = factory();
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
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file index.js
	 * @author Y3G
	 * @fileoverview
	 * 入口文件
	 */

	'use strict';

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file entries.js
	 * @author Y3G
	 * @fileoverview
	 * 接口文件
	 */

	'use strict';

	var checkEntries = __webpack_require__(2);
	var check = checkEntries.check;

	check.Checker = checkEntries.Checker;
	check.setCheckFailureCallback = checkEntries.setCheckFailureCallback;
	check.setIsExternalSourceFileCallback = checkEntries.setIsExternalSourceFileCallback;

	module.exports = check;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file check.js
	 * @author Y3G
	 * @fileoverview
	 * 对象检查器
	 */

	'use strict';

	var is = __webpack_require__(3);
	var defineProperty = __webpack_require__(4);
	var makePolicy = __webpack_require__(5);
	var equal = __webpack_require__(6);

	var isFunction = is.isFunction;
	var isString = is.isString;
	var isNumber = is.isNumber;
	var isUndefined = is.isUndefined;
	var isNull = is.isNull;
	var isExist = is.isExist;
	var isRegExp = is.isRegExp;

	var lowerIs = {};

	for (var entry in is) {
		var fn = is[entry];

		if (!is.hasOwnProperty(entry) || !isFunction(fn)) {
			continue;
		}
		
		lowerIs[entry.toLowerCase().replace(/^is/, '')] = fn;
	}

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
		} else if (entry === 'got') {
			reason = 'has NOT got property: ' + getObjStr(args[0]);
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
		var types = [];

		for (var i = 0; i < len; ++i) {
			var key = arguments[i];
			
			assert(isString(key), '[PARAM-CHECK-INTERNAL] Bad param: arguments[' + i + '] is NOT string');		
			key = key.toLowerCase();
			types.push(key)

			var fn = lowerIs[key];

			if (lowerIs.hasOwnProperty(key) && isFunction(fn)) {
				if (fn(obj)) {
					yes = true;
					break;
				}
			} else {
				assert(false, '[PARAM-CHECK-INTERNAL] Bad param: arguments[' + i + '] is bad');
			}
		}

		assert(yes, this._makeMessage('is', types));

		return this;
	};

	for (var entry in is) {
		var fn = is[entry];

		if (!is.hasOwnProperty(entry) || !isFunction(fn)) {
			continue;
		}
		
		Checker.prototype[entry] = function () {
			var obj = this.obj_;
			assert(fn(obj), this._makeMessage('is', [entry.replace(/^is/, '')]));
		}
	}

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
		var obj = this.obj_;

		assert(isExist(obj) &&
			obj.hasOwnProperty &&
			obj.hasOwnProperty(key), this._makeMessage('has', arguments));

		return new Checker(obj[key], this.name_ + '.' + key, this);
	}

	Checker.prototype.got = function (key) {
		var obj = this.obj_;

		assert(isExist(obj), this._makeMessage('is', ['exist']));
		assert(!isUndefined(obj[key]), this._makeMessage('got', arguments));

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


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * @file is.js
	 * @author Y3G
	 * @fileoverview
	 * 检测数据类型
	 */

	'use strict';

	module.exports = {
		'isArray' : isArray,
		'isArrayLike' : isArrayLike,
		'isExist' : isExist,
		'isEmpty' : isEmpty,
		'isUndefined' : isUndefined,
		'isNull' : isNull,
		'isNaN' : isNaN,
		'isNumber' : isNumber,
		'isString' : isString,
		'isBoolean' : isBoolean,
		'isDate' : isDate,
		'isRegExp' : isRegExp,
		'isError' : isError,
		'isFunction' : isFunction,
		'isObject' : isObject,
		'isPlainObject' : isPlainObject,
		'isObjectLike' : isObjectLike,
		'isElement' : isElement,
		'isArguments' : isArguments,
		'isBasic' : isBasic,
	};

	/**
	 * 是否为数组
	 * @param o 目标对象
	 * @return
	 */
	function isArray(o) {
		if (o instanceof Array ||
			(o && o.constructor === Array) ||
			(typeof o === 'object' &&
				Object.prototype.toString.call(o) === '[object Array]')) {
			return true;
		}

		return false;
	}

	/**
	 * 是否为仿数组
	 * @param o 目标对象
	 * @return
	 */
	function isArrayLike(o) {
		if (!isExist(o) || isFunction(o)) {
			return false;
		}

		var len = o.length;
		return (isNumber(len) && len >= 0);
	}

	/**
	 * 是否存在
	 * @param o 目标对象
	 * @return
	 */
	function isExist(o) {
		return (typeof o !== 'undefined' && o !== null);
	}

	/**
	 * 是否为空（undefined，null，空字符串，空数组，空对象）
	 * @param o 目标对象
	 * @return
	 */
	function isEmpty(o) {
		if (!isExist(o)) {
			return true;
		}

		if (o === '') {
			// 空字符串
			return true;
		} else if (isArrayLike(o) && o.length === 0) {
			// 空数组
			return true;
		} else if (o.constructor && o.constructor === Object) {
			// 空对象，只有Object可以为空，其子类不可为空
			for (var key in o) {
				if (o.hasOwnProperty(key)) {
					return false;
				}
			}

			// 空对象
			return true;
		}

		return false;
	}

	/**
	 * 是否未定义
	 * @param o 目标对象
	 * @return
	 */
	function isUndefined(o) {
		return o === void 0;
	}

	/**
	 * 是否为null
	 * @param o 目标对象
	 * @return
	 */
	function isNull(o) {
		return o === null;
	}

	/**
	 * 是否为NaN
	 * @param o 目标对象
	 * @return
	 */
	function isNaN(o) {
		return isNumber(o) && o !== +o;
	}

	/**
	 * 是否为数字
	 * @param o 目标对象
	 * @return
	 */
	function isNumber(o) {
		return (Object.prototype.toString.call(o) === '[object Number]');
	}

	/**
	 * 是否为字符串
	 * @param o 目标对象
	 * @return
	 */
	function isString(o) {
		return (Object.prototype.toString.call(o) === '[object String]');
	}

	/**
	 * 是否为布尔值
	 * @param o 目标对象
	 * @return
	 */
	function isBoolean(o) {
		return o === true || o === false ||
		Object.prototype.toString.call(o) === '[object Boolean]';
	}

	/**
	 * 是否为日期
	 * @param o 目标对象
	 * @return
	 */
	function isDate(o) {
		return (Object.prototype.toString.call(o) === '[object Date]');
	}

	/**
	 * 是否为正则表达式
	 * @param o 目标对象
	 * @return
	 */
	function isRegExp(o) {
		return (Object.prototype.toString.call(o) === '[object RegExp]');
	}

	/**
	 * 是否为Error
	 * @param o 目标对象
	 * @return
	 */
	function isError(o) {
		return (Object.prototype.toString.call(o) === '[object Error]');
	}

	/**
	 * 是否为函数
	 * @param o 目标对象
	 * @return
	 */
	function isFunction(o) {
		return (Object.prototype.toString.call(o) === '[object Function]');
	}

	/**
	 * 是否为对象
	 * @param o 目标对象
	 * @return
	 */
	function isObject(o) {
		var type = typeof o;
		return !!o && (type == 'object' || type == 'function');
	}

	function isPlainObject(obj) {
		// from jQuery
		// 判断是否非window和DOM对象的对象，
		if (!obj || obj.toString() !== "[object Object]" || obj.nodeType || obj.setInterval) {
			return false;
		}

		// constructor是对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数
		// 判断obj是否具有isPrototypeOf属性，isPrototypeOf是挂在Object.prototype上的。
		// 通过字面量或自定义类（构造器）创建的对象都会继承该属性方法
		if (obj.constructor &&
			!obj.hasOwnProperty("constructor") &&
			!obj.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
			return false;
		}

		var key;
		for (key in obj) {}

		return key === undefined || obj.hasOwnProperty(key);
	}

	/**
	 * 是否为仿对象
	 * @param o 目标对象
	 * @return
	 */
	function isObjectLike(o) {
		return (!!o && (typeof o == 'object'));
	}

	/**
	 * 是否为DOM Element
	 * @param o 目标对象
	 * @return
	 */
	function isElement(o) {
		return (!!o && o.nodeType === 1 && isObjectLike(o));
	}

	/**
	 * 是否为参数表
	 * @param o 目标对象
	 * @return o为参数返回true，否则返回false
	 */
	function isArguments(o) {
		var op = Object.prototype;
		var argsTag = '[object Arguments]';

		return isArrayLike(o) && op.hasOwnProperty.call(o, 'callee') &&
		(!op.propertyIsEnumerable.call(o, 'callee') || op.toString.call(o) == argsTag);
	}

	/**
	 * 是否是基本类型
	 * @param o 目标对象
	 * @return o为基本类型返回true，否则返回false
	 */
	function isBasic(o) {
		return isUndefined(o) || isNull(o) ||
			isNumber(o) || isBoolean(o) || isString(o);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	/**
	 * @file defineProperty.js
	 * @author Y3G
	 * @fileoverview
	 * 自定义属性
	 */

	'use strict';

	module.exports = defineProperty;

	/**
	 * 定义自定义属性
	 * @param that 要定义属性的对象
	 * @param key 属性名
	 * @param getter
	 * @param setter
	 * @throw Error 浏览器不支持自定义属性
	 */
	function defineProperty(that, key, getter, setter) {
		if (Object.getOwnPropertyDescriptor) {
			var property = Object.getOwnPropertyDescriptor(that, key);
			if (property && property.configurable === false) {
				throw new Error(key + 'is NOT a configurable property');
			}
		}

		if (Object.defineProperty) {
			Object.defineProperty(that, key, {
				configurable : true,
				enumerable : true,
				get : getter,
				set : setter
			});
		} else if (Object.prototype.__defineGetter__) {
			Object.prototype.__defineGetter__.call(that, key, getter);
			Object.prototype.__defineSetter__.call(that, key, setter);
		} else {
			throw new Error('No API to define custom property');
		}
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file makePolicy.js
	 * @author Y3G
	 * @fileoverview
	 * 根据一个方法支持链式调用的类 A，生成一个提取其方法的“policy”类。
	 * 链式调用 policy 的方法，返回一个函数，执行函数即可链式执行 A 的相应方法。
	 */

	'use strict';

	var is = __webpack_require__(3);
	var defineProperty = __webpack_require__(4);

	var isFunction = is.isFunction;

	module.exports = makePolicy;

	/**
	 * 生成 policy
	 * @param proto 要生成 policy 的类原型
	 * @param chainingProps 支持链式调用的自定义属性名列表
	 * @param chainingMethods 支持链式调用的方法名列表
	 * @return 生成的 policy 实例
	 */
	function makePolicy(proto, chainingProps, chainingMethods) {
		function Policy(fn, prev, name) {
			this.fn_ = fn;
			this.prev_ = prev;
			this.name_ = name;
			this._initCustomProps(chainingProps);
		}

		Policy.prototype.isPolicy = true;
		
		Policy.prototype._initCustomProps = function (chainingProps) {
			if (chainingProps && chainingProps.length) {
				var len = chainingProps.length;
				var self = this;

				for (var i = 0; i < len; ++i) {
					var propName = chainingProps[i];
					var fn = (function (prop) {
						return function () {
							return new Policy(function (that) {
								return that[prop];
							}, self, prop);
						}
					})(propName);

					defineProperty(this, propName, fn);
				}
			}
		};

		Policy.prototype.exec = function (that) {
			var myThat = that;
			var prev = this.prev_;
			var fn = this.fn_;

			if (prev) {
				myThat = prev.exec(that);
			}

			if (isFunction(fn)) {
				return fn(myThat);
			}
			
			return that;
		};
		
		Policy.prototype.path = function () {
			var prev = this.prev_;
			var name = this.name_;
			var ret = prev ? prev.path() : '';
			
			ret += '.' + this.name_;
			
			return ret;
		};
		
		for (var key in proto) {
			if (!proto.hasOwnProperty(key) || !isFunction(proto[key])) {
				continue;
			}

			if (chainingMethods && chainingMethods.indexOf(key) === -1) {
				continue;
			}
				
			Policy.prototype[key] = (function (fnName) {
				return function () {
					var self = this;
					var args = Array.prototype.slice.call(arguments, 0);

					return new Policy(function (that) {
						return that[fnName].apply(that, args);
					}, self, fnName);
				}
			})(key);
		}
		
		return new Policy(null, null, 'policy');
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(7);
	var isArguments = __webpack_require__(8);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ }
/******/ ])
});
;
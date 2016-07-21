/******/ (function(modules) { // webpackBootstrap
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

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["check"] = __webpack_require__(1);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file expose.js
	 * @author Y3G
	 * @fileoverview
	 * 导出接口，导出库接口到全局变量 check
	 */

	'use strict';

	module.exports = __webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file entries.js
	 * @author Y3G
	 * @fileoverview
	 * 接口文件
	 */

	'use strict';

	var checkEntries = __webpack_require__(3);
	var check = checkEntries.check;

	check.Checker = checkEntries.Checker;
	check.setCheckFailedCallback = checkEntries.setCheckFailedCallback;

	module.exports = check;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file check.js
	 * @author Y3G
	 * @fileoverview
	 * 对象检查器
	 */

	'use strict';

	var is = __webpack_require__(4);
	var defineProperty = __webpack_require__(5);
	var makePolicy = __webpack_require__(6);
	var equal = __webpack_require__(7);

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
		setCheckFailedCallback : setCheckFailedCallback
	};

	var checkFailedCallback = null;

	function setCheckFailedCallback(cb) {
		checkFailedCallback = cb;
	}

	function throwError(err) {
		var ignore = false;
		
		if (isFunction(checkFailedCallback)) {
			ignore = checkFailedCallback(err);
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
			reason = 'FAILED when executing check[' + args[0] + '] of an "AND" check, detail: ' + (args[1] || 'unknown');
		} else if (entry == 'or') {
			reason = 'FAILED when executing an "OR" check, detail: {' + args.join(', ') + '}';
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

		try {
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
					fn.exec(this);
				} else {
					errorMsg = '[PARAM-CHECK-INTERNAL] Bad param: argument[' + i + '] is NOT a function or policy';
					break;
				}
			}
		} catch (e) {
			errorMsg = e.message;
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
				var cb = checkFailedCallback;
				
				checkFailedCallback = null;

				try {
					var ret = that[name].apply(that, args);
				} catch (e) {
					if (e.message.indexOf('[PARAM-CHECK]') === 0) {
						yes = true;
					} else {
						// 内部错误
						checkFailedCallback = cb;
						throw e;
					}
				}

				checkFailedCallback = cb;
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
/* 4 */
/***/ function(module, exports) {

	/**
	 * @file is.js
	 * @author Y3G
	 * @fileoverview
	 * 检测数据类型
	 */

	'use strict';

	module.exports = {
		'array' : isArray,
		'arrayLike' : isArrayLike,
		'exist' : isExist,
		'empty' : isEmpty,
		'undefined' : isUndefined,
		'null' : isNull,
		'naN' : isNaN,
		'number' : isNumber,
		'string' : isString,
		'boolean' : isBoolean,
		'date' : isDate,
		'regExp' : isRegExp,
		'error' : isError,
		'function' : isFunction,
		'object' : isObject,
		'element' : isElement,
		'arguments' : isArguments,
	};

	/**
	 * 是否为数组
	 * @param o 待判断对象
	 * @return o为数组返回true，否则返回false
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
	 * @param o 待判断对象
	 * @return o为数字返回false，否则返回true
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
	 * @param o 待判断对象
	 * @return o为undefined或null返回false，否则返回true
	 */
	function isExist(o) {
		return !(typeof o === 'undefined' || o === null);
	}

	/**
	 * 是否为空（空字符串，空数组，空对象）
	 * @param o 待判断对象
	 * @return o为空返回true，否则返回false
	 */
	function isEmpty(o) {
		if (!isExist(o)) {
			return false;
		}

		if (o === '') {
			// 空字符串
			return true;
		} else if (isArrayLike(o) && o.length === 0) {
			// 空数组
			return true;
		} else if (o.constructor && o.constructor === Object) {
			// 空对象，只有Object可以为空，其子类不可为空
			for (key in o) {
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
	 * @param o 待判断对象
	 * @return o为undefined返回false，否则返回true
	 */
	function isUndefined(o) {
		return o === void 0;
	}

	/**
	 * 是否为null
	 * @param o 待判断对象
	 * @return o为null返回false，否则返回true
	 */
	function isNull(o) {
		return o === null;
	}

	/**
	 * 是否为NaN
	 * @param o 待判断对象
	 * @return o为undefined返回false，否则返回true
	 */
	function isNaN(o) {
		return isNumber(o) && o !== +o;
	}

	/**
	 * 是否为数字
	 * @param o 待判断对象
	 * @return o为数字返回false，否则返回true
	 */
	function isNumber(o) {
		return (Object.prototype.toString.call(o) === '[object Number]');
	}

	/**
	 * 是否为字符串
	 * @param o 待判断对象
	 * @return o为字符串返回false，否则返回true
	 */
	function isString(o) {
		return (Object.prototype.toString.call(o) === '[object String]');
	}

	/**
	 * 是否为布尔值
	 * @param o 待判断对象
	 * @return o为布尔值返回false，否则返回true
	 */
	function isBoolean(o) {
		return o === true || o === false ||
			Object.prototype.toString.call(o) === '[object Boolean]';
	}

	/**
	 * 是否为日期
	 * @param o 待判断对象
	 * @return o为日期返回false，否则返回true
	 */
	function isDate(o) {
		return (Object.prototype.toString.call(o) === '[object Date]');
	}

	/**
	 * 是否为正则表达式
	 * @param o 待判断对象
	 * @return o为正则返回false，否则返回true
	 */
	function isRegExp(o) {
		return (Object.prototype.toString.call(o) === '[object RegExp]');
	}

	/**
	 * 是否为Error
	 * @param o 待判断对象
	 * @return o为Error返回false，否则返回true
	 */
	function isError(o) {
		return (Object.prototype.toString.call(o) === '[object Error]');
	}

	/**
	 * 是否为函数
	 * @param o 待判断对象
	 * @return o为函数返回true，否则返回false
	 */
	function isFunction(o) {
		return (Object.prototype.toString.call(o) === '[object Function]');
	}

	/**
	 * 是否为对象
	 * @param o 待判断对象
	 * @return o为对象返回true，否则返回false
	 */
	function isObject(o) {
		var type = typeof o;
		return (type === 'function' || (type === 'object' && !!o));
	}

	/**
	 * 是否为DOM Element
	 * @param o 待判断对象
	 * @return o为Dom Element返回true，否则返回false
	 */
	function isElement(o) {
		return (!!o && o.nodeType === 1);
	}

	/**
	 * 是否为参数表
	 * @param o 待判断对象
	 * @return o为参数返回true，否则返回false
	 */
	function isArguments(o) {
		return (o && !!o['callee']);
	}


/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file makePolicy.js
	 * @author Y3G
	 * @fileoverview
	 * 根据一个方法支持链式调用的类 A，生成一个提取其方法的“policy”类。
	 * 链式调用 policy 的方法，返回一个函数，执行函数即可链式执行 A 的相应方法。
	 */

	'use strict';

	var is = __webpack_require__(4);
	var defineProperty = __webpack_require__(5);

	var isFunction = is['function'];

	module.exports = makePolicy;

	/**
	 * 生成 policy
	 * @param proto 要生成 policy 的类原型
	 * @param chainingProps 支持链式调用的自定义属性名列表
	 * @param chainingMethods 支持链式调用的方法名列表
	 * @return 生成的 policy 实例
	 */
	function makePolicy(proto, chainingProps, chainingMethods) {
		function Policy(fn, prev) {
			this.fn_ = fn;
			this.prev_ = prev;
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
							}, self);
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
						return proto[fnName].apply(that, args);
					}, self);
				}
			})(key);
		}
		
		return new Policy();
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(8);
	var isArguments = __webpack_require__(9);

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
/* 8 */
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
/* 9 */
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
/******/ ]);
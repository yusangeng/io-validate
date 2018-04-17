(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("param-check", [], factory);
	else if(typeof exports === 'object')
		exports["param-check"] = factory();
	else
		root["param-check"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25),
    getRawTag = __webpack_require__(75),
    objectToString = __webpack_require__(80);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 内部断言
 * @author Y3G
 */



module.exports = _v

function _v (expr, message) {
  if (!expr) {
    console.error('[PARAM-CHECK-INTERNAL] ' + message)
  }

  return !!expr
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObject = __webpack_require__(17);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 生成用来打印的字符串
 * @author Y3G
 */



var isString = __webpack_require__(12)
var isArray = __webpack_require__(9)

module.exports = printString

function printString (obj) {
  if (isString(obj)) {
    return '"' + obj + '"'
  } else if (isArray(obj)) {
    return '[' + obj.join(', ') + ']'
  }

  return '' + obj
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(28);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(28);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(26),
    getValue = __webpack_require__(76);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(61),
    Map = __webpack_require__(62),
    Promise = __webpack_require__(63),
    Set = __webpack_require__(64),
    WeakMap = __webpack_require__(65),
    baseGetTag = __webpack_require__(1),
    toSource = __webpack_require__(31);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isArray = __webpack_require__(9),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * deep equal简单实现
 * @author Y3G
 */



/**
 * deep equal
 *
 * @param  {any} left 参数1
 * @param  {any} right 参数2
 * @param  {Boolean} strict 如果为false，则==成立时即返回true
 * @return {Boolean} 比较结果
 */
module.exports = function equal (left, right, strict) {
  if (left === right) {
    return true
  }

  if (!left || !right || // 针对其中一个是null的情况
    typeof left !== 'object' || typeof right !== 'object') {
    /* eslint eqeqeq: "ignore" */
    return strict ? (left === right) : (left == right)
  }

  if (left instanceof Date && right instanceof Date) {
    return left.getTime() === right.getTime()
  }

  // 生成正则表达式标注
  var genFlags = function (rexp) {
    return (rexp.global ? 'g' : '') + (rexp.ignoreCase ? 'i' : '') +
      (rexp.multiline ? 'm' : '') + (rexp.sticky ? 'y' : '')
  }

  if (left instanceof RegExp && right instanceof RegExp) {
    return left.toString() === right.toString() && genFlags(left) === genFlags(right)
  }

  if (left.constructor.prototype !== right.constructor.prototype) {
    return false
  }

  var kLeft = Object.keys(left)
  var kRight = Object.keys(right)

  if (kLeft.length !== kRight.length) {
    return false
  }

  kLeft.sort()
  kRight.sort()

  if (!kLeft.every(function (el, index) { return el === kRight[index] })) {
    return false
  }

  var ret = kLeft.every(function (key) {
    return equal(left[key], right[key])
  })

  return ret
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * 执行函数返回错误消息
 * @author Y3G
 */

module.exports = function getErrorMessage (fn) {
  var args = Array.prototype.slice.call(arguments, 1)

  try {
    if (!fn.apply(this, args)) {
      var message = fn.name || fn.toString()
      return message
    }
  } catch (err) {
    return err.message
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(3),
    isLength = __webpack_require__(16);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    getPrototype = __webpack_require__(74),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查器
 * @author Y3G
 */



var _v = __webpack_require__(2)
var def = __webpack_require__(22)
var verify = __webpack_require__(24)
var NotChecker = __webpack_require__(58)
var createPlan = __webpack_require__(59)

var isFunction = __webpack_require__(3)

module.exports = Checker

/**
 * 检查器
 *
 * @class
 * @param {any} target 要检查的对象
 * @param {String} name 要检查的对象名字(可选，有助于精确打印信息)
 * @param {Checker} owner 所属的Checker对象
 */
function Checker (target, name, owner) {
  this.target_ = target
  this.name_ = name || '[Nameless]'

  try {
    def(this, 'owner', function () {
      return owner
    })

    def(this, '_', function () {
      return owner
    })
  } catch (e) {
    this.owner = this._ = owner
  }

  // 使用not属性获取否定检查器
  try {
    def(this, 'not', function () {
      var ret = this.not_ || (this.not_ = new NotChecker(this))
      return ret
    })
  } catch (e) {
    this.not = new NotChecker(this)
  }
}

Checker.prototype = {}

var Plan = createPlan(Checker.prototype, ['not', 'owner'])
Checker.policy = Checker.plan = new Plan(null, null, 'plan')

/**
 * 安装检查方法
 * @param {Object} checks 检查方法列表
 */
Checker.registerCheck = function (checks) {
  if (arguments.length === 2) {
    var obj = {}
    obj[arguments[0]] = arguments[1]

    return Checker.registerCheck(obj)
  } else if (arguments.length === 3) {
    obj = {}
    obj[arguments[0]] = arguments[1]
    arguments[1].next = arguments[2]

    return Checker.registerCheck(obj)
  }

  for (var key in checks) {
    if (!checks.hasOwnProperty(key)) continue

    var checkFn = checks[key]
    var proto = Checker.prototype

    if (!_v(isFunction(checkFn), 'checks[' + key + '] is NOT a function.')) {
      continue
    }

    if (!_v(!proto[key], 'check name "' + key + '" is duplicated.')) {
      continue
    }

    proto[key] = (function (checkFn) {
      return function () {
        var args = [this.target_, this.name_].concat(Array.prototype.slice.call(arguments))
        var msg = checkFn.apply(this, args)

        verify(!msg, msg)

        if (checkFn.next) {
          var next = checkFn.next.apply(this, args)
          return new Checker(next.target, next.name, this)
        }

        return this
      }
    })(checkFn)
  }

  NotChecker.registerCheck(checks)
  Plan.__registerCheck(checks)
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否包含属性(包括原型链)
 * @author Y3G
 */



var printString = __webpack_require__(4)
var isExist = __webpack_require__(23)

var isUndefined = __webpack_require__(19)

module.exports = {
  got: got
}

function message (target, name, key) {
  return name + ' does NOT have property: ' + printString(key)
}

function got (target, name, key) {
  return (isExist(target) && !isUndefined(target[key])) ? null : message(target, name || 'parameter', key)
}

got.next = function (target, name, key) {
  return {
    target: target[key],
    name: name + '.' + key
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 自定义属性
 * @author Y3G
 */



module.exports = def

function def (that, key, getter, setter) {
  if (Object.getOwnPropertyDescriptor) {
    var property = Object.getOwnPropertyDescriptor(that, key)
    if (property && property.configurable === false) {
      throw new Error(key + 'is NOT a configurable property.')
    }
  }

  Object.defineProperty(that, key, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  })
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 对象是否存在
 * @author Y3G
 */

var isNull = __webpack_require__(34)
var isUndefined = __webpack_require__(19)

module.exports = isExist

function isExist (o) {
  return !(isUndefined(o) || isNull(o))
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 断言
 * @author Y3G
 */



var isFunction = __webpack_require__(3)

module.exports = verify

var prefix = '[PARAM-CHECK] Error: '

function verify (expr, message) {
  if (!expr) {
    var msg = prefix + (isFunction(message) ? message() : message) + '.'
    var err = new TypeError(msg)

    err.isParamCheckError = true

    throw err
  }
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(3),
    isMasked = __webpack_require__(78),
    isObject = __webpack_require__(17),
    toSource = __webpack_require__(31);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(95)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(66),
    isObjectLike = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(37);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)(module)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(70),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

module.exports = isRegExp;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(72),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 入口函数
 * @author Y3G
 */



var Checker = __webpack_require__(20)

module.exports = check

function check (target, name) {
  return new Checker(target, name)
}

check.Checker = Checker
check.registerCheck = Checker.registerCheck
check.plan = Checker.plan


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否与参数中的某一个相等
 * @author Y3G
 */



var printString = __webpack_require__(4)
var equal = __webpack_require__(13)

var isFunction = __webpack_require__(13)

module.exports = {
  among: among
}

function message (target, name, others) {
  return name + ' is NOT among ' + printString(others)
}

function among (target, name) {
  var len = arguments.length

  if (len <= 2) {
    return
  }

  var equalFn = arguments[len - 1]

  if (len === 3 && isFunction(equalFn)) {
    return
  }

  if (!isFunction(equalFn)) {
    equalFn = equal
  }

  var others = Array.prototype.slice.call(arguments, 2)

  others.pop()

  return others.some(function (el) {
    return equalFn(target, el)
  }) ? undefined : message(target, name || 'parameter', others)
}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * and检查
 * @author Y3G
 */



var _v = __webpack_require__(2)
var getErrorMessage = __webpack_require__(14)

var isFunction = __webpack_require__(3)

module.exports = {
  and: and
}

function message (target, name, no, errorMsg) {
  return name + ' does NOT pass the ' + no + 'st/rd/th of an "AND" check, detail: [' + errorMsg + ']'
}

/**
 * 使用“且”关系组合检查函数或plan
 *
 * @param {Function|Plan} ...x 函数或Plan实例，可以为多个
 * @return {null|String} 错误消息
 */
function and (target, name, x) {
  var fns = Array.prototype.slice.call(arguments, 2)
  var len = fns.length
  var errorMsg = null

  for (var i = 0; i < len; ++i) {
    var fn = fns[i]

    if (isFunction(fn)) {
      errorMsg = getErrorMessage(fn, target)
      if (errorMsg) {
        errorMsg = message(target, name || 'parameter', i, errorMsg)
        break
      }
    } else if (fn.__isPlan) {
      try {
        fn.__exec(this)
      } catch (e) {
        errorMsg = message(target, name || 'parameter', i, fn.__path())
        break
      }
    } else {
      _v(false, 'Bad param: argument[' + i + '] is NOT a function or plan.')
    }
  }

  return errorMsg
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否相等
 * @author Y3G
 */



var printString = __webpack_require__(4)
var defaultEqual = __webpack_require__(13)

module.exports = {
  equal: equal,
  eq: equal
}

function message (target, name, other) {
  return name + '(' + printString(target) + ')' + ' is NOT equal to ' + printString(other)
}

function equal (target, name, other, equalFn) {
  if (!equalFn) equalFn = defaultEqual
  return equalFn(target, other) ? undefined : message(target, name || 'parameter', other)
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 大于等于
 * @author Y3G
 */



var _v = __webpack_require__(2)
var printString = __webpack_require__(4)

var isNumber = __webpack_require__(10)

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + '(' + printString(target) + ')' + ' is NOT equal or greater than ' + n
}

function equalOrGreaterThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target >= n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.equalOrGreaterThan = equalOrGreaterThan
entries.egt = equalOrGreaterThan


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 小于等于
 * @author Y3G
 */



var _v = __webpack_require__(2)
var printString = __webpack_require__(4)

var isNumber = __webpack_require__(10)

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + '(' + printString(target) + ')' + ' is NOT equal or less than ' + n
}

function equalOrLessThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target <= n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.equalOrLessThan = equalOrLessThan
entries.elt = equalOrLessThan


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 大于
 * @author Y3G
 */



var _v = __webpack_require__(2)

var isNumber = __webpack_require__(10)

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + ' is NOT greater than ' + n
}

function greaterThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target > n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.greaterThan = greaterThan
entries.gt = greaterThan


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 使用hasOwnProperty检查对象是否包含属性
 * @author Y3G
 */



var printString = __webpack_require__(4)
var isExist = __webpack_require__(23)

module.exports = {
  has: has,
  hasOwn: has
}

function message (target, name, key) {
  return name + ' does NOT have own property: ' + printString(key)
}

function has (target, name, key) {
  return (isExist(target) && target.hasOwnProperty && target.hasOwnProperty(key))
    ? undefined : message(target, name || 'parameter', key)
}

has.next = function (target, name, key) {
  return {
    target: target[key],
    name: name + '.' + key
  }
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查所属的类(使用instanceof关键字判断)
 * @author Y3G
 */



var _v = __webpack_require__(2)

var isFunction = __webpack_require__(3)

module.exports = {
  instanceOf: instanceOf
}

function message (target, name, ctor) {
  var ctorName = ctor.name || '[unknown]'
  return name + ' is NOT an instance of given constructor: ' + ctorName
}

function instanceOf (target, name, ctor) {
  if (_v(isFunction(ctor), 'Bad param: ctor is NOT a function.')) {
    return (target instanceof ctor) ? undefined : message(target, name || 'parameter', ctor)
  }
}



/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 参数类型检查器
 * @author Y3G
 */



var _v = __webpack_require__(2)
var firstUpperCase = __webpack_require__(60)
var printString = __webpack_require__(4)

var isArguments = __webpack_require__(32)
var isArray = __webpack_require__(9)
var isArrayBuffer = __webpack_require__(81)
var isArrayLike = __webpack_require__(15)
var isArrayLikeObject = __webpack_require__(82)
var isBoolean = __webpack_require__(83)
var isBuffer = __webpack_require__(33)
var isDate = __webpack_require__(84)
var isElement = __webpack_require__(85)
var isEmpty = __webpack_require__(86)
var isError = __webpack_require__(87)
var isFunction = __webpack_require__(3)
var isLength = __webpack_require__(16)
var isMap = __webpack_require__(88)
var isNative = __webpack_require__(89)
var isNil = __webpack_require__(90)
var isNull = __webpack_require__(34)
var isNumber = __webpack_require__(10)
var isObject = __webpack_require__(17)
var isObjectLike = __webpack_require__(0)
var isPlainObject = __webpack_require__(18)
var isRegExp = __webpack_require__(35)
var isSet = __webpack_require__(91)
var isString = __webpack_require__(12)
var isSymbol = __webpack_require__(92)
var isTypedArray = __webpack_require__(36)
var isUndefined = __webpack_require__(19)
var isWeakMap = __webpack_require__(93)
var isWeakSet = __webpack_require__(94)

var isExist = function isExist (o) {
  return !(isUndefined(o) || isNull(o))
}

var supportMethods = {
  isArguments: isArguments,
  isArrayBuffer: isArrayBuffer,
  isArrayLike: isArrayLike,
  isArrayLikeObject: isArrayLikeObject,
  isBoolean: isBoolean,
  isBuffer: isBuffer,
  isDate: isDate,
  isElement: isElement,
  isEmpty: isEmpty,
  isError: isError,
  isFunction: isFunction,
  isLength: isLength,
  isMap: isMap,
  isNative: isNative,
  isNil: isNil,
  isNull: isNull,
  isNumber: isNumber,
  isObject: isObject,
  isObjectLike: isObjectLike,
  isPlainObject: isPlainObject,
  isRegExp: isRegExp,
  isSet: isSet,
  isString: isString,
  isSymbol: isSymbol,
  isTypedArray: isTypedArray,
  isUndefined: isUndefined,
  isWeakMap: isWeakMap,
  isWeakSet: isWeakSet,
  isArray: isArray,
  isExist: isExist
}

var entries = {}

module.exports = entries

function checkStringType (type, target) {
  var key = 'is' + firstUpperCase(type)

  var fn = supportMethods[key]

  if (_v(supportMethods.hasOwnProperty(key) && isFunction(fn),
  'Bad param: ' + type + ' is NOT a legal type.')) {
    return fn(target)
  }

  return false
}

function checkClassType (type, target) {
  return target instanceof type
}

function message (target, name, types) {
  return name + '(' + printString(target) + ')' + ' is NOT ' + printString(types)
}

function is (target, name) {
  var types = Array.prototype.slice.call(arguments, 2)
  var len = types.length
  var yes = false

  for (var i = 0; i < len; ++i) {
    var key = types[i]

    if (!_v(isString(key) || isFunction(key),
      'Bad param: arguments[' + i + '] is NOT string or function.')) {
      continue
    }

    if (isString(key)) {
      yes = checkStringType(key, target)
    } else {
      yes = checkClassType(key, target)
    }

    if (yes) break
  }

  return yes ? undefined : message(target, name || 'parameter', types)
}

entries.is = is

function xxxMessage (key, target, name) {
  return name + '(' + printString(target) + ')' + ' is NOT a(n) ' + key.replace(/^is/, '').toLowerCase()
}

// isXXX方法
for (var key in supportMethods) {
  var fn = supportMethods[key]

  if (!isFunction(fn)) {
    continue
  }

  (function (methodName, method) {
    entries[methodName] = function (target, name) {
      return method(target) ? undefined : xxxMessage(methodName, target, name || 'parameter')
    }

    entries[methodName]._name = methodName
  })(key, fn)
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 判断数组长度(也包括仿数组)
 * @author Y3G
 */



var gotCheck = __webpack_require__(21)

module.exports = {
  length: length
}

function length (target, name) {
  return gotCheck.got(target, name, 'length')
}

length.next = function (target, name) {
  return gotCheck.got.next(target, name, 'length')
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 小于
 * @author Y3G
 */



var _v = __webpack_require__(2)

var isNumber = __webpack_require__(10)

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + ' is NOT less than ' + n
}

function lessThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target < n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.lessThan = lessThan
entries.lt = lessThan


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * map函数
 * @author Y3G
 */



var _v = __webpack_require__(2)

var isFunction = __webpack_require__(3)
var isString = __webpack_require__(12)

module.exports = {
  map: map
}

/**
 * 使用map函数转化对象，并返回用转化过的对象构造的Checker
 *
 * @param {Function|String} 转化函数，如果为字符串，则调用待检查对象同名方法，后面的参数会传给相应方法
 * @return {undefined}
 */
function map (target, name, fn) {
  return
}

map.next = function (target, name, fn) {
  var mapTarget

  try {
    if (isFunction(fn)) {
      mapTarget = fn(target)
    } else if (isString(fn)) {
      var f = target[fn]
      if (_v(isFunction(f), 'Bad param: the obj has NOT got a method called' + fn + '.')) {
        mapTarget = f.apply(target, Array.prototype.slice.call(arguments, 3))
      }
    } else {
      _v(false, 'Bad param: fn is illegal.')
    }
  } catch (err) {
    _v(false, err.message)
  }

  var mapName = name + '=>' + (isString(fn) ? fn : (fn.name || '[Anonymous Function]'))

  return {
    target: mapTarget,
    name: mapName
  }
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否符合正则表达式
 * @author Y3G
 */



var _v = __webpack_require__(2)

var isRegExp = __webpack_require__(35)

module.exports = {
  match: match
}

function message (target, name, rexp) {
  return name + ' does NOT match regexp: /' + rexp.source + '/'
}

function match (target, name, rexp) {
  if (_v(isRegExp(rexp), 'Bad param: n is NOT a regexp.')) {
    return rexp.test(target) ? undefined : message(target, name || 'parameter', rexp)
  }
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 使用自定义函数或plan检查
 * @author Y3G
 */



var _v = __webpack_require__(2)
var getErrorMessage = __webpack_require__(14)

var isFunction = __webpack_require__(3)

module.exports = {
  meet: meet
}

function message (target, name, errorMsg) {
  return name + ' does NOT pass the check, detail: {' + errorMsg + '}'
}

/**
 * 使用自定义函数或plan检查
 *
 * @param {Function|Plan} fn 检查函数或plan，参数为待检查对象
 * @return {undefined|String} 错误消息
 */
function meet (target, name, fn) {
  var errorMsg

  if (isFunction(fn)) {
    errorMsg = getErrorMessage(fn, target)
  } else if (fn.__isPlan) {
    try {
      fn.__exec(this)
    } catch (e) {
      errorMsg = fn.__path()
    }
  } else {
    _v(false, 'Bad param: fn is NOT a function or plan.')
  }

  return !errorMsg ? null : message(target, name || 'parameter', errorMsg)
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * or检查
 * @author Y3G
 */



var _v = __webpack_require__(2)
var getErrorMessage = __webpack_require__(14)

var isFunction = __webpack_require__(3)

module.exports = {
  or: or
}

function message (target, name, no, errorDetail) {
  return name + ' does NOT pass the ' +
    no + 'st/rd/th of an "OR" check, detail: [' +
    errorDetail.map(function (el, index) { return index + ': ' + el }).join('; ') + ']'
}

/**
 * 使用“或”关系组合检查函数或plan
 *
 * @param {Function|Plan} ...x 函数或Plan实例，可以为多个
 * @return {undefined|String} 错误消息
 */
function or (target, name, x) {
  var fns = Array.prototype.slice.call(arguments, 2)
  var len = fns.length
  var errorDetail = []
  var errorCount = 0

  for (var i = 0; i < len; ++i) {
    var fn = fns[i]

    if (isFunction(fn)) {
      var errorMsg = getErrorMessage(fn, target)
      if (errorMsg) {
        errorDetail.push(errorMsg)
        errorCount++
        continue
      }

      break
    } else if (fn.__isPlan) {
      try {
        fn.__exec(this)
      } catch (err) {
        errorDetail.push(fn.__path())
        errorCount++
        continue
      }

      break
    } else {
      _v(false, 'Bad param: argument[' + i + '] is NOT a function or plan.')
    }
  }

  return errorCount < len ? null : message(target, name || 'parameter', errorDetail)
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否相同
 * @author Y3G
 */



var printString = __webpack_require__(4)

module.exports = {
  same: same
}

function message (target, name, other) {
  return name + ' is NOT the same as ' + printString(other)
}

/**
 * 检查是否相同(使用===判断)
 *
 * @param {any} other 比较的对象
 * @returns {undefined|String} 错误消息
 */
function same (target, name, other) {
  return (target === other) ? undefined : message(target, name || 'parameter', other)
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 判断是否在区间内
 * @author Y3G
 */



var _v = __webpack_require__(2)
var printString = __webpack_require__(4)

var isArray = __webpack_require__(9)
var isString = __webpack_require__(12)

module.exports = {
  within: within
}

var rexpRange = /^([([])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/
var cache = {}

// 根据数学表达式生成判断函数
function genRangeFn (range) {
  var fn = cache[range]

  if (fn) return fn

  if (!_v(isString(range),
    'Bad param: range is NOT string.')) {
    return null
  }

  var match = rexpRange.exec(range)

  if (!_v(match && match.length === 5,
    'Bad param: bad range string: ' + range + '.')) {
    return null
  }

  try {
    var op1 = (match[1] === '[') ? '>=' : '>'
    var op2 = (match[2] === ']') ? '<=' : '<'
    var lowerBound = parseFloat(match[2])
    var higherBound = parseFloat(match[3])

    var fnSource = ('return (n $op1 $lowerBound) && (n $op2 $higherBound);')
      .replace('$op1', op1)
      .replace('$lowerBound', lowerBound)
      .replace('$op2', op2)
      .replace('$higherBound', higherBound)

    /* eslint no-new-func: "ignore" */
    fn = cache[range] = new Function(['n'], fnSource)
  } catch (err) {
    return null
  }

  return fn
}

function message (target, name, ranges) {
  return name + ' is NOT in range(s): ' + printString(ranges)
}

/**
 * 检查是否属于某个区间
 *
 * @param {String|Array<String>} ...ranges 区间字符串，形如[1,2), 可以为多个
 * @return {undefined|String} 错误消息
 */
function within (target, name) {
  var ranges = Array.prototype.slice.call(arguments, 2)
  var len = ranges.length

  if (len === 0) {
    return
  }

  var yes = false

  for (var i = 0; i < len; ++i) {
    var range = ranges[i]
    var fn = genRangeFn(range)

    if (fn) {
      yes =  fn(target)
      if (yes) break
    }
  }

  return yes ? undefined : message(target, name || 'parameter', ranges)
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 导出入口
 * @author Y3G
 */



var check = __webpack_require__(39)
var Checker = __webpack_require__(20)

Checker.registerCheck(__webpack_require__(40))
Checker.registerCheck(__webpack_require__(41))
Checker.registerCheck(__webpack_require__(42))
Checker.registerCheck(__webpack_require__(43))
Checker.registerCheck(__webpack_require__(44))
Checker.registerCheck(__webpack_require__(21))
Checker.registerCheck(__webpack_require__(45))
Checker.registerCheck(__webpack_require__(46))
Checker.registerCheck(__webpack_require__(47))
Checker.registerCheck(__webpack_require__(48))
Checker.registerCheck(__webpack_require__(49))
Checker.registerCheck(__webpack_require__(50))
Checker.registerCheck(__webpack_require__(51))
Checker.registerCheck(__webpack_require__(52))
Checker.registerCheck(__webpack_require__(53))
Checker.registerCheck(__webpack_require__(54))
Checker.registerCheck(__webpack_require__(55))
Checker.registerCheck(__webpack_require__(56))

module.exports = check


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 否定检查器
 * @author Y3G
 */



var verify = __webpack_require__(24)
var printString = __webpack_require__(4)

module.exports = NotChecker

/**
 * 否定检查器(对Checker的每个检查方法取“非”)
 *
 * @class
 * @param {Checker} checker
 */
function NotChecker (checker) {
  this.checker_ = checker
}

NotChecker.registerCheck = function (checks) {
  for (var key in checks) {
    if (!checks.hasOwnProperty(key)) continue

    NotChecker.prototype[key] = (function (checkName) {
      return function () {
        var that = this.checker_
        var args = Array.prototype.slice.call(arguments)
        var errMsg = null

        try {
          that[checkName].apply(that, args)
        } catch (err) {
          // console.log(err)
          if (err.isParamCheckError) {
            errMsg = err.message
          } else {
            throw err // 内部错误，非检查失败
          }
        }

        var realMsg = null

        if (errMsg) {
          realMsg = errMsg.replace('[PARAM-CHECK]', '[PARAM-CHECK][NOT]')
        } else {
          realMsg = '[PARAM-CHECK][NOT] ' + checkName + ' check error, target: ' + printString(this.checker_.target_)
        }

        verify(errMsg, realMsg)

        return that
      }
    })(key)
  }
}



/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Y3G
 * @fileoverview
 * 根据类A(其方法支持链式调用), 生成一个相应的“plan”类, 链式调用plan的方法, 返回一个函数, 执行函数即可链式执行A的相应方法.
 */



var isFunction = __webpack_require__(3)
var def = __webpack_require__(22)

module.exports = createPlan

/**
 * 生成 plan
 *
 * @param proto 要生成 plan 的类原型
 * @param chainingProps 支持链式调用的自定义属性名列表
 * @param chainingMethods 支持链式调用的方法名列表，如果不填，默认所有方法都支持链式调用
 * @return 生成的 plan 实例
 */
function createPlan (proto, chainingProps, chainingMethods) {
  function Plan (fn, prev, name) {
    this.fn_ = fn
    this.prev_ = prev
    this.name_ = name
    this.__initCustomProps(chainingProps)
  }

  Plan.prototype.__isPlan = true

  // 因为 Plan.prototype 上会添加许多名字未知的方法，所以自己的方法加"__"以规避重名
  Plan.prototype.__initCustomProps = function (chainingProps) {
    if (chainingProps && chainingProps.length) {
      var len = chainingProps.length
      var self = this

      for (var i = 0; i < len; ++i) {
        var propName = chainingProps[i]
        var fn = (function (prop) {
          return function () {
            return new Plan(function (that) {
              return that[prop]
            }, self, prop)
          }
        })(propName)

        def(this, propName, fn)
      }
    }
  }

  Plan.prototype.__exec = function (that) {
    var myThat = that
    var prev = this.prev_
    var fn = this.fn_

    if (prev) {
      myThat = prev.__exec(that)
    }

    if (isFunction(fn)) {
      return fn(myThat)
    }

    return that
  }

  Plan.prototype.__path = function () {
    var prev = this.prev_
    var name = this.name_
    var ret = prev ? prev.__path() : ''

    ret += '.' + name

    return ret
  }

  Plan.__registerCheck = function (checks) {
    for (var key in checks) {
      if (!checks.hasOwnProperty(key) || !isFunction(checks[key])) {
        continue
      }

      if (chainingMethods && chainingMethods.indexOf(key) === -1) {
        continue
      }

      if (Plan.prototype[key]) {
        continue
      }

      Plan.prototype[key] = (function (fnName) {
        return function () {
          var self = this
          var args = Array.prototype.slice.call(arguments)

          return new Plan(function (that) {
            return that[fnName].apply(that, args)
          }, self, fnName)
        }
      })(key)
    }
  }

  Plan.__registerCheck(proto)

  return Plan
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 首字母大写
 * @author Y3G
 */



module.exports = function firstUpperCase (str) {
  return str.replace(/^\S/g, function (s) { return s.toUpperCase() })
}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

var arrayBufferTag = '[object ArrayBuffer]';

/**
 * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 */
function baseIsArrayBuffer(value) {
  return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
}

module.exports = baseIsArrayBuffer;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var dateTag = '[object Date]';

/**
 * The base implementation of `_.isDate` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 */
function baseIsDate(value) {
  return isObjectLike(value) && baseGetTag(value) == dateTag;
}

module.exports = baseIsDate;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]';

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObjectLike(value) && baseGetTag(value) == regexpTag;
}

module.exports = baseIsRegExp;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isLength = __webpack_require__(16),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(29),
    nativeKeys = __webpack_require__(79);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(30);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(27),
    isFunction = __webpack_require__(3),
    stubFalse = __webpack_require__(37);

/**
 * Checks if `func` is capable of being masked.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
 */
var isMaskable = coreJsData ? isFunction : stubFalse;

module.exports = isMaskable;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(27);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(30);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArrayBuffer = __webpack_require__(67),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer;

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
 * @example
 *
 * _.isArrayBuffer(new ArrayBuffer(2));
 * // => true
 *
 * _.isArrayBuffer(new Array(2));
 * // => false
 */
var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;

module.exports = isArrayBuffer;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(15),
    isObjectLike = __webpack_require__(0);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';

/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */
function isBoolean(value) {
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == boolTag);
}

module.exports = isBoolean;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(68),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsDate = nodeUtil && nodeUtil.isDate;

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
 * @example
 *
 * _.isDate(new Date);
 * // => true
 *
 * _.isDate('Mon April 23 2012');
 * // => false
 */
var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;

module.exports = isDate;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(18);

/**
 * Checks if `value` is likely a DOM element.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
}

module.exports = isElement;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(73),
    getTag = __webpack_require__(11),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(9),
    isArrayLike = __webpack_require__(15),
    isBuffer = __webpack_require__(33),
    isPrototype = __webpack_require__(29),
    isTypedArray = __webpack_require__(36);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(18);

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(69),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(26),
    isMaskable = __webpack_require__(77);

/** Error message constants. */
var CORE_ERROR_TEXT = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.';

/**
 * Checks if `value` is a pristine native function.
 *
 * **Note:** This method can't reliably detect native functions in the presence
 * of the core-js package because core-js circumvents this kind of detection.
 * Despite multiple requests, the core-js maintainer has made it clear: any
 * attempt to fix the detection will be obstructed. As a result, we're left
 * with little choice but to throw an error. Unfortunately, this also affects
 * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
 * which rely on core-js.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (isMaskable(value)) {
    throw new Error(CORE_ERROR_TEXT);
  }
  return baseIsNative(value);
}

module.exports = isNative;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(71),
    baseUnary = __webpack_require__(6),
    nodeUtil = __webpack_require__(7);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(11),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == weakMapTag;
}

module.exports = isWeakMap;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var weakSetTag = '[object WeakSet]';

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
 * @example
 *
 * _.isWeakSet(new WeakSet);
 * // => true
 *
 * _.isWeakSet(new Set);
 * // => false
 */
function isWeakSet(value) {
  return isObjectLike(value) && baseGetTag(value) == weakSetTag;
}

module.exports = isWeakSet;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0tY2hlY2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZGI3Mjc0MzY0OTBlZDZhMWVhZiIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL192LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL3ByaW50U3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9lcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvZ2V0RXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9nb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL2RlZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvaXNFeGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvdmVyaWZ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX292ZXJBcmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTnVsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVja3MvYW1vbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9lcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL2VxdWFsT3JHcmVhdGVyVGhhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL2VxdWFsT3JMZXNzVGhhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL2dyZWF0ZXJUaGFuLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVja3MvaGFzLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVja3MvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL2lzLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVja3MvbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVja3MvbGVzc1RoYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL21lZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy9vci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2tzL3NhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NoZWNrcy93aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGliL05vdENoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BsYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL2ZpcnN0VXBwZXJDYXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzUmVnRXhwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNFbGVtZW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc05pbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNXZWFrU2V0LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJwYXJhbS1jaGVja1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYXJhbS1jaGVja1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYXJhbS1jaGVja1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDU3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZGI3Mjc0MzY0OTBlZDZhMWVhZiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5YaF6YOo5pat6KiAXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IF92XG5cbmZ1bmN0aW9uIF92IChleHByLCBtZXNzYWdlKSB7XG4gIGlmICghZXhwcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tQQVJBTS1DSEVDSy1JTlRFUk5BTF0gJyArIG1lc3NhZ2UpXG4gIH1cblxuICByZXR1cm4gISFleHByXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi91dGlscy9fdi5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog55Sf5oiQ55So5p2l5omT5Y2w55qE5a2X56ym5LiyXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheScpXG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRTdHJpbmdcblxuZnVuY3Rpb24gcHJpbnRTdHJpbmcgKG9iaikge1xuICBpZiAoaXNTdHJpbmcob2JqKSkge1xuICAgIHJldHVybiAnXCInICsgb2JqICsgJ1wiJ1xuICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiAnWycgKyBvYmouam9pbignLCAnKSArICddJ1xuICB9XG5cbiAgcmV0dXJuICcnICsgb2JqXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi91dGlscy9wcmludFN0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTnVtYmVyYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqICoqTm90ZToqKiBUbyBleGNsdWRlIGBJbmZpbml0eWAsIGAtSW5maW5pdHlgLCBhbmQgYE5hTmAsIHdoaWNoIGFyZVxuICogY2xhc3NpZmllZCBhcyBudW1iZXJzLCB1c2UgdGhlIGBfLmlzRmluaXRlYCBtZXRob2QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bWJlcigzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBudW1iZXJUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc051bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGRlZXAgZXF1YWznroDljZXlrp7njrBcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogZGVlcCBlcXVhbFxuICpcbiAqIEBwYXJhbSAge2FueX0gbGVmdCDlj4LmlbAxXG4gKiBAcGFyYW0gIHthbnl9IHJpZ2h0IOWPguaVsDJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHN0cmljdCDlpoLmnpzkuLpmYWxzZe+8jOWImT095oiQ56uL5pe25Y2z6L+U5ZuedHJ1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0g5q+U6L6D57uT5p6cXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwgKGxlZnQsIHJpZ2h0LCBzdHJpY3QpIHtcbiAgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICghbGVmdCB8fCAhcmlnaHQgfHwgLy8g6ZKI5a+55YW25Lit5LiA5Liq5pivbnVsbOeahOaDheWGtVxuICAgIHR5cGVvZiBsZWZ0ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnKSB7XG4gICAgLyogZXNsaW50IGVxZXFlcTogXCJpZ25vcmVcIiAqL1xuICAgIHJldHVybiBzdHJpY3QgPyAobGVmdCA9PT0gcmlnaHQpIDogKGxlZnQgPT0gcmlnaHQpXG4gIH1cblxuICBpZiAobGVmdCBpbnN0YW5jZW9mIERhdGUgJiYgcmlnaHQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGxlZnQuZ2V0VGltZSgpID09PSByaWdodC5nZXRUaW1lKClcbiAgfVxuXG4gIC8vIOeUn+aIkOato+WImeihqOi+vuW8j+agh+azqFxuICB2YXIgZ2VuRmxhZ3MgPSBmdW5jdGlvbiAocmV4cCkge1xuICAgIHJldHVybiAocmV4cC5nbG9iYWwgPyAnZycgOiAnJykgKyAocmV4cC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgIChyZXhwLm11bHRpbGluZSA/ICdtJyA6ICcnKSArIChyZXhwLnN0aWNreSA/ICd5JyA6ICcnKVxuICB9XG5cbiAgaWYgKGxlZnQgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmlnaHQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gbGVmdC50b1N0cmluZygpID09PSByaWdodC50b1N0cmluZygpICYmIGdlbkZsYWdzKGxlZnQpID09PSBnZW5GbGFncyhyaWdodClcbiAgfVxuXG4gIGlmIChsZWZ0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSAhPT0gcmlnaHQuY29uc3RydWN0b3IucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIga0xlZnQgPSBPYmplY3Qua2V5cyhsZWZ0KVxuICB2YXIga1JpZ2h0ID0gT2JqZWN0LmtleXMocmlnaHQpXG5cbiAgaWYgKGtMZWZ0Lmxlbmd0aCAhPT0ga1JpZ2h0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAga0xlZnQuc29ydCgpXG4gIGtSaWdodC5zb3J0KClcblxuICBpZiAoIWtMZWZ0LmV2ZXJ5KGZ1bmN0aW9uIChlbCwgaW5kZXgpIHsgcmV0dXJuIGVsID09PSBrUmlnaHRbaW5kZXhdIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgcmV0ID0ga0xlZnQuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBlcXVhbChsZWZ0W2tleV0sIHJpZ2h0W2tleV0pXG4gIH0pXG5cbiAgcmV0dXJuIHJldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvZXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5omn6KGM5Ye95pWw6L+U5Zue6ZSZ6K+v5raI5oGvXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlIChmbikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICB0cnkge1xuICAgIGlmICghZm4uYXBwbHkodGhpcywgYXJncykpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gZm4ubmFtZSB8fCBmbi50b1N0cmluZygpXG4gICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL2dldEVycm9yTWVzc2FnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVW5kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOajgOafpeWZqFxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIF92ID0gcmVxdWlyZSgnLi91dGlscy9fdicpXG52YXIgZGVmID0gcmVxdWlyZSgnLi91dGlscy9kZWYnKVxudmFyIHZlcmlmeSA9IHJlcXVpcmUoJy4vdXRpbHMvdmVyaWZ5JylcbnZhciBOb3RDaGVja2VyID0gcmVxdWlyZSgnLi9Ob3RDaGVja2VyJylcbnZhciBjcmVhdGVQbGFuID0gcmVxdWlyZSgnLi9wbGFuJylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gQ2hlY2tlclxuXG4vKipcbiAqIOajgOafpeWZqFxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHthbnl9IHRhcmdldCDopoHmo4Dmn6XnmoTlr7nosaFcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIOimgeajgOafpeeahOWvueixoeWQjeWtlyjlj6/pgInvvIzmnInliqnkuo7nsr7noa7miZPljbDkv6Hmga8pXG4gKiBAcGFyYW0ge0NoZWNrZXJ9IG93bmVyIOaJgOWxnueahENoZWNrZXLlr7nosaFcbiAqL1xuZnVuY3Rpb24gQ2hlY2tlciAodGFyZ2V0LCBuYW1lLCBvd25lcikge1xuICB0aGlzLnRhcmdldF8gPSB0YXJnZXRcbiAgdGhpcy5uYW1lXyA9IG5hbWUgfHwgJ1tOYW1lbGVzc10nXG5cbiAgdHJ5IHtcbiAgICBkZWYodGhpcywgJ293bmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG93bmVyXG4gICAgfSlcblxuICAgIGRlZih0aGlzLCAnXycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvd25lclxuICAgIH0pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLm93bmVyID0gdGhpcy5fID0gb3duZXJcbiAgfVxuXG4gIC8vIOS9v+eUqG5vdOWxnuaAp+iOt+WPluWQpuWumuajgOafpeWZqFxuICB0cnkge1xuICAgIGRlZih0aGlzLCAnbm90JywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJldCA9IHRoaXMubm90XyB8fCAodGhpcy5ub3RfID0gbmV3IE5vdENoZWNrZXIodGhpcykpXG4gICAgICByZXR1cm4gcmV0XG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMubm90ID0gbmV3IE5vdENoZWNrZXIodGhpcylcbiAgfVxufVxuXG5DaGVja2VyLnByb3RvdHlwZSA9IHt9XG5cbnZhciBQbGFuID0gY3JlYXRlUGxhbihDaGVja2VyLnByb3RvdHlwZSwgWydub3QnLCAnb3duZXInXSlcbkNoZWNrZXIucG9saWN5ID0gQ2hlY2tlci5wbGFuID0gbmV3IFBsYW4obnVsbCwgbnVsbCwgJ3BsYW4nKVxuXG4vKipcbiAqIOWuieijheajgOafpeaWueazlVxuICogQHBhcmFtIHtPYmplY3R9IGNoZWNrcyDmo4Dmn6Xmlrnms5XliJfooahcbiAqL1xuQ2hlY2tlci5yZWdpc3RlckNoZWNrID0gZnVuY3Rpb24gKGNoZWNrcykge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciBvYmogPSB7fVxuICAgIG9ialthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdXG5cbiAgICByZXR1cm4gQ2hlY2tlci5yZWdpc3RlckNoZWNrKG9iailcbiAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgb2JqID0ge31cbiAgICBvYmpbYXJndW1lbnRzWzBdXSA9IGFyZ3VtZW50c1sxXVxuICAgIGFyZ3VtZW50c1sxXS5uZXh0ID0gYXJndW1lbnRzWzJdXG5cbiAgICByZXR1cm4gQ2hlY2tlci5yZWdpc3RlckNoZWNrKG9iailcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBjaGVja3MpIHtcbiAgICBpZiAoIWNoZWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZVxuXG4gICAgdmFyIGNoZWNrRm4gPSBjaGVja3Nba2V5XVxuICAgIHZhciBwcm90byA9IENoZWNrZXIucHJvdG90eXBlXG5cbiAgICBpZiAoIV92KGlzRnVuY3Rpb24oY2hlY2tGbiksICdjaGVja3NbJyArIGtleSArICddIGlzIE5PVCBhIGZ1bmN0aW9uLicpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGlmICghX3YoIXByb3RvW2tleV0sICdjaGVjayBuYW1lIFwiJyArIGtleSArICdcIiBpcyBkdXBsaWNhdGVkLicpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHByb3RvW2tleV0gPSAoZnVuY3Rpb24gKGNoZWNrRm4pIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW3RoaXMudGFyZ2V0XywgdGhpcy5uYW1lX10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICAgIHZhciBtc2cgPSBjaGVja0ZuLmFwcGx5KHRoaXMsIGFyZ3MpXG5cbiAgICAgICAgdmVyaWZ5KCFtc2csIG1zZylcblxuICAgICAgICBpZiAoY2hlY2tGbi5uZXh0KSB7XG4gICAgICAgICAgdmFyIG5leHQgPSBjaGVja0ZuLm5leHQuYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgICByZXR1cm4gbmV3IENoZWNrZXIobmV4dC50YXJnZXQsIG5leHQubmFtZSwgdGhpcylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgfSkoY2hlY2tGbilcbiAgfVxuXG4gIE5vdENoZWNrZXIucmVnaXN0ZXJDaGVjayhjaGVja3MpXG4gIFBsYW4uX19yZWdpc3RlckNoZWNrKGNoZWNrcylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL0NoZWNrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5qOA5p+l5piv5ZCm5YyF5ZCr5bGe5oCnKOWMheaLrOWOn+Wei+mTvilcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBpc0V4aXN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNFeGlzdCcpXG5cbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnb3Q6IGdvdFxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIGtleSkge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgaGF2ZSBwcm9wZXJ0eTogJyArIHByaW50U3RyaW5nKGtleSlcbn1cblxuZnVuY3Rpb24gZ290ICh0YXJnZXQsIG5hbWUsIGtleSkge1xuICByZXR1cm4gKGlzRXhpc3QodGFyZ2V0KSAmJiAhaXNVbmRlZmluZWQodGFyZ2V0W2tleV0pKSA/IG51bGwgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywga2V5KVxufVxuXG5nb3QubmV4dCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGtleSkge1xuICByZXR1cm4ge1xuICAgIHRhcmdldDogdGFyZ2V0W2tleV0sXG4gICAgbmFtZTogbmFtZSArICcuJyArIGtleVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVja3MvZ290LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQGZpbGUg6Ieq5a6a5LmJ5bGe5oCnXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRlZlxyXG5cclxuZnVuY3Rpb24gZGVmICh0aGF0LCBrZXksIGdldHRlciwgc2V0dGVyKSB7XHJcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhhdCwga2V5KVxyXG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICdpcyBOT1QgYSBjb25maWd1cmFibGUgcHJvcGVydHkuJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGF0LCBrZXksIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGdldHRlcixcclxuICAgIHNldDogc2V0dGVyXHJcbiAgfSlcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi91dGlscy9kZWYuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5a+56LGh5piv5ZCm5a2Y5ZyoXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbnZhciBpc051bGwgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdWxsJylcbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gaXNFeGlzdFxuXG5mdW5jdGlvbiBpc0V4aXN0IChvKSB7XG4gIHJldHVybiAhKGlzVW5kZWZpbmVkKG8pIHx8IGlzTnVsbChvKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL2lzRXhpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5pat6KiAXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJpZnlcblxudmFyIHByZWZpeCA9ICdbUEFSQU0tQ0hFQ0tdIEVycm9yOiAnXG5cbmZ1bmN0aW9uIHZlcmlmeSAoZXhwciwgbWVzc2FnZSkge1xuICBpZiAoIWV4cHIpIHtcbiAgICB2YXIgbXNnID0gcHJlZml4ICsgKGlzRnVuY3Rpb24obWVzc2FnZSkgPyBtZXNzYWdlKCkgOiBtZXNzYWdlKSArICcuJ1xuICAgIHZhciBlcnIgPSBuZXcgVHlwZUVycm9yKG1zZylcblxuICAgIGVyci5pc1BhcmFtQ2hlY2tFcnJvciA9IHRydWVcblxuICAgIHRocm93IGVyclxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi91dGlscy92ZXJpZnkuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgbnVsbGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bGwobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bGwodm9pZCAwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdWxsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc051bGwuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNSZWdFeHAgPSByZXF1aXJlKCcuL19iYXNlSXNSZWdFeHAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzUmVnRXhwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNSZWdFeHA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBSZWdFeHBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzUmVnRXhwKC9hYmMvKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUmVnRXhwKCcvYWJjLycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzUmVnRXhwID0gbm9kZUlzUmVnRXhwID8gYmFzZVVuYXJ5KG5vZGVJc1JlZ0V4cCkgOiBiYXNlSXNSZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBmaWxlIOWFpeWPo+WHveaVsFxyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIENoZWNrZXIgPSByZXF1aXJlKCcuL0NoZWNrZXInKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1xyXG5cclxuZnVuY3Rpb24gY2hlY2sgKHRhcmdldCwgbmFtZSkge1xyXG4gIHJldHVybiBuZXcgQ2hlY2tlcih0YXJnZXQsIG5hbWUpXHJcbn1cclxuXHJcbmNoZWNrLkNoZWNrZXIgPSBDaGVja2VyXHJcbmNoZWNrLnJlZ2lzdGVyQ2hlY2sgPSBDaGVja2VyLnJlZ2lzdGVyQ2hlY2tcclxuY2hlY2sucGxhbiA9IENoZWNrZXIucGxhblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmo4Dmn6XmmK/lkKbkuI7lj4LmlbDkuK3nmoTmn5DkuIDkuKrnm7jnrYlcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBlcXVhbCA9IHJlcXVpcmUoJy4uL3V0aWxzL2VxdWFsJylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuLi91dGlscy9lcXVhbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbW9uZzogYW1vbmdcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBvdGhlcnMpIHtcbiAgcmV0dXJuIG5hbWUgKyAnIGlzIE5PVCBhbW9uZyAnICsgcHJpbnRTdHJpbmcob3RoZXJzKVxufVxuXG5mdW5jdGlvbiBhbW9uZyAodGFyZ2V0LCBuYW1lKSB7XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXG5cbiAgaWYgKGxlbiA8PSAyKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgZXF1YWxGbiA9IGFyZ3VtZW50c1tsZW4gLSAxXVxuXG4gIGlmIChsZW4gPT09IDMgJiYgaXNGdW5jdGlvbihlcXVhbEZuKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGVxdWFsRm4pKSB7XG4gICAgZXF1YWxGbiA9IGVxdWFsXG4gIH1cblxuICB2YXIgb3RoZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuXG4gIG90aGVycy5wb3AoKVxuXG4gIHJldHVybiBvdGhlcnMuc29tZShmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZXF1YWxGbih0YXJnZXQsIGVsKVxuICB9KSA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBvdGhlcnMpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVja3MvYW1vbmcuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogYW5k5qOA5p+lXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgZ2V0RXJyb3JNZXNzYWdlID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0RXJyb3JNZXNzYWdlJylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBhbmQ6IGFuZFxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG5vLCBlcnJvck1zZykge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgcGFzcyB0aGUgJyArIG5vICsgJ3N0L3JkL3RoIG9mIGFuIFwiQU5EXCIgY2hlY2ssIGRldGFpbDogWycgKyBlcnJvck1zZyArICddJ1xufVxuXG4vKipcbiAqIOS9v+eUqOKAnOS4lOKAneWFs+ezu+e7hOWQiOajgOafpeWHveaVsOaIlnBsYW5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBsYW59IC4uLngg5Ye95pWw5oiWUGxhbuWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxuICogQHJldHVybiB7bnVsbHxTdHJpbmd9IOmUmeivr+a2iOaBr1xuICovXG5mdW5jdGlvbiBhbmQgKHRhcmdldCwgbmFtZSwgeCkge1xuICB2YXIgZm5zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICB2YXIgbGVuID0gZm5zLmxlbmd0aFxuICB2YXIgZXJyb3JNc2cgPSBudWxsXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBmbiA9IGZuc1tpXVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICBlcnJvck1zZyA9IGdldEVycm9yTWVzc2FnZShmbiwgdGFyZ2V0KVxuICAgICAgaWYgKGVycm9yTXNnKSB7XG4gICAgICAgIGVycm9yTXNnID0gbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGksIGVycm9yTXNnKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZm4uX19pc1BsYW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuLl9fZXhlYyh0aGlzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck1zZyA9IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBpLCBmbi5fX3BhdGgoKSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3YoZmFsc2UsICdCYWQgcGFyYW06IGFyZ3VtZW50WycgKyBpICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcGxhbi4nKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvck1zZ1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL2FuZC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmo4Dmn6XmmK/lkKbnm7jnrYlcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBkZWZhdWx0RXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9lcXVhbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlcXVhbDogZXF1YWwsXG4gIGVxOiBlcXVhbFxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG90aGVyKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UIGVxdWFsIHRvICcgKyBwcmludFN0cmluZyhvdGhlcilcbn1cblxuZnVuY3Rpb24gZXF1YWwgKHRhcmdldCwgbmFtZSwgb3RoZXIsIGVxdWFsRm4pIHtcbiAgaWYgKCFlcXVhbEZuKSBlcXVhbEZuID0gZGVmYXVsdEVxdWFsXG4gIHJldHVybiBlcXVhbEZuKHRhcmdldCwgb3RoZXIpID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG90aGVyKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL2VxdWFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOWkp+S6juetieS6jlxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIF92ID0gcmVxdWlyZSgnLi4vdXRpbHMvX3YnKVxudmFyIHByaW50U3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJpbnRTdHJpbmcnKVxuXG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKVxuXG52YXIgZW50cmllcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cmllc1xuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG4pIHtcbiAgcmV0dXJuIG5hbWUgKyAnKCcgKyBwcmludFN0cmluZyh0YXJnZXQpICsgJyknICsgJyBpcyBOT1QgZXF1YWwgb3IgZ3JlYXRlciB0aGFuICcgKyBuXG59XG5cbmZ1bmN0aW9uIGVxdWFsT3JHcmVhdGVyVGhhbiAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIGlmIChfdihpc051bWJlcihuKSwgJ0JhZCBwYXJhbTogbiBpcyBOT1QgYSBudW1iZXIuJykpIHtcbiAgICByZXR1cm4gdGFyZ2V0ID49IG4gPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgbilcbiAgfVxufVxuXG5lbnRyaWVzLmVxdWFsT3JHcmVhdGVyVGhhbiA9IGVxdWFsT3JHcmVhdGVyVGhhblxuZW50cmllcy5lZ3QgPSBlcXVhbE9yR3JlYXRlclRoYW5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9lcXVhbE9yR3JlYXRlclRoYW4uanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5bCP5LqO562J5LqOXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG5cbnZhciBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpXG5cbnZhciBlbnRyaWVzID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzXG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgbikge1xuICByZXR1cm4gbmFtZSArICcoJyArIHByaW50U3RyaW5nKHRhcmdldCkgKyAnKScgKyAnIGlzIE5PVCBlcXVhbCBvciBsZXNzIHRoYW4gJyArIG5cbn1cblxuZnVuY3Rpb24gZXF1YWxPckxlc3NUaGFuICh0YXJnZXQsIG5hbWUsIG4pIHtcbiAgaWYgKF92KGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlci4nKSkge1xuICAgIHJldHVybiB0YXJnZXQgPD0gbiA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBuKVxuICB9XG59XG5cbmVudHJpZXMuZXF1YWxPckxlc3NUaGFuID0gZXF1YWxPckxlc3NUaGFuXG5lbnRyaWVzLmVsdCA9IGVxdWFsT3JMZXNzVGhhblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL2VxdWFsT3JMZXNzVGhhbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlpKfkuo5cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcblxudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJylcblxudmFyIGVudHJpZXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXNcblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgZ3JlYXRlciB0aGFuICcgKyBuXG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJUaGFuICh0YXJnZXQsIG5hbWUsIG4pIHtcbiAgaWYgKF92KGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlci4nKSkge1xuICAgIHJldHVybiB0YXJnZXQgPiBuID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG4pXG4gIH1cbn1cblxuZW50cmllcy5ncmVhdGVyVGhhbiA9IGdyZWF0ZXJUaGFuXG5lbnRyaWVzLmd0ID0gZ3JlYXRlclRoYW5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9ncmVhdGVyVGhhbi5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDkvb/nlKhoYXNPd25Qcm9wZXJ0eeajgOafpeWvueixoeaYr+WQpuWMheWQq+WxnuaAp1xuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIHByaW50U3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJpbnRTdHJpbmcnKVxudmFyIGlzRXhpc3QgPSByZXF1aXJlKCcuLi91dGlscy9pc0V4aXN0JylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGhhczogaGFzLFxuICBoYXNPd246IGhhc1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIGtleSkge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgaGF2ZSBvd24gcHJvcGVydHk6ICcgKyBwcmludFN0cmluZyhrZXkpXG59XG5cbmZ1bmN0aW9uIGhhcyAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIChpc0V4aXN0KHRhcmdldCkgJiYgdGFyZ2V0Lmhhc093blByb3BlcnR5ICYmIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGtleSlcbn1cblxuaGFzLm5leHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHRhcmdldFtrZXldLFxuICAgIG5hbWU6IG5hbWUgKyAnLicgKyBrZXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL2hhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmo4Dmn6XmiYDlsZ7nmoTnsbso5L2/55SoaW5zdGFuY2VvZuWFs+mUruWtl+WIpOaWrSlcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpbnN0YW5jZU9mOiBpbnN0YW5jZU9mXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgY3Rvcikge1xuICB2YXIgY3Rvck5hbWUgPSBjdG9yLm5hbWUgfHwgJ1t1bmtub3duXSdcbiAgcmV0dXJuIG5hbWUgKyAnIGlzIE5PVCBhbiBpbnN0YW5jZSBvZiBnaXZlbiBjb25zdHJ1Y3RvcjogJyArIGN0b3JOYW1lXG59XG5cbmZ1bmN0aW9uIGluc3RhbmNlT2YgKHRhcmdldCwgbmFtZSwgY3Rvcikge1xuICBpZiAoX3YoaXNGdW5jdGlvbihjdG9yKSwgJ0JhZCBwYXJhbTogY3RvciBpcyBOT1QgYSBmdW5jdGlvbi4nKSkge1xuICAgIHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgY3RvcikgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgY3RvcilcbiAgfVxufVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVja3MvaW5zdGFuY2VPZi5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlj4LmlbDnsbvlnovmo4Dmn6XlmahcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBmaXJzdFVwcGVyQ2FzZSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZpcnN0VXBwZXJDYXNlJylcbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcblxudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJndW1lbnRzJylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKVxudmFyIGlzQXJyYXlCdWZmZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheUJ1ZmZlcicpXG52YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcnJheUxpa2UnKVxudmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0JylcbnZhciBpc0Jvb2xlYW4gPSByZXF1aXJlKCdsb2Rhc2gvaXNCb29sZWFuJylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc0J1ZmZlcicpXG52YXIgaXNEYXRlID0gcmVxdWlyZSgnbG9kYXNoL2lzRGF0ZScpXG52YXIgaXNFbGVtZW50ID0gcmVxdWlyZSgnbG9kYXNoL2lzRWxlbWVudCcpXG52YXIgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5JylcbnZhciBpc0Vycm9yID0gcmVxdWlyZSgnbG9kYXNoL2lzRXJyb3InKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG52YXIgaXNMZW5ndGggPSByZXF1aXJlKCdsb2Rhc2gvaXNMZW5ndGgnKVxudmFyIGlzTWFwID0gcmVxdWlyZSgnbG9kYXNoL2lzTWFwJylcbnZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJ2xvZGFzaC9pc05hdGl2ZScpXG52YXIgaXNOaWwgPSByZXF1aXJlKCdsb2Rhc2gvaXNOaWwnKVxudmFyIGlzTnVsbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bGwnKVxudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdCcpXG52YXIgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0TGlrZScpXG52YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0JylcbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1JlZ0V4cCcpXG52YXIgaXNTZXQgPSByZXF1aXJlKCdsb2Rhc2gvaXNTZXQnKVxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJylcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N5bWJvbCcpXG52YXIgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzVHlwZWRBcnJheScpXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKVxudmFyIGlzV2Vha01hcCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1dlYWtNYXAnKVxudmFyIGlzV2Vha1NldCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1dlYWtTZXQnKVxuXG52YXIgaXNFeGlzdCA9IGZ1bmN0aW9uIGlzRXhpc3QgKG8pIHtcbiAgcmV0dXJuICEoaXNVbmRlZmluZWQobykgfHwgaXNOdWxsKG8pKVxufVxuXG52YXIgc3VwcG9ydE1ldGhvZHMgPSB7XG4gIGlzQXJndW1lbnRzOiBpc0FyZ3VtZW50cyxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc0FycmF5TGlrZU9iamVjdDogaXNBcnJheUxpa2VPYmplY3QsXG4gIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0VsZW1lbnQ6IGlzRWxlbWVudCxcbiAgaXNFbXB0eTogaXNFbXB0eSxcbiAgaXNFcnJvcjogaXNFcnJvcixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNMZW5ndGg6IGlzTGVuZ3RoLFxuICBpc01hcDogaXNNYXAsXG4gIGlzTmF0aXZlOiBpc05hdGl2ZSxcbiAgaXNOaWw6IGlzTmlsLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzT2JqZWN0TGlrZTogaXNPYmplY3RMaWtlLFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gIGlzU2V0OiBpc1NldCxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc1N5bWJvbDogaXNTeW1ib2wsXG4gIGlzVHlwZWRBcnJheTogaXNUeXBlZEFycmF5LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzV2Vha01hcDogaXNXZWFrTWFwLFxuICBpc1dlYWtTZXQ6IGlzV2Vha1NldCxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNFeGlzdDogaXNFeGlzdFxufVxuXG52YXIgZW50cmllcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cmllc1xuXG5mdW5jdGlvbiBjaGVja1N0cmluZ1R5cGUgKHR5cGUsIHRhcmdldCkge1xuICB2YXIga2V5ID0gJ2lzJyArIGZpcnN0VXBwZXJDYXNlKHR5cGUpXG5cbiAgdmFyIGZuID0gc3VwcG9ydE1ldGhvZHNba2V5XVxuXG4gIGlmIChfdihzdXBwb3J0TWV0aG9kcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlzRnVuY3Rpb24oZm4pLFxuICAnQmFkIHBhcmFtOiAnICsgdHlwZSArICcgaXMgTk9UIGEgbGVnYWwgdHlwZS4nKSkge1xuICAgIHJldHVybiBmbih0YXJnZXQpXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY2hlY2tDbGFzc1R5cGUgKHR5cGUsIHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgdHlwZVxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIHR5cGVzKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UICcgKyBwcmludFN0cmluZyh0eXBlcylcbn1cblxuZnVuY3Rpb24gaXMgKHRhcmdldCwgbmFtZSkge1xuICB2YXIgdHlwZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gIHZhciBsZW4gPSB0eXBlcy5sZW5ndGhcbiAgdmFyIHllcyA9IGZhbHNlXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSB0eXBlc1tpXVxuXG4gICAgaWYgKCFfdihpc1N0cmluZyhrZXkpIHx8IGlzRnVuY3Rpb24oa2V5KSxcbiAgICAgICdCYWQgcGFyYW06IGFyZ3VtZW50c1snICsgaSArICddIGlzIE5PVCBzdHJpbmcgb3IgZnVuY3Rpb24uJykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKGtleSkpIHtcbiAgICAgIHllcyA9IGNoZWNrU3RyaW5nVHlwZShrZXksIHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgeWVzID0gY2hlY2tDbGFzc1R5cGUoa2V5LCB0YXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKHllcykgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB5ZXMgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgdHlwZXMpXG59XG5cbmVudHJpZXMuaXMgPSBpc1xuXG5mdW5jdGlvbiB4eHhNZXNzYWdlIChrZXksIHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gbmFtZSArICcoJyArIHByaW50U3RyaW5nKHRhcmdldCkgKyAnKScgKyAnIGlzIE5PVCBhKG4pICcgKyBrZXkucmVwbGFjZSgvXmlzLywgJycpLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gaXNYWFjmlrnms5VcbmZvciAodmFyIGtleSBpbiBzdXBwb3J0TWV0aG9kcykge1xuICB2YXIgZm4gPSBzdXBwb3J0TWV0aG9kc1trZXldXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGZuKSkge1xuICAgIGNvbnRpbnVlXG4gIH1cblxuICAoZnVuY3Rpb24gKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xuICAgIGVudHJpZXNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICByZXR1cm4gbWV0aG9kKHRhcmdldCkgPyB1bmRlZmluZWQgOiB4eHhNZXNzYWdlKG1ldGhvZE5hbWUsIHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJylcbiAgICB9XG5cbiAgICBlbnRyaWVzW21ldGhvZE5hbWVdLl9uYW1lID0gbWV0aG9kTmFtZVxuICB9KShrZXksIGZuKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL2lzLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOWIpOaWreaVsOe7hOmVv+W6pijkuZ/ljIXmi6zku7/mlbDnu4QpXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgZ290Q2hlY2sgPSByZXF1aXJlKCcuL2dvdCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsZW5ndGg6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBsZW5ndGggKHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gZ290Q2hlY2suZ290KHRhcmdldCwgbmFtZSwgJ2xlbmd0aCcpXG59XG5cbmxlbmd0aC5uZXh0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gZ290Q2hlY2suZ290Lm5leHQodGFyZ2V0LCBuYW1lLCAnbGVuZ3RoJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9sZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5bCP5LqOXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG5cbnZhciBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpXG5cbnZhciBlbnRyaWVzID0ge31cblxubW9kdWxlLmV4cG9ydHMgPSBlbnRyaWVzXG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgbikge1xuICByZXR1cm4gbmFtZSArICcgaXMgTk9UIGxlc3MgdGhhbiAnICsgblxufVxuXG5mdW5jdGlvbiBsZXNzVGhhbiAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIGlmIChfdihpc051bWJlcihuKSwgJ0JhZCBwYXJhbTogbiBpcyBOT1QgYSBudW1iZXIuJykpIHtcbiAgICByZXR1cm4gdGFyZ2V0IDwgbiA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBuKVxuICB9XG59XG5cbmVudHJpZXMubGVzc1RoYW4gPSBsZXNzVGhhblxuZW50cmllcy5sdCA9IGxlc3NUaGFuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVja3MvbGVzc1RoYW4uanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogbWFw5Ye95pWwXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKVxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1hcDogbWFwXG59XG5cbi8qKlxuICog5L2/55SobWFw5Ye95pWw6L2s5YyW5a+56LGh77yM5bm26L+U5Zue55So6L2s5YyW6L+H55qE5a+56LGh5p6E6YCg55qEQ2hlY2tlclxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258U3RyaW5nfSDovazljJblh73mlbDvvIzlpoLmnpzkuLrlrZfnrKbkuLLvvIzliJnosIPnlKjlvoXmo4Dmn6Xlr7nosaHlkIzlkI3mlrnms5XvvIzlkI7pnaLnmoTlj4LmlbDkvJrkvKDnu5nnm7jlupTmlrnms5VcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqL1xuZnVuY3Rpb24gbWFwICh0YXJnZXQsIG5hbWUsIGZuKSB7XG4gIHJldHVyblxufVxuXG5tYXAubmV4dCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGZuKSB7XG4gIHZhciBtYXBUYXJnZXRcblxuICB0cnkge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgbWFwVGFyZ2V0ID0gZm4odGFyZ2V0KVxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZm4pKSB7XG4gICAgICB2YXIgZiA9IHRhcmdldFtmbl1cbiAgICAgIGlmIChfdihpc0Z1bmN0aW9uKGYpLCAnQmFkIHBhcmFtOiB0aGUgb2JqIGhhcyBOT1QgZ290IGEgbWV0aG9kIGNhbGxlZCcgKyBmbiArICcuJykpIHtcbiAgICAgICAgbWFwVGFyZ2V0ID0gZi5hcHBseSh0YXJnZXQsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMykpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF92KGZhbHNlLCAnQmFkIHBhcmFtOiBmbiBpcyBpbGxlZ2FsLicpXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfdihmYWxzZSwgZXJyLm1lc3NhZ2UpXG4gIH1cblxuICB2YXIgbWFwTmFtZSA9IG5hbWUgKyAnPT4nICsgKGlzU3RyaW5nKGZuKSA/IGZuIDogKGZuLm5hbWUgfHwgJ1tBbm9ueW1vdXMgRnVuY3Rpb25dJykpXG5cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IG1hcFRhcmdldCxcbiAgICBuYW1lOiBtYXBOYW1lXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5qOA5p+l5piv5ZCm56ym5ZCI5q2j5YiZ6KGo6L6+5byPXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG5cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1JlZ0V4cCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXRjaDogbWF0Y2hcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCByZXhwKSB7XG4gIHJldHVybiBuYW1lICsgJyBkb2VzIE5PVCBtYXRjaCByZWdleHA6IC8nICsgcmV4cC5zb3VyY2UgKyAnLydcbn1cblxuZnVuY3Rpb24gbWF0Y2ggKHRhcmdldCwgbmFtZSwgcmV4cCkge1xuICBpZiAoX3YoaXNSZWdFeHAocmV4cCksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgcmVnZXhwLicpKSB7XG4gICAgcmV0dXJuIHJleHAudGVzdCh0YXJnZXQpID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIHJleHApXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9tYXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDkvb/nlKjoh6rlrprkuYnlh73mlbDmiJZwbGFu5qOA5p+lXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgZ2V0RXJyb3JNZXNzYWdlID0gcmVxdWlyZSgnLi4vdXRpbHMvZ2V0RXJyb3JNZXNzYWdlJylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtZWV0OiBtZWV0XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgZXJyb3JNc2cpIHtcbiAgcmV0dXJuIG5hbWUgKyAnIGRvZXMgTk9UIHBhc3MgdGhlIGNoZWNrLCBkZXRhaWw6IHsnICsgZXJyb3JNc2cgKyAnfSdcbn1cblxuLyoqXG4gKiDkvb/nlKjoh6rlrprkuYnlh73mlbDmiJZwbGFu5qOA5p+lXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxQbGFufSBmbiDmo4Dmn6Xlh73mlbDmiJZwbGFu77yM5Y+C5pWw5Li65b6F5qOA5p+l5a+56LGhXG4gKiBAcmV0dXJuIHt1bmRlZmluZWR8U3RyaW5nfSDplJnor6/mtojmga9cbiAqL1xuZnVuY3Rpb24gbWVldCAodGFyZ2V0LCBuYW1lLCBmbikge1xuICB2YXIgZXJyb3JNc2dcblxuICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICBlcnJvck1zZyA9IGdldEVycm9yTWVzc2FnZShmbiwgdGFyZ2V0KVxuICB9IGVsc2UgaWYgKGZuLl9faXNQbGFuKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZuLl9fZXhlYyh0aGlzKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yTXNnID0gZm4uX19wYXRoKClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX3YoZmFsc2UsICdCYWQgcGFyYW06IGZuIGlzIE5PVCBhIGZ1bmN0aW9uIG9yIHBsYW4uJylcbiAgfVxuXG4gIHJldHVybiAhZXJyb3JNc2cgPyBudWxsIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGVycm9yTXNnKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL21lZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogb3Lmo4Dmn6VcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBnZXRFcnJvck1lc3NhZ2UgPSByZXF1aXJlKCcuLi91dGlscy9nZXRFcnJvck1lc3NhZ2UnKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9yOiBvclxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG5vLCBlcnJvckRldGFpbCkge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgcGFzcyB0aGUgJyArXG4gICAgbm8gKyAnc3QvcmQvdGggb2YgYW4gXCJPUlwiIGNoZWNrLCBkZXRhaWw6IFsnICtcbiAgICBlcnJvckRldGFpbC5tYXAoZnVuY3Rpb24gKGVsLCBpbmRleCkgeyByZXR1cm4gaW5kZXggKyAnOiAnICsgZWwgfSkuam9pbignOyAnKSArICddJ1xufVxuXG4vKipcbiAqIOS9v+eUqOKAnOaIluKAneWFs+ezu+e7hOWQiOajgOafpeWHveaVsOaIlnBsYW5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBsYW59IC4uLngg5Ye95pWw5oiWUGxhbuWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxuICogQHJldHVybiB7dW5kZWZpbmVkfFN0cmluZ30g6ZSZ6K+v5raI5oGvXG4gKi9cbmZ1bmN0aW9uIG9yICh0YXJnZXQsIG5hbWUsIHgpIHtcbiAgdmFyIGZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgdmFyIGxlbiA9IGZucy5sZW5ndGhcbiAgdmFyIGVycm9yRGV0YWlsID0gW11cbiAgdmFyIGVycm9yQ291bnQgPSAwXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBmbiA9IGZuc1tpXVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICB2YXIgZXJyb3JNc2cgPSBnZXRFcnJvck1lc3NhZ2UoZm4sIHRhcmdldClcbiAgICAgIGlmIChlcnJvck1zZykge1xuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGVycm9yTXNnKVxuICAgICAgICBlcnJvckNvdW50KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9IGVsc2UgaWYgKGZuLl9faXNQbGFuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbi5fX2V4ZWModGhpcylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGZuLl9fcGF0aCgpKVxuICAgICAgICBlcnJvckNvdW50KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9IGVsc2Uge1xuICAgICAgX3YoZmFsc2UsICdCYWQgcGFyYW06IGFyZ3VtZW50WycgKyBpICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcGxhbi4nKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvckNvdW50IDwgbGVuID8gbnVsbCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBlcnJvckRldGFpbClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy9vci5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmo4Dmn6XmmK/lkKbnm7jlkIxcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNhbWU6IHNhbWVcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBvdGhlcikge1xuICByZXR1cm4gbmFtZSArICcgaXMgTk9UIHRoZSBzYW1lIGFzICcgKyBwcmludFN0cmluZyhvdGhlcilcbn1cblxuLyoqXG4gKiDmo4Dmn6XmmK/lkKbnm7jlkIwo5L2/55SoPT095Yik5patKVxuICpcbiAqIEBwYXJhbSB7YW55fSBvdGhlciDmr5TovoPnmoTlr7nosaFcbiAqIEByZXR1cm5zIHt1bmRlZmluZWR8U3RyaW5nfSDplJnor6/mtojmga9cbiAqL1xuZnVuY3Rpb24gc2FtZSAodGFyZ2V0LCBuYW1lLCBvdGhlcikge1xuICByZXR1cm4gKHRhcmdldCA9PT0gb3RoZXIpID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG90aGVyKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2tzL3NhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5Yik5pat5piv5ZCm5Zyo5Yy66Ze05YaFXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKVxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpdGhpbjogd2l0aGluXG59XG5cbnZhciByZXhwUmFuZ2UgPSAvXihbKFtdKShbLStdP1tcXGQuXSspLFxccyooWy0rXT9bXFxkLl0rKShbXFxdKV0pJC9cbnZhciBjYWNoZSA9IHt9XG5cbi8vIOagueaNruaVsOWtpuihqOi+vuW8j+eUn+aIkOWIpOaWreWHveaVsFxuZnVuY3Rpb24gZ2VuUmFuZ2VGbiAocmFuZ2UpIHtcbiAgdmFyIGZuID0gY2FjaGVbcmFuZ2VdXG5cbiAgaWYgKGZuKSByZXR1cm4gZm5cblxuICBpZiAoIV92KGlzU3RyaW5nKHJhbmdlKSxcbiAgICAnQmFkIHBhcmFtOiByYW5nZSBpcyBOT1Qgc3RyaW5nLicpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHJleHBSYW5nZS5leGVjKHJhbmdlKVxuXG4gIGlmICghX3YobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID09PSA1LFxuICAgICdCYWQgcGFyYW06IGJhZCByYW5nZSBzdHJpbmc6ICcgKyByYW5nZSArICcuJykpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3AxID0gKG1hdGNoWzFdID09PSAnWycpID8gJz49JyA6ICc+J1xuICAgIHZhciBvcDIgPSAobWF0Y2hbMl0gPT09ICddJykgPyAnPD0nIDogJzwnXG4gICAgdmFyIGxvd2VyQm91bmQgPSBwYXJzZUZsb2F0KG1hdGNoWzJdKVxuICAgIHZhciBoaWdoZXJCb3VuZCA9IHBhcnNlRmxvYXQobWF0Y2hbM10pXG5cbiAgICB2YXIgZm5Tb3VyY2UgPSAoJ3JldHVybiAobiAkb3AxICRsb3dlckJvdW5kKSAmJiAobiAkb3AyICRoaWdoZXJCb3VuZCk7JylcbiAgICAgIC5yZXBsYWNlKCckb3AxJywgb3AxKVxuICAgICAgLnJlcGxhY2UoJyRsb3dlckJvdW5kJywgbG93ZXJCb3VuZClcbiAgICAgIC5yZXBsYWNlKCckb3AyJywgb3AyKVxuICAgICAgLnJlcGxhY2UoJyRoaWdoZXJCb3VuZCcsIGhpZ2hlckJvdW5kKVxuXG4gICAgLyogZXNsaW50IG5vLW5ldy1mdW5jOiBcImlnbm9yZVwiICovXG4gICAgZm4gPSBjYWNoZVtyYW5nZV0gPSBuZXcgRnVuY3Rpb24oWyduJ10sIGZuU291cmNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZuXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgcmFuZ2VzKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgaW4gcmFuZ2Uocyk6ICcgKyBwcmludFN0cmluZyhyYW5nZXMpXG59XG5cbi8qKlxuICog5qOA5p+l5piv5ZCm5bGe5LqO5p+Q5Liq5Yy66Ze0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXk8U3RyaW5nPn0gLi4ucmFuZ2VzIOWMuumXtOWtl+espuS4su+8jOW9ouWmglsxLDIpLCDlj6/ku6XkuLrlpJrkuKpcbiAqIEByZXR1cm4ge3VuZGVmaW5lZHxTdHJpbmd9IOmUmeivr+a2iOaBr1xuICovXG5mdW5jdGlvbiB3aXRoaW4gKHRhcmdldCwgbmFtZSkge1xuICB2YXIgcmFuZ2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICB2YXIgbGVuID0gcmFuZ2VzLmxlbmd0aFxuXG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB5ZXMgPSBmYWxzZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcmFuZ2UgPSByYW5nZXNbaV1cbiAgICB2YXIgZm4gPSBnZW5SYW5nZUZuKHJhbmdlKVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICB5ZXMgPSAgZm4odGFyZ2V0KVxuICAgICAgaWYgKHllcykgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geWVzID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIHJhbmdlcylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL2NoZWNrcy93aXRoaW4uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDlr7zlh7rlhaXlj6NcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBjaGVjayA9IHJlcXVpcmUoJy4vbGliL2NoZWNrJylcclxudmFyIENoZWNrZXIgPSByZXF1aXJlKCcuL2xpYi9DaGVja2VyJylcclxuXHJcbkNoZWNrZXIucmVnaXN0ZXJDaGVjayhyZXF1aXJlKCcuL2xpYi9jaGVja3MvYW1vbmcnKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy9hbmQnKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy9lcXVhbCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL2VxdWFsT3JHcmVhdGVyVGhhbicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL2VxdWFsT3JMZXNzVGhhbicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL2dvdCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL2dyZWF0ZXJUaGFuJykpXHJcbkNoZWNrZXIucmVnaXN0ZXJDaGVjayhyZXF1aXJlKCcuL2xpYi9jaGVja3MvaGFzJykpXHJcbkNoZWNrZXIucmVnaXN0ZXJDaGVjayhyZXF1aXJlKCcuL2xpYi9jaGVja3MvaW5zdGFuY2VPZicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL2lzJykpXHJcbkNoZWNrZXIucmVnaXN0ZXJDaGVjayhyZXF1aXJlKCcuL2xpYi9jaGVja3MvbGVuZ3RoJykpXHJcbkNoZWNrZXIucmVnaXN0ZXJDaGVjayhyZXF1aXJlKCcuL2xpYi9jaGVja3MvbGVzc1RoYW4nKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy9tYXAnKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy9tYXRjaCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL21lZXQnKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy9vcicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyQ2hlY2socmVxdWlyZSgnLi9saWIvY2hlY2tzL3NhbWUnKSlcclxuQ2hlY2tlci5yZWdpc3RlckNoZWNrKHJlcXVpcmUoJy4vbGliL2NoZWNrcy93aXRoaW4nKSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2hlY2tcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlkKblrprmo4Dmn6XlmahcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciB2ZXJpZnkgPSByZXF1aXJlKCcuL3V0aWxzL3ZlcmlmeScpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL3ByaW50U3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RDaGVja2VyXG5cbi8qKlxuICog5ZCm5a6a5qOA5p+l5ZmoKOWvuUNoZWNrZXLnmoTmr4/kuKrmo4Dmn6Xmlrnms5Xlj5bigJzpnZ7igJ0pXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0NoZWNrZXJ9IGNoZWNrZXJcbiAqL1xuZnVuY3Rpb24gTm90Q2hlY2tlciAoY2hlY2tlcikge1xuICB0aGlzLmNoZWNrZXJfID0gY2hlY2tlclxufVxuXG5Ob3RDaGVja2VyLnJlZ2lzdGVyQ2hlY2sgPSBmdW5jdGlvbiAoY2hlY2tzKSB7XG4gIGZvciAodmFyIGtleSBpbiBjaGVja3MpIHtcbiAgICBpZiAoIWNoZWNrcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSBjb250aW51ZVxuXG4gICAgTm90Q2hlY2tlci5wcm90b3R5cGVba2V5XSA9IChmdW5jdGlvbiAoY2hlY2tOYW1lKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXMuY2hlY2tlcl9cbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgIHZhciBlcnJNc2cgPSBudWxsXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGF0W2NoZWNrTmFtZV0uYXBwbHkodGhhdCwgYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgIGlmIChlcnIuaXNQYXJhbUNoZWNrRXJyb3IpIHtcbiAgICAgICAgICAgIGVyck1zZyA9IGVyci5tZXNzYWdlXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVyciAvLyDlhoXpg6jplJnor6/vvIzpnZ7mo4Dmn6XlpLHotKVcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVhbE1zZyA9IG51bGxcblxuICAgICAgICBpZiAoZXJyTXNnKSB7XG4gICAgICAgICAgcmVhbE1zZyA9IGVyck1zZy5yZXBsYWNlKCdbUEFSQU0tQ0hFQ0tdJywgJ1tQQVJBTS1DSEVDS11bTk9UXScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVhbE1zZyA9ICdbUEFSQU0tQ0hFQ0tdW05PVF0gJyArIGNoZWNrTmFtZSArICcgY2hlY2sgZXJyb3IsIHRhcmdldDogJyArIHByaW50U3RyaW5nKHRoaXMuY2hlY2tlcl8udGFyZ2V0XylcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmeShlcnJNc2csIHJlYWxNc2cpXG5cbiAgICAgICAgcmV0dXJuIHRoYXRcbiAgICAgIH1cbiAgICB9KShrZXkpXG4gIH1cbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvTm90Q2hlY2tlci5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqIEBmaWxlb3ZlcnZpZXdcclxuICog5qC55o2u57G7QSjlhbbmlrnms5XmlK/mjIHpk77lvI/osIPnlKgpLCDnlJ/miJDkuIDkuKrnm7jlupTnmoTigJxwbGFu4oCd57G7LCDpk77lvI/osIPnlKhwbGFu55qE5pa55rOVLCDov5Tlm57kuIDkuKrlh73mlbAsIOaJp+ihjOWHveaVsOWNs+WPr+mTvuW8j+aJp+ihjEHnmoTnm7jlupTmlrnms5UuXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcclxudmFyIGRlZiA9IHJlcXVpcmUoJy4vdXRpbHMvZGVmJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGxhblxyXG5cclxuLyoqXHJcbiAqIOeUn+aIkCBwbGFuXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm90byDopoHnlJ/miJAgcGxhbiDnmoTnsbvljp/lnotcclxuICogQHBhcmFtIGNoYWluaW5nUHJvcHMg5pSv5oyB6ZO+5byP6LCD55So55qE6Ieq5a6a5LmJ5bGe5oCn5ZCN5YiX6KGoXHJcbiAqIEBwYXJhbSBjaGFpbmluZ01ldGhvZHMg5pSv5oyB6ZO+5byP6LCD55So55qE5pa55rOV5ZCN5YiX6KGo77yM5aaC5p6c5LiN5aGr77yM6buY6K6k5omA5pyJ5pa55rOV6YO95pSv5oyB6ZO+5byP6LCD55SoXHJcbiAqIEByZXR1cm4g55Sf5oiQ55qEIHBsYW4g5a6e5L6LXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVQbGFuIChwcm90bywgY2hhaW5pbmdQcm9wcywgY2hhaW5pbmdNZXRob2RzKSB7XHJcbiAgZnVuY3Rpb24gUGxhbiAoZm4sIHByZXYsIG5hbWUpIHtcclxuICAgIHRoaXMuZm5fID0gZm5cclxuICAgIHRoaXMucHJldl8gPSBwcmV2XHJcbiAgICB0aGlzLm5hbWVfID0gbmFtZVxyXG4gICAgdGhpcy5fX2luaXRDdXN0b21Qcm9wcyhjaGFpbmluZ1Byb3BzKVxyXG4gIH1cclxuXHJcbiAgUGxhbi5wcm90b3R5cGUuX19pc1BsYW4gPSB0cnVlXHJcblxyXG4gIC8vIOWboOS4uiBQbGFuLnByb3RvdHlwZSDkuIrkvJrmt7vliqDorrjlpJrlkI3lrZfmnKrnn6XnmoTmlrnms5XvvIzmiYDku6Xoh6rlt7HnmoTmlrnms5XliqBcIl9fXCLku6Xop4Tpgb/ph43lkI1cclxuICBQbGFuLnByb3RvdHlwZS5fX2luaXRDdXN0b21Qcm9wcyA9IGZ1bmN0aW9uIChjaGFpbmluZ1Byb3BzKSB7XHJcbiAgICBpZiAoY2hhaW5pbmdQcm9wcyAmJiBjaGFpbmluZ1Byb3BzLmxlbmd0aCkge1xyXG4gICAgICB2YXIgbGVuID0gY2hhaW5pbmdQcm9wcy5sZW5ndGhcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgdmFyIHByb3BOYW1lID0gY2hhaW5pbmdQcm9wc1tpXVxyXG4gICAgICAgIHZhciBmbiA9IChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQbGFuKGZ1bmN0aW9uICh0aGF0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXRbcHJvcF1cclxuICAgICAgICAgICAgfSwgc2VsZiwgcHJvcClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShwcm9wTmFtZSlcclxuXHJcbiAgICAgICAgZGVmKHRoaXMsIHByb3BOYW1lLCBmbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUGxhbi5wcm90b3R5cGUuX19leGVjID0gZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgIHZhciBteVRoYXQgPSB0aGF0XHJcbiAgICB2YXIgcHJldiA9IHRoaXMucHJldl9cclxuICAgIHZhciBmbiA9IHRoaXMuZm5fXHJcblxyXG4gICAgaWYgKHByZXYpIHtcclxuICAgICAgbXlUaGF0ID0gcHJldi5fX2V4ZWModGhhdClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgcmV0dXJuIGZuKG15VGhhdClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhhdFxyXG4gIH1cclxuXHJcbiAgUGxhbi5wcm90b3R5cGUuX19wYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByZXYgPSB0aGlzLnByZXZfXHJcbiAgICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICAgIHZhciByZXQgPSBwcmV2ID8gcHJldi5fX3BhdGgoKSA6ICcnXHJcblxyXG4gICAgcmV0ICs9ICcuJyArIG5hbWVcclxuXHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfVxyXG5cclxuICBQbGFuLl9fcmVnaXN0ZXJDaGVjayA9IGZ1bmN0aW9uIChjaGVja3MpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBjaGVja3MpIHtcclxuICAgICAgaWYgKCFjaGVja3MuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhaXNGdW5jdGlvbihjaGVja3Nba2V5XSkpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhaW5pbmdNZXRob2RzICYmIGNoYWluaW5nTWV0aG9kcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBsYW4ucHJvdG90eXBlW2tleV0pIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBQbGFuLnByb3RvdHlwZVtrZXldID0gKGZ1bmN0aW9uIChmbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgICAgICByZXR1cm4gbmV3IFBsYW4oZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXRbZm5OYW1lXS5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICAgICAgfSwgc2VsZiwgZm5OYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkoa2V5KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUGxhbi5fX3JlZ2lzdGVyQ2hlY2socHJvdG8pXHJcblxyXG4gIHJldHVybiBQbGFuXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvcGxhbi5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDpppblrZfmr43lpKflhplcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZmlyc3RVcHBlckNhc2UgKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXFMvZywgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9VcHBlckNhc2UoKSB9KVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvZmlyc3RVcHBlckNhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FycmF5QnVmZmVyYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJyYXlCdWZmZXIodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJyYXlCdWZmZXJUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNEYXRlYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGRhdGUgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0RhdGUodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gZGF0ZVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNEYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzRGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hcGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gbWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzUmVnRXhwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNSZWdFeHAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gcmVnZXhwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1JlZ0V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1JlZ0V4cC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaXMgY2FwYWJsZSBvZiBiZWluZyBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG52YXIgaXNNYXNrYWJsZSA9IGNvcmVKc0RhdGEgPyBpc0Z1bmN0aW9uIDogc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2FibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2thYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19iYXNlSXNBcnJheUJ1ZmZlcicpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNBcnJheUJ1ZmZlciA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzQXJyYXlCdWZmZXI7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlCdWZmZXJgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5QnVmZmVyKG5ldyBBcnJheUJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5QnVmZmVyKG5ldyBBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheUJ1ZmZlciA9IG5vZGVJc0FycmF5QnVmZmVyID8gYmFzZVVuYXJ5KG5vZGVJc0FycmF5QnVmZmVyKSA6IGJhc2VJc0FycmF5QnVmZmVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uaXNBcnJheUxpa2VgIGV4Y2VwdCB0aGF0IGl0IGFsc28gY2hlY2tzIGlmIGB2YWx1ZWBcbiAqIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBpc0FycmF5TGlrZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2VPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYm9vbGVhbiBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYm9vbGVhbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQm9vbGVhbihmYWxzZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Jvb2xlYW4obnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZSB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGJvb2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQm9vbGVhbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCb29sZWFuLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzRGF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc0RhdGUnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzRGF0ZSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzRGF0ZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYERhdGVgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGRhdGUgb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNEYXRlKG5ldyBEYXRlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRGF0ZSgnTW9uIEFwcmlsIDIzIDIwMTInKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0RhdGUgPSBub2RlSXNEYXRlID8gYmFzZVVuYXJ5KG5vZGVJc0RhdGUpIDogYmFzZUlzRGF0ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0RhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRGF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyksXG4gICAgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIERPTSBlbGVtZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgRE9NIGVsZW1lbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0VsZW1lbnQoZG9jdW1lbnQuYm9keSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VsZW1lbnQoJzxib2R5PicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFbGVtZW50KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIHZhbHVlLm5vZGVUeXBlID09PSAxICYmICFpc1BsYWluT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VsZW1lbnQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhbiBlbXB0eSBvYmplY3QsIGNvbGxlY3Rpb24sIG1hcCwgb3Igc2V0LlxuICpcbiAqIE9iamVjdHMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIG5vIG93biBlbnVtZXJhYmxlIHN0cmluZyBrZXllZFxuICogcHJvcGVydGllcy5cbiAqXG4gKiBBcnJheS1saWtlIHZhbHVlcyBzdWNoIGFzIGBhcmd1bWVudHNgIG9iamVjdHMsIGFycmF5cywgYnVmZmVycywgc3RyaW5ncywgb3JcbiAqIGpRdWVyeS1saWtlIGNvbGxlY3Rpb25zIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBsZW5ndGhgIG9mIGAwYC5cbiAqIFNpbWlsYXJseSwgbWFwcyBhbmQgc2V0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgc2l6ZWAgb2YgYDBgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGVtcHR5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNFbXB0eShudWxsKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkodHJ1ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KDEpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eShbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzRW1wdHkoeyAnYSc6IDEgfSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgICAgKGlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUuc3BsaWNlID09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgaXNCdWZmZXIodmFsdWUpIHx8IGlzVHlwZWRBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKSkge1xuICAgIHJldHVybiAhdmFsdWUubGVuZ3RoO1xuICB9XG4gIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpO1xuICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5zaXplO1xuICB9XG4gIGlmIChpc1Byb3RvdHlwZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gIWJhc2VLZXlzKHZhbHVlKS5sZW5ndGg7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbXB0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBkb21FeGNUYWcgPSAnW29iamVjdCBET01FeGNlcHRpb25dJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYW4gYEVycm9yYCwgYEV2YWxFcnJvcmAsIGBSYW5nZUVycm9yYCwgYFJlZmVyZW5jZUVycm9yYCxcbiAqIGBTeW50YXhFcnJvcmAsIGBUeXBlRXJyb3JgLCBvciBgVVJJRXJyb3JgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBlcnJvciBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Vycm9yKG5ldyBFcnJvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Vycm9yKEVycm9yKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXJyb3IodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBlcnJvclRhZyB8fCB0YWcgPT0gZG9tRXhjVGFnIHx8XG4gICAgKHR5cGVvZiB2YWx1ZS5tZXNzYWdlID09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZS5uYW1lID09ICdzdHJpbmcnICYmICFpc1BsYWluT2JqZWN0KHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcnJvcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc01hcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hcCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNNYXAgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc01hcDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE1hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNNYXAgPSBub2RlSXNNYXAgPyBiYXNlVW5hcnkobm9kZUlzTWFwKSA6IGJhc2VJc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBpc01hc2thYmxlID0gcmVxdWlyZSgnLi9faXNNYXNrYWJsZScpO1xuXG4vKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgQ09SRV9FUlJPUl9URVhUID0gJ1Vuc3VwcG9ydGVkIGNvcmUtanMgdXNlLiBUcnkgaHR0cHM6Ly9ucG1zLmlvL3NlYXJjaD9xPXBvbnlmaWxsLic7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcmlzdGluZSBuYXRpdmUgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGNhbid0IHJlbGlhYmx5IGRldGVjdCBuYXRpdmUgZnVuY3Rpb25zIGluIHRoZSBwcmVzZW5jZVxuICogb2YgdGhlIGNvcmUtanMgcGFja2FnZSBiZWNhdXNlIGNvcmUtanMgY2lyY3VtdmVudHMgdGhpcyBraW5kIG9mIGRldGVjdGlvbi5cbiAqIERlc3BpdGUgbXVsdGlwbGUgcmVxdWVzdHMsIHRoZSBjb3JlLWpzIG1haW50YWluZXIgaGFzIG1hZGUgaXQgY2xlYXI6IGFueVxuICogYXR0ZW1wdCB0byBmaXggdGhlIGRldGVjdGlvbiB3aWxsIGJlIG9ic3RydWN0ZWQuIEFzIGEgcmVzdWx0LCB3ZSdyZSBsZWZ0XG4gKiB3aXRoIGxpdHRsZSBjaG9pY2UgYnV0IHRvIHRocm93IGFuIGVycm9yLiBVbmZvcnR1bmF0ZWx5LCB0aGlzIGFsc28gYWZmZWN0c1xuICogcGFja2FnZXMsIGxpa2UgW2JhYmVsLXBvbHlmaWxsXShodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9iYWJlbC1wb2x5ZmlsbCksXG4gKiB3aGljaCByZWx5IG9uIGNvcmUtanMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKGlzTWFza2FibGUodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKENPUkVfRVJST1JfVEVYVCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBudWxsaXNoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOaWwobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05pbCh2b2lkIDApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOaWwoTmFOKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmlsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc05pbC5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1NldCA9IHJlcXVpcmUoJy4vX2Jhc2VJc1NldCcpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNTZXQgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1NldDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFNldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTZXQobmV3IFNldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNTZXQgPSBub2RlSXNTZXQgPyBiYXNlVW5hcnkobm9kZUlzU2V0KSA6IGJhc2VJc1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFdlYWtNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHdlYWsgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNXZWFrTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzV2Vha01hcChuZXcgTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzV2Vha01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHdlYWtNYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciB3ZWFrU2V0VGFnID0gJ1tvYmplY3QgV2Vha1NldF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgV2Vha1NldGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgd2VhayBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1dlYWtTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNXZWFrU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNXZWFrU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHdlYWtTZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNXZWFrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1dlYWtTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
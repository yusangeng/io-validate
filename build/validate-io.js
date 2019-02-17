(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("validate-io", [], factory);
	else if(typeof exports === 'object')
		exports["validate-io"] = factory();
	else
		root["validate-io"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
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

"use strict";
/**
 * 内部断言
 * @author Y3G
 */



module.exports = _v

function _v (expr, message) {
  if (!expr) {
    console.error('[IO-VALIDATE-INTERNAL] ' + message)
  }

  return !!expr
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(25),
    getRawTag = __webpack_require__(77),
    objectToString = __webpack_require__(82);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
    isObject = __webpack_require__(18);

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

  try {
    return JSON.stringify(obj)
  } catch (err) {
    return '' + obj
  }
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
    getValue = __webpack_require__(78);

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

var baseGetTag = __webpack_require__(2),
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

var DataView = __webpack_require__(63),
    Map = __webpack_require__(64),
    Promise = __webpack_require__(65),
    Set = __webpack_require__(66),
    WeakMap = __webpack_require__(67),
    baseGetTag = __webpack_require__(2),
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

var baseGetTag = __webpack_require__(2),
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
 * 检查器
 * @author Y3G
 */



var _v = __webpack_require__(1)
var def = __webpack_require__(22)
var verify = __webpack_require__(24)
var NotChecker = __webpack_require__(60)
var createPlan = __webpack_require__(61)

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
Checker.Policy = Checker.Plan = Checker.V = Plan
Checker.policy = Checker.plan = Checker.v = new Plan(null, null, 'plan')

/**
 * 安装检查方法
 * @param {Object} checks 检查方法列表
 */
Checker.register = function (checks) {
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

  NotChecker.register(checks)
  Plan.__register(checks)
}


/***/ }),
/* 14 */
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
    /* eslint eqeqeq: 0 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(3),
    isLength = __webpack_require__(17);

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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
    getPrototype = __webpack_require__(76),
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否包含属性(包括原型链)
 * @author Y3G
 */



var printString = __webpack_require__(4)
var isExist = __webpack_require__(23)

var isUndefined = __webpack_require__(20)

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
var isUndefined = __webpack_require__(20)

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

var prefix = '[IO-VALIDATE] Error: '

function verify (expr, message) {
  if (!expr) {
    var msg = prefix + (isFunction(message) ? message() : message) + '.'
    var err = new TypeError(msg)

    err.isParamCheckError = true

    var stack = err.stack
    var lines = stack.replace(/^TypeError.+\n {4}/, '').split('\n').map(function (el) {
      return el.trim()
    })

    /*
    lines.forEach(function (line) {
      console.log(line)
    })
    */

    err.position = lines[2]
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
    isMasked = __webpack_require__(80),
    isObject = __webpack_require__(18),
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(97)))

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

var baseIsArguments = __webpack_require__(68),
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

var baseIsRegExp = __webpack_require__(72),
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

var baseIsTypedArray = __webpack_require__(74),
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
 * 入口函数
 * @author Y3G
 */



var Checker = __webpack_require__(13)

module.exports = check

function check (target, name) {
  return new Checker(target, name)
}

check.Validator = Checker
check.register = Checker.register.bind(Checker)
check.plan = Checker.plan
check.v = Checker.v

// 兼容老版本
check.Checker = Checker
check.registerCheck = Checker.register.bind(Checker)


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否与参数中的某一个相等
 * @author Y3G
 */



var printString = __webpack_require__(4)
var equal = __webpack_require__(14)

var isFunction = __webpack_require__(14)

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



var _v = __webpack_require__(1)
var getErrorMessage = __webpack_require__(15)

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
var defaultEqual = __webpack_require__(14)

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



var _v = __webpack_require__(1)
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



var _v = __webpack_require__(1)
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



var _v = __webpack_require__(1)

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



var _v = __webpack_require__(1)

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



var _v = __webpack_require__(1)
var firstUpperCase = __webpack_require__(62)
var printString = __webpack_require__(4)

var isArguments = __webpack_require__(32)
var isArray = __webpack_require__(9)
var isArrayBuffer = __webpack_require__(83)
var isArrayLike = __webpack_require__(16)
var isArrayLikeObject = __webpack_require__(84)
var isBoolean = __webpack_require__(85)
var isBuffer = __webpack_require__(33)
var isDate = __webpack_require__(86)
var isElement = __webpack_require__(87)
var isEmpty = __webpack_require__(88)
var isError = __webpack_require__(89)
var isFunction = __webpack_require__(3)
var isLength = __webpack_require__(17)
var isMap = __webpack_require__(90)
var isNative = __webpack_require__(91)
var isNil = __webpack_require__(92)
var isNull = __webpack_require__(34)
var isNumber = __webpack_require__(10)
var isObject = __webpack_require__(18)
var isObjectLike = __webpack_require__(0)
var isPlainObject = __webpack_require__(19)
var isRegExp = __webpack_require__(35)
var isSet = __webpack_require__(93)
var isString = __webpack_require__(12)
var isSymbol = __webpack_require__(94)
var isTypedArray = __webpack_require__(36)
var isUndefined = __webpack_require__(20)
var isWeakMap = __webpack_require__(95)
var isWeakSet = __webpack_require__(96)

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
 * 是否是元素为特定类型的数组
 * @author Y3G
 */



var _v = __webpack_require__(1)
var printString = __webpack_require__(4)
var isArray = __webpack_require__(9)
var isFunction = __webpack_require__(3)
var Checker = __webpack_require__(13)

var prefix = '[IO-VALIDATE] Error: '

module.exports = {
  isArrayOf: isArrayOf
}

function message (target, name, errorMsg) {
  if (!errorMsg) {
    return name + '(' + printString(target) + ') is NOT an array'
  }

  return name + '(' + printString(target) + ') is NOT an array of specified type: ' + errorMsg
}

function isArrayOf (target, name, elementChecker) {
  if (!isArray(target)) {
    return message(target, name || 'parameter')
  }

  try {
    if (isFunction(elementChecker)) {
      target.forEach(function (el) {
        elementChecker(el)
      })
    } else if (elementChecker.__isPlan) {
      target.forEach(function (el, index) {
        const that = new Checker(el, name + '[' + index + ']')
        elementChecker.__exec(that)
      })
    } else {
      _v(false, 'elementChecker is NOT a function or plan.')
    }
  } catch (err) {
    return message(target, name || 'parameter', err.message.replace(prefix, ''))
  }
}


/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 小于
 * @author Y3G
 */



var _v = __webpack_require__(1)

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * map函数
 * @author Y3G
 */



var _v = __webpack_require__(1)

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
  return void 0
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 检查是否符合正则表达式
 * @author Y3G
 */



var _v = __webpack_require__(1)

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 使用自定义函数或plan检查
 * @author Y3G
 */



var _v = __webpack_require__(1)
var getErrorMessage = __webpack_require__(15)

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * or检查
 * @author Y3G
 */



var _v = __webpack_require__(1)
var getErrorMessage = __webpack_require__(15)

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 常用正则表达式检查
 * @author Y3G
 */



var printString = __webpack_require__(4)

module.exports = {}

var rexps = {
  Email: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  IP: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  // TODO: bugfix
  // HTMLTag: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
}

function message (target, name, patternName) {
  return name + '(' + printString(target) + ') does NOT match pattern ' + patternName
}

function patternCheck (target, name, pattern, patternName) {
  var match = pattern.test(target)
  return match ? undefined : message(target, name, patternName)
}

for (var key in rexps) {
  if (!rexps.hasOwnProperty(key)) {
    continue
  }

  module.exports['match' + key] = (function (key) {
    return function (target, name) {
      return patternCheck(target, name, rexps[key], key)
    }
  })(key)
}


/***/ }),
/* 57 */
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 判断是否在区间内
 * @author Y3G
 */



var _v = __webpack_require__(1)
var printString = __webpack_require__(4)

// var isArray = require('lodash/isArray')
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

    /* eslint no-new-func: 0 */
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
      yes = fn(target)
      if (yes) break
    }
  }

  return yes ? undefined : message(target, name || 'parameter', ranges)
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 导出入口
 * @author Y3G
 */



var check = __webpack_require__(39)
var Checker = __webpack_require__(13)

Checker.register(__webpack_require__(40))
Checker.register(__webpack_require__(41))
Checker.register(__webpack_require__(42))
Checker.register(__webpack_require__(43))
Checker.register(__webpack_require__(44))
Checker.register(__webpack_require__(21))
Checker.register(__webpack_require__(45))
Checker.register(__webpack_require__(46))
Checker.register(__webpack_require__(47))
Checker.register(__webpack_require__(48))
Checker.register(__webpack_require__(49))
Checker.register(__webpack_require__(50))
Checker.register(__webpack_require__(51))
Checker.register(__webpack_require__(52))
Checker.register(__webpack_require__(53))
Checker.register(__webpack_require__(54))
Checker.register(__webpack_require__(55))
Checker.register(__webpack_require__(56))
Checker.register(__webpack_require__(57))
Checker.register(__webpack_require__(58))

module.exports = check


/***/ }),
/* 60 */
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

NotChecker.register = function (checks) {
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
          realMsg = errMsg.replace('[IO-VALIDATE]', '[IO-VALIDATE][NOT]')
        } else {
          realMsg = '[IO-VALIDATE][NOT] ' + checkName + ' check error, target: ' + printString(this.checker_.target_)
        }

        verify(errMsg, realMsg)

        return that
      }
    })(key)
  }
}


/***/ }),
/* 61 */
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

  Plan.__register = function (checks) {
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

  Plan.__register(proto)

  return Plan
}


/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(8),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 71 */
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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 73 */
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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
    isLength = __webpack_require__(17),
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(29),
    nativeKeys = __webpack_require__(81);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(30);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 77 */
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
/* 78 */
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
/* 79 */
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
/* 80 */
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
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(30);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 82 */
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
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArrayBuffer = __webpack_require__(69),
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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(16),
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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(70),
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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(19);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(75),
    getTag = __webpack_require__(11),
    isArguments = __webpack_require__(32),
    isArray = __webpack_require__(9),
    isArrayLike = __webpack_require__(16),
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
    isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(19);

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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(71),
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(26),
    isMaskable = __webpack_require__(79);

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
/* 92 */
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(73),
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
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 95 */
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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(2),
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
/* 97 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtaW8uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyODg5MWE5YTYzYmYzYWZhYmM2YyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL192LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL3ByaW50U3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL2xpYi9DaGVja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9lcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXRpbHMvZ2V0RXJyb3JNZXNzYWdlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvZ290LmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9kZWYuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL2lzRXhpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3V0aWxzL3ZlcmlmeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc051bGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL2xpYi9jaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9hbW9uZy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9hbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvZXF1YWxPckdyZWF0ZXJUaGFuLmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL2VxdWFsT3JMZXNzVGhhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9ncmVhdGVyVGhhbi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvaW5zdGFuY2VPZi5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9pcy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9pc0FycmF5T2YuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvbGVuZ3RoLmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL2xlc3NUaGFuLmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdmFsaWRhdG9ycy9tZWV0LmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL29yLmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL3BhdHRlcm5zLmpzIiwid2VicGFjazovLy8uL2xpYi92YWxpZGF0b3JzL3NhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3ZhbGlkYXRvcnMvd2l0aGluLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2xpYi9Ob3RDaGVja2VyLmpzIiwid2VicGFjazovLy8uL2xpYi9wbGFuLmpzIiwid2VicGFjazovLy8uL2xpYi91dGlscy9maXJzdFVwcGVyQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNEYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1JlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2thYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0Jvb2xlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNEYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNOaWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNXZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzV2Vha1NldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwidmFsaWRhdGUtaW9cIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1widmFsaWRhdGUtaW9cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widmFsaWRhdGUtaW9cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1OSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjg4OTFhOWE2M2JmM2FmYWJjNmMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOWGhemDqOaWreiogFxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBfdlxuXG5mdW5jdGlvbiBfdiAoZXhwciwgbWVzc2FnZSkge1xuICBpZiAoIWV4cHIpIHtcbiAgICBjb25zb2xlLmVycm9yKCdbVkFMSURBVEUtSU8tSU5URVJOQUxdICcgKyBtZXNzYWdlKVxuICB9XG5cbiAgcmV0dXJuICEhZXhwclxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvX3YuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOeUn+aIkOeUqOadpeaJk+WNsOeahOWtl+espuS4slxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50U3RyaW5nXG5cbmZ1bmN0aW9uIHByaW50U3RyaW5nIChvYmopIHtcbiAgaWYgKGlzU3RyaW5nKG9iaikpIHtcbiAgICByZXR1cm4gJ1wiJyArIG9iaiArICdcIidcbiAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gJ1snICsgb2JqLmpvaW4oJywgJykgKyAnXSdcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iailcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcnICsgb2JqXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL3ByaW50U3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBOdW1iZXJgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogKipOb3RlOioqIFRvIGV4Y2x1ZGUgYEluZmluaXR5YCwgYC1JbmZpbml0eWAsIGFuZCBgTmFOYCwgd2hpY2ggYXJlXG4gKiBjbGFzc2lmaWVkIGFzIG51bWJlcnMsIHVzZSB0aGUgYF8uaXNGaW5pdGVgIG1ldGhvZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG51bWJlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTnVtYmVyKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcignMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IG51bWJlclRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdW1iZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTnVtYmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNTdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5qOA5p+l5ZmoXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuL3V0aWxzL192JylcbnZhciBkZWYgPSByZXF1aXJlKCcuL3V0aWxzL2RlZicpXG52YXIgdmVyaWZ5ID0gcmVxdWlyZSgnLi91dGlscy92ZXJpZnknKVxudmFyIE5vdENoZWNrZXIgPSByZXF1aXJlKCcuL05vdENoZWNrZXInKVxudmFyIGNyZWF0ZVBsYW4gPSByZXF1aXJlKCcuL3BsYW4nKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSBDaGVja2VyXG5cbi8qKlxuICog5qOA5p+l5ZmoXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge2FueX0gdGFyZ2V0IOimgeajgOafpeeahOWvueixoVxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg6KaB5qOA5p+l55qE5a+56LGh5ZCN5a2XKOWPr+mAie+8jOacieWKqeS6jueyvuehruaJk+WNsOS/oeaBrylcbiAqIEBwYXJhbSB7Q2hlY2tlcn0gb3duZXIg5omA5bGe55qEQ2hlY2tlcuWvueixoVxuICovXG5mdW5jdGlvbiBDaGVja2VyICh0YXJnZXQsIG5hbWUsIG93bmVyKSB7XG4gIHRoaXMudGFyZ2V0XyA9IHRhcmdldFxuICB0aGlzLm5hbWVfID0gbmFtZSB8fCAnW05hbWVsZXNzXSdcblxuICB0cnkge1xuICAgIGRlZih0aGlzLCAnb3duZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb3duZXJcbiAgICB9KVxuXG4gICAgZGVmKHRoaXMsICdfJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG93bmVyXG4gICAgfSlcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMub3duZXIgPSB0aGlzLl8gPSBvd25lclxuICB9XG5cbiAgLy8g5L2/55Sobm905bGe5oCn6I635Y+W5ZCm5a6a5qOA5p+l5ZmoXG4gIHRyeSB7XG4gICAgZGVmKHRoaXMsICdub3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmV0ID0gdGhpcy5ub3RfIHx8ICh0aGlzLm5vdF8gPSBuZXcgTm90Q2hlY2tlcih0aGlzKSlcbiAgICAgIHJldHVybiByZXRcbiAgICB9KVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5ub3QgPSBuZXcgTm90Q2hlY2tlcih0aGlzKVxuICB9XG59XG5cbkNoZWNrZXIucHJvdG90eXBlID0ge31cblxudmFyIFBsYW4gPSBjcmVhdGVQbGFuKENoZWNrZXIucHJvdG90eXBlLCBbJ25vdCcsICdvd25lciddKVxuQ2hlY2tlci5Qb2xpY3kgPSBDaGVja2VyLlBsYW4gPSBDaGVja2VyLlYgPSBQbGFuXG5DaGVja2VyLnBvbGljeSA9IENoZWNrZXIucGxhbiA9IENoZWNrZXIudiA9IG5ldyBQbGFuKG51bGwsIG51bGwsICdwbGFuJylcblxuLyoqXG4gKiDlronoo4Xmo4Dmn6Xmlrnms5VcbiAqIEBwYXJhbSB7T2JqZWN0fSBjaGVja3Mg5qOA5p+l5pa55rOV5YiX6KGoXG4gKi9cbkNoZWNrZXIucmVnaXN0ZXIgPSBmdW5jdGlvbiAoY2hlY2tzKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFyIG9iaiA9IHt9XG4gICAgb2JqW2FyZ3VtZW50c1swXV0gPSBhcmd1bWVudHNbMV1cblxuICAgIHJldHVybiBDaGVja2VyLnJlZ2lzdGVyQ2hlY2sob2JqKVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICBvYmogPSB7fVxuICAgIG9ialthcmd1bWVudHNbMF1dID0gYXJndW1lbnRzWzFdXG4gICAgYXJndW1lbnRzWzFdLm5leHQgPSBhcmd1bWVudHNbMl1cblxuICAgIHJldHVybiBDaGVja2VyLnJlZ2lzdGVyQ2hlY2sob2JqKVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGNoZWNrcykge1xuICAgIGlmICghY2hlY2tzLmhhc093blByb3BlcnR5KGtleSkpIGNvbnRpbnVlXG5cbiAgICB2YXIgY2hlY2tGbiA9IGNoZWNrc1trZXldXG4gICAgdmFyIHByb3RvID0gQ2hlY2tlci5wcm90b3R5cGVcblxuICAgIGlmICghX3YoaXNGdW5jdGlvbihjaGVja0ZuKSwgJ2NoZWNrc1snICsga2V5ICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24uJykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKCFfdighcHJvdG9ba2V5XSwgJ2NoZWNrIG5hbWUgXCInICsga2V5ICsgJ1wiIGlzIGR1cGxpY2F0ZWQuJykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcHJvdG9ba2V5XSA9IChmdW5jdGlvbiAoY2hlY2tGbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbdGhpcy50YXJnZXRfLCB0aGlzLm5hbWVfXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgdmFyIG1zZyA9IGNoZWNrRm4uYXBwbHkodGhpcywgYXJncylcblxuICAgICAgICB2ZXJpZnkoIW1zZywgbXNnKVxuXG4gICAgICAgIGlmIChjaGVja0ZuLm5leHQpIHtcbiAgICAgICAgICB2YXIgbmV4dCA9IGNoZWNrRm4ubmV4dC5hcHBseSh0aGlzLCBhcmdzKVxuICAgICAgICAgIHJldHVybiBuZXcgQ2hlY2tlcihuZXh0LnRhcmdldCwgbmV4dC5uYW1lLCB0aGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgIH1cbiAgICB9KShjaGVja0ZuKVxuICB9XG5cbiAgTm90Q2hlY2tlci5yZWdpc3RlcihjaGVja3MpXG4gIFBsYW4uX19yZWdpc3RlcihjaGVja3MpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9DaGVja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGRlZXAgZXF1YWznroDljZXlrp7njrBcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogZGVlcCBlcXVhbFxuICpcbiAqIEBwYXJhbSAge2FueX0gbGVmdCDlj4LmlbAxXG4gKiBAcGFyYW0gIHthbnl9IHJpZ2h0IOWPguaVsDJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHN0cmljdCDlpoLmnpzkuLpmYWxzZe+8jOWImT095oiQ56uL5pe25Y2z6L+U5ZuedHJ1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0g5q+U6L6D57uT5p6cXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwgKGxlZnQsIHJpZ2h0LCBzdHJpY3QpIHtcbiAgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICghbGVmdCB8fCAhcmlnaHQgfHwgLy8g6ZKI5a+55YW25Lit5LiA5Liq5pivbnVsbOeahOaDheWGtVxuICAgIHR5cGVvZiBsZWZ0ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnKSB7XG4gICAgLyogZXNsaW50IGVxZXFlcTogMCAqL1xuICAgIHJldHVybiBzdHJpY3QgPyAobGVmdCA9PT0gcmlnaHQpIDogKGxlZnQgPT0gcmlnaHQpXG4gIH1cblxuICBpZiAobGVmdCBpbnN0YW5jZW9mIERhdGUgJiYgcmlnaHQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGxlZnQuZ2V0VGltZSgpID09PSByaWdodC5nZXRUaW1lKClcbiAgfVxuXG4gIC8vIOeUn+aIkOato+WImeihqOi+vuW8j+agh+azqFxuICB2YXIgZ2VuRmxhZ3MgPSBmdW5jdGlvbiAocmV4cCkge1xuICAgIHJldHVybiAocmV4cC5nbG9iYWwgPyAnZycgOiAnJykgKyAocmV4cC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgIChyZXhwLm11bHRpbGluZSA/ICdtJyA6ICcnKSArIChyZXhwLnN0aWNreSA/ICd5JyA6ICcnKVxuICB9XG5cbiAgaWYgKGxlZnQgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmlnaHQgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gbGVmdC50b1N0cmluZygpID09PSByaWdodC50b1N0cmluZygpICYmIGdlbkZsYWdzKGxlZnQpID09PSBnZW5GbGFncyhyaWdodClcbiAgfVxuXG4gIGlmIChsZWZ0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSAhPT0gcmlnaHQuY29uc3RydWN0b3IucHJvdG90eXBlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIga0xlZnQgPSBPYmplY3Qua2V5cyhsZWZ0KVxuICB2YXIga1JpZ2h0ID0gT2JqZWN0LmtleXMocmlnaHQpXG5cbiAgaWYgKGtMZWZ0Lmxlbmd0aCAhPT0ga1JpZ2h0Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAga0xlZnQuc29ydCgpXG4gIGtSaWdodC5zb3J0KClcblxuICBpZiAoIWtMZWZ0LmV2ZXJ5KGZ1bmN0aW9uIChlbCwgaW5kZXgpIHsgcmV0dXJuIGVsID09PSBrUmlnaHRbaW5kZXhdIH0pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICB2YXIgcmV0ID0ga0xlZnQuZXZlcnkoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBlcXVhbChsZWZ0W2tleV0sIHJpZ2h0W2tleV0pXG4gIH0pXG5cbiAgcmV0dXJuIHJldFxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvZXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5omn6KGM5Ye95pWw6L+U5Zue6ZSZ6K+v5raI5oGvXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlIChmbikge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcblxuICB0cnkge1xuICAgIGlmICghZm4uYXBwbHkodGhpcywgYXJncykpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gZm4ubmFtZSB8fCBmbi50b1N0cmluZygpXG4gICAgICByZXR1cm4gbWVzc2FnZVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVyci5tZXNzYWdlXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL2dldEVycm9yTWVzc2FnZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVW5kZWZpbmVkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOajgOafpeaYr+WQpuWMheWQq+WxnuaApyjljIXmi6zljp/lnovpk74pXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG52YXIgaXNFeGlzdCA9IHJlcXVpcmUoJy4uL3V0aWxzL2lzRXhpc3QnKVxuXG52YXIgaXNVbmRlZmluZWQgPSByZXF1aXJlKCdsb2Rhc2gvaXNVbmRlZmluZWQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ290OiBnb3Rcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIG5hbWUgKyAnIGRvZXMgTk9UIGhhdmUgcHJvcGVydHk6ICcgKyBwcmludFN0cmluZyhrZXkpXG59XG5cbmZ1bmN0aW9uIGdvdCAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIChpc0V4aXN0KHRhcmdldCkgJiYgIWlzVW5kZWZpbmVkKHRhcmdldFtrZXldKSkgPyBudWxsIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGtleSlcbn1cblxuZ290Lm5leHQgPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IHRhcmdldFtrZXldLFxuICAgIG5hbWU6IG5hbWUgKyAnLicgKyBrZXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy9nb3QuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBAZmlsZSDoh6rlrprkuYnlsZ7mgKdcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmXHJcblxyXG5mdW5jdGlvbiBkZWYgKHRoYXQsIGtleSwgZ2V0dGVyLCBzZXR0ZXIpIHtcclxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gICAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGF0LCBrZXkpXHJcbiAgICBpZiAocHJvcGVydHkgJiYgcHJvcGVydHkuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJ2lzIE5PVCBhIGNvbmZpZ3VyYWJsZSBwcm9wZXJ0eS4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoYXQsIGtleSwge1xyXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZ2V0dGVyLFxyXG4gICAgc2V0OiBzZXR0ZXJcclxuICB9KVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL2RlZi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlr7nosaHmmK/lkKblrZjlnKhcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxudmFyIGlzTnVsbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bGwnKVxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJylcblxubW9kdWxlLmV4cG9ydHMgPSBpc0V4aXN0XG5cbmZ1bmN0aW9uIGlzRXhpc3QgKG8pIHtcbiAgcmV0dXJuICEoaXNVbmRlZmluZWQobykgfHwgaXNOdWxsKG8pKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvaXNFeGlzdC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmlq3oqIBcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcmlmeVxuXG52YXIgcHJlZml4ID0gJ1tWQUxJREFURS1JT10gRXJyb3I6ICdcblxuZnVuY3Rpb24gdmVyaWZ5IChleHByLCBtZXNzYWdlKSB7XG4gIGlmICghZXhwcikge1xuICAgIHZhciBtc2cgPSBwcmVmaXggKyAoaXNGdW5jdGlvbihtZXNzYWdlKSA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2UpICsgJy4nXG4gICAgdmFyIGVyciA9IG5ldyBUeXBlRXJyb3IobXNnKVxuXG4gICAgZXJyLmlzUGFyYW1DaGVja0Vycm9yID0gdHJ1ZVxuXG4gICAgdmFyIHN0YWNrID0gZXJyLnN0YWNrXG4gICAgdmFyIGxpbmVzID0gc3RhY2sucmVwbGFjZSgvXlR5cGVFcnJvci4rXFxuIHs0fS8sICcnKS5zcGxpdCgnXFxuJykubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGVsLnRyaW0oKVxuICAgIH0pXG5cbiAgICAvKlxuICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGxpbmUpXG4gICAgfSlcbiAgICAqL1xuXG4gICAgZXJyLnBvc2l0aW9uID0gbGluZXNbMl1cbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdXRpbHMvdmVyaWZ5LmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYG51bGxgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdWxsKG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdWxsKHZvaWQgMCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVsbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNOdWxsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzUmVnRXhwID0gcmVxdWlyZSgnLi9fYmFzZUlzUmVnRXhwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1JlZ0V4cCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzUmVnRXhwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgUmVnRXhwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1JlZ0V4cCgvYWJjLyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1JlZ0V4cCgnL2FiYy8nKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1JlZ0V4cCA9IG5vZGVJc1JlZ0V4cCA/IGJhc2VVbmFyeShub2RlSXNSZWdFeHApIDogYmFzZUlzUmVnRXhwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1JlZ0V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDlhaXlj6Plh73mlbBcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBDaGVja2VyID0gcmVxdWlyZSgnLi9DaGVja2VyJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2hlY2tcclxuXHJcbmZ1bmN0aW9uIGNoZWNrICh0YXJnZXQsIG5hbWUpIHtcclxuICByZXR1cm4gbmV3IENoZWNrZXIodGFyZ2V0LCBuYW1lKVxyXG59XHJcblxyXG5jaGVjay5WYWxpZGF0b3IgPSBDaGVja2VyXHJcbmNoZWNrLnJlZ2lzdGVyID0gQ2hlY2tlci5yZWdpc3Rlci5iaW5kKENoZWNrZXIpXHJcbmNoZWNrLnBsYW4gPSBDaGVja2VyLnBsYW5cclxuY2hlY2sudiA9IENoZWNrZXIudlxyXG5cclxuLy8g5YW85a656ICB54mI5pysXHJcbmNoZWNrLkNoZWNrZXIgPSBDaGVja2VyXHJcbmNoZWNrLnJlZ2lzdGVyQ2hlY2sgPSBDaGVja2VyLnJlZ2lzdGVyLmJpbmQoQ2hlY2tlcilcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvY2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5qOA5p+l5piv5ZCm5LiO5Y+C5pWw5Lit55qE5p+Q5LiA5Liq55u4562JXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG52YXIgZXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9lcXVhbCcpXG5cbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvZXF1YWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYW1vbmc6IGFtb25nXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgb3RoZXJzKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgYW1vbmcgJyArIHByaW50U3RyaW5nKG90aGVycylcbn1cblxuZnVuY3Rpb24gYW1vbmcgKHRhcmdldCwgbmFtZSkge1xuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuXG4gIGlmIChsZW4gPD0gMikge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGVxdWFsRm4gPSBhcmd1bWVudHNbbGVuIC0gMV1cblxuICBpZiAobGVuID09PSAzICYmIGlzRnVuY3Rpb24oZXF1YWxGbikpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICghaXNGdW5jdGlvbihlcXVhbEZuKSkge1xuICAgIGVxdWFsRm4gPSBlcXVhbFxuICB9XG5cbiAgdmFyIG90aGVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcblxuICBvdGhlcnMucG9wKClcblxuICByZXR1cm4gb3RoZXJzLnNvbWUoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGVxdWFsRm4odGFyZ2V0LCBlbClcbiAgfSkgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgb3RoZXJzKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy9hbW9uZy5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBhbmTmo4Dmn6VcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBnZXRFcnJvck1lc3NhZ2UgPSByZXF1aXJlKCcuLi91dGlscy9nZXRFcnJvck1lc3NhZ2UnKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGFuZDogYW5kXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgbm8sIGVycm9yTXNnKSB7XG4gIHJldHVybiBuYW1lICsgJyBkb2VzIE5PVCBwYXNzIHRoZSAnICsgbm8gKyAnc3QvcmQvdGggb2YgYW4gXCJBTkRcIiBjaGVjaywgZGV0YWlsOiBbJyArIGVycm9yTXNnICsgJ10nXG59XG5cbi8qKlxuICog5L2/55So4oCc5LiU4oCd5YWz57O757uE5ZCI5qOA5p+l5Ye95pWw5oiWcGxhblxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258UGxhbn0gLi4ueCDlh73mlbDmiJZQbGFu5a6e5L6L77yM5Y+v5Lul5Li65aSa5LiqXG4gKiBAcmV0dXJuIHtudWxsfFN0cmluZ30g6ZSZ6K+v5raI5oGvXG4gKi9cbmZ1bmN0aW9uIGFuZCAodGFyZ2V0LCBuYW1lLCB4KSB7XG4gIHZhciBmbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gIHZhciBsZW4gPSBmbnMubGVuZ3RoXG4gIHZhciBlcnJvck1zZyA9IG51bGxcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgdmFyIGZuID0gZm5zW2ldXG5cbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcbiAgICAgIGVycm9yTXNnID0gZ2V0RXJyb3JNZXNzYWdlKGZuLCB0YXJnZXQpXG4gICAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgZXJyb3JNc2cgPSBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgaSwgZXJyb3JNc2cpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmbi5fX2lzUGxhbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4uX19leGVjKHRoaXMpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yTXNnID0gbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGksIGZuLl9fcGF0aCgpKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdihmYWxzZSwgJ0JhZCBwYXJhbTogYXJndW1lbnRbJyArIGkgKyAnXSBpcyBOT1QgYSBmdW5jdGlvbiBvciBwbGFuLicpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVycm9yTXNnXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL2FuZC5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmo4Dmn6XmmK/lkKbnm7jnrYlcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBkZWZhdWx0RXF1YWwgPSByZXF1aXJlKCcuLi91dGlscy9lcXVhbCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBlcXVhbDogZXF1YWwsXG4gIGVxOiBlcXVhbFxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG90aGVyKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UIGVxdWFsIHRvICcgKyBwcmludFN0cmluZyhvdGhlcilcbn1cblxuZnVuY3Rpb24gZXF1YWwgKHRhcmdldCwgbmFtZSwgb3RoZXIsIGVxdWFsRm4pIHtcbiAgaWYgKCFlcXVhbEZuKSBlcXVhbEZuID0gZGVmYXVsdEVxdWFsXG4gIHJldHVybiBlcXVhbEZuKHRhcmdldCwgb3RoZXIpID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG90aGVyKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy9lcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlpKfkuo7nrYnkuo5cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcblxudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJylcblxudmFyIGVudHJpZXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXNcblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiAnICsgblxufVxuXG5mdW5jdGlvbiBlcXVhbE9yR3JlYXRlclRoYW4gKHRhcmdldCwgbmFtZSwgbikge1xuICBpZiAoX3YoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyLicpKSB7XG4gICAgcmV0dXJuIHRhcmdldCA+PSBuID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG4pXG4gIH1cbn1cblxuZW50cmllcy5lcXVhbE9yR3JlYXRlclRoYW4gPSBlcXVhbE9yR3JlYXRlclRoYW5cbmVudHJpZXMuZWd0ID0gZXF1YWxPckdyZWF0ZXJUaGFuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL2VxdWFsT3JHcmVhdGVyVGhhbi5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlsI/kuo7nrYnkuo5cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcblxudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJylcblxudmFyIGVudHJpZXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXNcblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UIGVxdWFsIG9yIGxlc3MgdGhhbiAnICsgblxufVxuXG5mdW5jdGlvbiBlcXVhbE9yTGVzc1RoYW4gKHRhcmdldCwgbmFtZSwgbikge1xuICBpZiAoX3YoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyLicpKSB7XG4gICAgcmV0dXJuIHRhcmdldCA8PSBuID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG4pXG4gIH1cbn1cblxuZW50cmllcy5lcXVhbE9yTGVzc1RoYW4gPSBlcXVhbE9yTGVzc1RoYW5cbmVudHJpZXMuZWx0ID0gZXF1YWxPckxlc3NUaGFuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL2VxdWFsT3JMZXNzVGhhbi5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlpKfkuo5cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcblxudmFyIGlzTnVtYmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzTnVtYmVyJylcblxudmFyIGVudHJpZXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXNcblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBuKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgZ3JlYXRlciB0aGFuICcgKyBuXG59XG5cbmZ1bmN0aW9uIGdyZWF0ZXJUaGFuICh0YXJnZXQsIG5hbWUsIG4pIHtcbiAgaWYgKF92KGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlci4nKSkge1xuICAgIHJldHVybiB0YXJnZXQgPiBuID8gdW5kZWZpbmVkIDogbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIG4pXG4gIH1cbn1cblxuZW50cmllcy5ncmVhdGVyVGhhbiA9IGdyZWF0ZXJUaGFuXG5lbnRyaWVzLmd0ID0gZ3JlYXRlclRoYW5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvZ3JlYXRlclRoYW4uanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5L2/55SoaGFzT3duUHJvcGVydHnmo4Dmn6Xlr7nosaHmmK/lkKbljIXlkKvlsZ7mgKdcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBpc0V4aXN0ID0gcmVxdWlyZSgnLi4vdXRpbHMvaXNFeGlzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBoYXM6IGhhcyxcbiAgaGFzT3duOiBoYXNcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBrZXkpIHtcbiAgcmV0dXJuIG5hbWUgKyAnIGRvZXMgTk9UIGhhdmUgb3duIHByb3BlcnR5OiAnICsgcHJpbnRTdHJpbmcoa2V5KVxufVxuXG5mdW5jdGlvbiBoYXMgKHRhcmdldCwgbmFtZSwga2V5KSB7XG4gIHJldHVybiAoaXNFeGlzdCh0YXJnZXQpICYmIHRhcmdldC5oYXNPd25Qcm9wZXJ0eSAmJiB0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBrZXkpXG59XG5cbmhhcy5uZXh0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwga2V5KSB7XG4gIHJldHVybiB7XG4gICAgdGFyZ2V0OiB0YXJnZXRba2V5XSxcbiAgICBuYW1lOiBuYW1lICsgJy4nICsga2V5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvaGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOajgOafpeaJgOWxnueahOexuyjkvb/nlKhpbnN0YW5jZW9m5YWz6ZSu5a2X5Yik5patKVxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIF92ID0gcmVxdWlyZSgnLi4vdXRpbHMvX3YnKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluc3RhbmNlT2Y6IGluc3RhbmNlT2Zcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBjdG9yKSB7XG4gIHZhciBjdG9yTmFtZSA9IGN0b3IubmFtZSB8fCAnW3Vua25vd25dJ1xuICByZXR1cm4gbmFtZSArICcgaXMgTk9UIGFuIGluc3RhbmNlIG9mIGdpdmVuIGNvbnN0cnVjdG9yOiAnICsgY3Rvck5hbWVcbn1cblxuZnVuY3Rpb24gaW5zdGFuY2VPZiAodGFyZ2V0LCBuYW1lLCBjdG9yKSB7XG4gIGlmIChfdihpc0Z1bmN0aW9uKGN0b3IpLCAnQmFkIHBhcmFtOiBjdG9yIGlzIE5PVCBhIGZ1bmN0aW9uLicpKSB7XG4gICAgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBjdG9yKSA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBjdG9yKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL2luc3RhbmNlT2YuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5Y+C5pWw57G75Z6L5qOA5p+l5ZmoXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgZmlyc3RVcHBlckNhc2UgPSByZXF1aXJlKCcuLi91dGlscy9maXJzdFVwcGVyQ2FzZScpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG5cbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FyZ3VtZW50cycpXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5JylcbnZhciBpc0FycmF5QnVmZmVyID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXlCdWZmZXInKVxudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXlMaWtlJylcbnZhciBpc0FycmF5TGlrZU9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdCcpXG52YXIgaXNCb29sZWFuID0gcmVxdWlyZSgnbG9kYXNoL2lzQm9vbGVhbicpXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNCdWZmZXInKVxudmFyIGlzRGF0ZSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0RhdGUnKVxudmFyIGlzRWxlbWVudCA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VsZW1lbnQnKVxudmFyIGlzRW1wdHkgPSByZXF1aXJlKCdsb2Rhc2gvaXNFbXB0eScpXG52YXIgaXNFcnJvciA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Vycm9yJylcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKVxudmFyIGlzTGVuZ3RoID0gcmVxdWlyZSgnbG9kYXNoL2lzTGVuZ3RoJylcbnZhciBpc01hcCA9IHJlcXVpcmUoJ2xvZGFzaC9pc01hcCcpXG52YXIgaXNOYXRpdmUgPSByZXF1aXJlKCdsb2Rhc2gvaXNOYXRpdmUnKVxudmFyIGlzTmlsID0gcmVxdWlyZSgnbG9kYXNoL2lzTmlsJylcbnZhciBpc051bGwgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdWxsJylcbnZhciBpc051bWJlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bWJlcicpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKVxudmFyIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJ2xvZGFzaC9pc09iamVjdExpa2UnKVxudmFyIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNQbGFpbk9iamVjdCcpXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCdsb2Rhc2gvaXNSZWdFeHAnKVxudmFyIGlzU2V0ID0gcmVxdWlyZSgnbG9kYXNoL2lzU2V0JylcbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpXG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdsb2Rhc2gvaXNTeW1ib2wnKVxudmFyIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJ2xvZGFzaC9pc1R5cGVkQXJyYXknKVxudmFyIGlzVW5kZWZpbmVkID0gcmVxdWlyZSgnbG9kYXNoL2lzVW5kZWZpbmVkJylcbnZhciBpc1dlYWtNYXAgPSByZXF1aXJlKCdsb2Rhc2gvaXNXZWFrTWFwJylcbnZhciBpc1dlYWtTZXQgPSByZXF1aXJlKCdsb2Rhc2gvaXNXZWFrU2V0JylcblxudmFyIGlzRXhpc3QgPSBmdW5jdGlvbiBpc0V4aXN0IChvKSB7XG4gIHJldHVybiAhKGlzVW5kZWZpbmVkKG8pIHx8IGlzTnVsbChvKSlcbn1cblxudmFyIHN1cHBvcnRNZXRob2RzID0ge1xuICBpc0FyZ3VtZW50czogaXNBcmd1bWVudHMsXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgaXNBcnJheUxpa2VPYmplY3Q6IGlzQXJyYXlMaWtlT2JqZWN0LFxuICBpc0Jvb2xlYW46IGlzQm9vbGVhbixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNFbGVtZW50OiBpc0VsZW1lbnQsXG4gIGlzRW1wdHk6IGlzRW1wdHksXG4gIGlzRXJyb3I6IGlzRXJyb3IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzTGVuZ3RoOiBpc0xlbmd0aCxcbiAgaXNNYXA6IGlzTWFwLFxuICBpc05hdGl2ZTogaXNOYXRpdmUsXG4gIGlzTmlsOiBpc05pbCxcbiAgaXNOdWxsOiBpc051bGwsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc09iamVjdExpa2U6IGlzT2JqZWN0TGlrZSxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICBpc1NldDogaXNTZXQsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNTeW1ib2w6IGlzU3ltYm9sLFxuICBpc1R5cGVkQXJyYXk6IGlzVHlwZWRBcnJheSxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc1dlYWtNYXA6IGlzV2Vha01hcCxcbiAgaXNXZWFrU2V0OiBpc1dlYWtTZXQsXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzRXhpc3Q6IGlzRXhpc3Rcbn1cblxudmFyIGVudHJpZXMgPSB7fVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVudHJpZXNcblxuZnVuY3Rpb24gY2hlY2tTdHJpbmdUeXBlICh0eXBlLCB0YXJnZXQpIHtcbiAgdmFyIGtleSA9ICdpcycgKyBmaXJzdFVwcGVyQ2FzZSh0eXBlKVxuXG4gIHZhciBmbiA9IHN1cHBvcnRNZXRob2RzW2tleV1cblxuICBpZiAoX3Yoc3VwcG9ydE1ldGhvZHMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBpc0Z1bmN0aW9uKGZuKSxcbiAgICAnQmFkIHBhcmFtOiAnICsgdHlwZSArICcgaXMgTk9UIGEgbGVnYWwgdHlwZS4nKSkge1xuICAgIHJldHVybiBmbih0YXJnZXQpXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZnVuY3Rpb24gY2hlY2tDbGFzc1R5cGUgKHR5cGUsIHRhcmdldCkge1xuICByZXR1cm4gdGFyZ2V0IGluc3RhbmNlb2YgdHlwZVxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIHR5cGVzKSB7XG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpJyArICcgaXMgTk9UICcgKyBwcmludFN0cmluZyh0eXBlcylcbn1cblxuZnVuY3Rpb24gaXMgKHRhcmdldCwgbmFtZSkge1xuICB2YXIgdHlwZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gIHZhciBsZW4gPSB0eXBlcy5sZW5ndGhcbiAgdmFyIHllcyA9IGZhbHNlXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBrZXkgPSB0eXBlc1tpXVxuXG4gICAgaWYgKCFfdihpc1N0cmluZyhrZXkpIHx8IGlzRnVuY3Rpb24oa2V5KSxcbiAgICAgICdCYWQgcGFyYW06IGFyZ3VtZW50c1snICsgaSArICddIGlzIE5PVCBzdHJpbmcgb3IgZnVuY3Rpb24uJykpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKGlzU3RyaW5nKGtleSkpIHtcbiAgICAgIHllcyA9IGNoZWNrU3RyaW5nVHlwZShrZXksIHRhcmdldClcbiAgICB9IGVsc2Uge1xuICAgICAgeWVzID0gY2hlY2tDbGFzc1R5cGUoa2V5LCB0YXJnZXQpXG4gICAgfVxuXG4gICAgaWYgKHllcykgYnJlYWtcbiAgfVxuXG4gIHJldHVybiB5ZXMgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgdHlwZXMpXG59XG5cbmVudHJpZXMuaXMgPSBpc1xuXG5mdW5jdGlvbiB4eHhNZXNzYWdlIChrZXksIHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gbmFtZSArICcoJyArIHByaW50U3RyaW5nKHRhcmdldCkgKyAnKScgKyAnIGlzIE5PVCBhKG4pICcgKyBrZXkucmVwbGFjZSgvXmlzLywgJycpLnRvTG93ZXJDYXNlKClcbn1cblxuLy8gaXNYWFjmlrnms5VcbmZvciAodmFyIGtleSBpbiBzdXBwb3J0TWV0aG9kcykge1xuICB2YXIgZm4gPSBzdXBwb3J0TWV0aG9kc1trZXldXG5cbiAgaWYgKCFpc0Z1bmN0aW9uKGZuKSkge1xuICAgIGNvbnRpbnVlXG4gIH1cblxuICAoZnVuY3Rpb24gKG1ldGhvZE5hbWUsIG1ldGhvZCkge1xuICAgIGVudHJpZXNbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbiAodGFyZ2V0LCBuYW1lKSB7XG4gICAgICByZXR1cm4gbWV0aG9kKHRhcmdldCkgPyB1bmRlZmluZWQgOiB4eHhNZXNzYWdlKG1ldGhvZE5hbWUsIHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJylcbiAgICB9XG5cbiAgICBlbnRyaWVzW21ldGhvZE5hbWVdLl9uYW1lID0gbWV0aG9kTmFtZVxuICB9KShrZXksIGZuKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy9pcy5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDmmK/lkKbmmK/lhYPntKDkuLrnibnlrprnsbvlnovnmoTmlbDnu4RcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBwcmludFN0cmluZyA9IHJlcXVpcmUoJy4uL3V0aWxzL3ByaW50U3RyaW5nJylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKVxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG52YXIgQ2hlY2tlciA9IHJlcXVpcmUoJy4uL0NoZWNrZXInKVxuXG52YXIgcHJlZml4ID0gJ1tWQUxJREFURS1JT10gRXJyb3I6ICdcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXlPZjogaXNBcnJheU9mXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgZXJyb3JNc2cpIHtcbiAgaWYgKCFlcnJvck1zZykge1xuICAgIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpIGlzIE5PVCBhbiBhcnJheSdcbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcodGFyZ2V0KSArICcpIGlzIE5PVCBhbiBhcnJheSBvZiBzcGVjaWZpZWQgdHlwZTogJyArIGVycm9yTXNnXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlPZiAodGFyZ2V0LCBuYW1lLCBlbGVtZW50Q2hlY2tlcikge1xuICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgIHJldHVybiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJylcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oZWxlbWVudENoZWNrZXIpKSB7XG4gICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWxlbWVudENoZWNrZXIoZWwpXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAoZWxlbWVudENoZWNrZXIuX19pc1BsYW4pIHtcbiAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgdGhhdCA9IG5ldyBDaGVja2VyKGVsLCBuYW1lICsgJ1snICsgaW5kZXggKyAnXScpXG4gICAgICAgIGVsZW1lbnRDaGVja2VyLl9fZXhlYyh0aGF0KVxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgX3YoZmFsc2UsICdlbGVtZW50Q2hlY2tlciBpcyBOT1QgYSBmdW5jdGlvbiBvciBwbGFuLicpXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbWVzc2FnZSh0YXJnZXQsIG5hbWUgfHwgJ3BhcmFtZXRlcicsIGVyci5tZXNzYWdlLnJlcGxhY2UocHJlZml4LCAnJykpXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvaXNBcnJheU9mLmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOWIpOaWreaVsOe7hOmVv+W6pijkuZ/ljIXmi6zku7/mlbDnu4QpXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgZ290Q2hlY2sgPSByZXF1aXJlKCcuL2dvdCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBsZW5ndGg6IGxlbmd0aFxufVxuXG5mdW5jdGlvbiBsZW5ndGggKHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gZ290Q2hlY2suZ290KHRhcmdldCwgbmFtZSwgJ2xlbmd0aCcpXG59XG5cbmxlbmd0aC5uZXh0ID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSkge1xuICByZXR1cm4gZ290Q2hlY2suZ290Lm5leHQodGFyZ2V0LCBuYW1lLCAnbGVuZ3RoJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvbGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOWwj+S6jlxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIF92ID0gcmVxdWlyZSgnLi4vdXRpbHMvX3YnKVxuXG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKVxuXG52YXIgZW50cmllcyA9IHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZW50cmllc1xuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG4pIHtcbiAgcmV0dXJuIG5hbWUgKyAnIGlzIE5PVCBsZXNzIHRoYW4gJyArIG5cbn1cblxuZnVuY3Rpb24gbGVzc1RoYW4gKHRhcmdldCwgbmFtZSwgbikge1xuICBpZiAoX3YoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyLicpKSB7XG4gICAgcmV0dXJuIHRhcmdldCA8IG4gPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgbilcbiAgfVxufVxuXG5lbnRyaWVzLmxlc3NUaGFuID0gbGVzc1RoYW5cbmVudHJpZXMubHQgPSBsZXNzVGhhblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy9sZXNzVGhhbi5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBtYXDlh73mlbBcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcblxudmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFwOiBtYXBcbn1cblxuLyoqXG4gKiDkvb/nlKhtYXDlh73mlbDovazljJblr7nosaHvvIzlubbov5Tlm57nlKjovazljJbov4fnmoTlr7nosaHmnoTpgKDnmoRDaGVja2VyXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IOi9rOWMluWHveaVsO+8jOWmguaenOS4uuWtl+espuS4su+8jOWImeiwg+eUqOW+heajgOafpeWvueixoeWQjOWQjeaWueazle+8jOWQjumdoueahOWPguaVsOS8muS8oOe7meebuOW6lOaWueazlVxuICogQHJldHVybiB7dW5kZWZpbmVkfVxuICovXG5mdW5jdGlvbiBtYXAgKHRhcmdldCwgbmFtZSwgZm4pIHtcbiAgcmV0dXJuIHZvaWQgMFxufVxuXG5tYXAubmV4dCA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGZuKSB7XG4gIHZhciBtYXBUYXJnZXRcblxuICB0cnkge1xuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgbWFwVGFyZ2V0ID0gZm4odGFyZ2V0KVxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZm4pKSB7XG4gICAgICB2YXIgZiA9IHRhcmdldFtmbl1cbiAgICAgIGlmIChfdihpc0Z1bmN0aW9uKGYpLCAnQmFkIHBhcmFtOiB0aGUgb2JqIGhhcyBOT1QgZ290IGEgbWV0aG9kIGNhbGxlZCcgKyBmbiArICcuJykpIHtcbiAgICAgICAgbWFwVGFyZ2V0ID0gZi5hcHBseSh0YXJnZXQsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMykpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIF92KGZhbHNlLCAnQmFkIHBhcmFtOiBmbiBpcyBpbGxlZ2FsLicpXG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfdihmYWxzZSwgZXJyLm1lc3NhZ2UpXG4gIH1cblxuICB2YXIgbWFwTmFtZSA9IG5hbWUgKyAnPT4nICsgKGlzU3RyaW5nKGZuKSA/IGZuIDogKGZuLm5hbWUgfHwgJ1tBbm9ueW1vdXMgRnVuY3Rpb25dJykpXG5cbiAgcmV0dXJuIHtcbiAgICB0YXJnZXQ6IG1hcFRhcmdldCxcbiAgICBuYW1lOiBtYXBOYW1lXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOajgOafpeaYr+WQpuespuWQiOato+WImeihqOi+vuW8j1xuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIF92ID0gcmVxdWlyZSgnLi4vdXRpbHMvX3YnKVxuXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCdsb2Rhc2gvaXNSZWdFeHAnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWF0Y2g6IG1hdGNoXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgcmV4cCkge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgbWF0Y2ggcmVnZXhwOiAvJyArIHJleHAuc291cmNlICsgJy8nXG59XG5cbmZ1bmN0aW9uIG1hdGNoICh0YXJnZXQsIG5hbWUsIHJleHApIHtcbiAgaWYgKF92KGlzUmVnRXhwKHJleHApLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIHJlZ2V4cC4nKSkge1xuICAgIHJldHVybiByZXhwLnRlc3QodGFyZ2V0KSA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCByZXhwKVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL21hdGNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOS9v+eUqOiHquWumuS5ieWHveaVsOaIlnBsYW7mo4Dmn6VcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBnZXRFcnJvck1lc3NhZ2UgPSByZXF1aXJlKCcuLi91dGlscy9nZXRFcnJvck1lc3NhZ2UnKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1lZXQ6IG1lZXRcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAodGFyZ2V0LCBuYW1lLCBlcnJvck1zZykge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgcGFzcyB0aGUgY2hlY2ssIGRldGFpbDogeycgKyBlcnJvck1zZyArICd9J1xufVxuXG4vKipcbiAqIOS9v+eUqOiHquWumuS5ieWHveaVsOaIlnBsYW7mo4Dmn6VcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBsYW59IGZuIOajgOafpeWHveaVsOaIlnBsYW7vvIzlj4LmlbDkuLrlvoXmo4Dmn6Xlr7nosaFcbiAqIEByZXR1cm4ge3VuZGVmaW5lZHxTdHJpbmd9IOmUmeivr+a2iOaBr1xuICovXG5mdW5jdGlvbiBtZWV0ICh0YXJnZXQsIG5hbWUsIGZuKSB7XG4gIHZhciBlcnJvck1zZ1xuXG4gIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xuICAgIGVycm9yTXNnID0gZ2V0RXJyb3JNZXNzYWdlKGZuLCB0YXJnZXQpXG4gIH0gZWxzZSBpZiAoZm4uX19pc1BsYW4pIHtcbiAgICB0cnkge1xuICAgICAgZm4uX19leGVjKHRoaXMpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3JNc2cgPSBmbi5fX3BhdGgoKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBfdihmYWxzZSwgJ0JhZCBwYXJhbTogZm4gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcGxhbi4nKVxuICB9XG5cbiAgcmV0dXJuICFlcnJvck1zZyA/IG51bGwgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgZXJyb3JNc2cpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL21lZXQuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogb3Lmo4Dmn6VcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBfdiA9IHJlcXVpcmUoJy4uL3V0aWxzL192JylcbnZhciBnZXRFcnJvck1lc3NhZ2UgPSByZXF1aXJlKCcuLi91dGlscy9nZXRFcnJvck1lc3NhZ2UnKVxuXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9yOiBvclxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG5vLCBlcnJvckRldGFpbCkge1xuICByZXR1cm4gbmFtZSArICcgZG9lcyBOT1QgcGFzcyB0aGUgJyArXG4gICAgbm8gKyAnc3QvcmQvdGggb2YgYW4gXCJPUlwiIGNoZWNrLCBkZXRhaWw6IFsnICtcbiAgICBlcnJvckRldGFpbC5tYXAoZnVuY3Rpb24gKGVsLCBpbmRleCkgeyByZXR1cm4gaW5kZXggKyAnOiAnICsgZWwgfSkuam9pbignOyAnKSArICddJ1xufVxuXG4vKipcbiAqIOS9v+eUqOKAnOaIluKAneWFs+ezu+e7hOWQiOajgOafpeWHveaVsOaIlnBsYW5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBsYW59IC4uLngg5Ye95pWw5oiWUGxhbuWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxuICogQHJldHVybiB7dW5kZWZpbmVkfFN0cmluZ30g6ZSZ6K+v5raI5oGvXG4gKi9cbmZ1bmN0aW9uIG9yICh0YXJnZXQsIG5hbWUsIHgpIHtcbiAgdmFyIGZucyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgdmFyIGxlbiA9IGZucy5sZW5ndGhcbiAgdmFyIGVycm9yRGV0YWlsID0gW11cbiAgdmFyIGVycm9yQ291bnQgPSAwXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciBmbiA9IGZuc1tpXVxuXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICB2YXIgZXJyb3JNc2cgPSBnZXRFcnJvck1lc3NhZ2UoZm4sIHRhcmdldClcbiAgICAgIGlmIChlcnJvck1zZykge1xuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGVycm9yTXNnKVxuICAgICAgICBlcnJvckNvdW50KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9IGVsc2UgaWYgKGZuLl9faXNQbGFuKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbi5fX2V4ZWModGhpcylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGZuLl9fcGF0aCgpKVxuICAgICAgICBlcnJvckNvdW50KytcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgYnJlYWtcbiAgICB9IGVsc2Uge1xuICAgICAgX3YoZmFsc2UsICdCYWQgcGFyYW06IGFyZ3VtZW50WycgKyBpICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcGxhbi4nKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlcnJvckNvdW50IDwgbGVuID8gbnVsbCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lIHx8ICdwYXJhbWV0ZXInLCBlcnJvckRldGFpbClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3ZhbGlkYXRvcnMvb3IuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5bi455So5q2j5YiZ6KGo6L6+5byP5qOA5p+lXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG5cbm1vZHVsZS5leHBvcnRzID0ge31cblxudmFyIHJleHBzID0ge1xuICBFbWFpbDogL14oW2EtejAtOV8uLV0rKUAoW1xcZGEtei4tXSspXFwuKFthLXouXXsyLDZ9KSQvLFxuICBVUkw6IC9eKGh0dHBzPzpcXC9cXC8pPyhbXFxkYS16Li1dKylcXC4oW2Etei5dezIsNn0pKFsvXFx3IC4tXSopKlxcLz8kLyxcbiAgSVA6IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJC9cbiAgLy8gVE9ETzogYnVnZml4XG4gIC8vIEhUTUxUYWc6IC9ePChbYS16XSspKFtePF0rKSooPzo+KC4qKTxcXC9cXDE+fFxccytcXC8+KSQvXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgcGF0dGVybk5hbWUpIHtcbiAgcmV0dXJuIG5hbWUgKyAnKCcgKyBwcmludFN0cmluZyh0YXJnZXQpICsgJykgZG9lcyBOT1QgbWF0Y2ggcGF0dGVybiAnICsgcGF0dGVybk5hbWVcbn1cblxuZnVuY3Rpb24gcGF0dGVybkNoZWNrICh0YXJnZXQsIG5hbWUsIHBhdHRlcm4sIHBhdHRlcm5OYW1lKSB7XG4gIHZhciBtYXRjaCA9IHBhdHRlcm4udGVzdCh0YXJnZXQpXG4gIHJldHVybiBtYXRjaCA/IHVuZGVmaW5lZCA6IG1lc3NhZ2UodGFyZ2V0LCBuYW1lLCBwYXR0ZXJuTmFtZSlcbn1cblxuZm9yICh2YXIga2V5IGluIHJleHBzKSB7XG4gIGlmICghcmV4cHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIGNvbnRpbnVlXG4gIH1cblxuICBtb2R1bGUuZXhwb3J0c1snbWF0Y2gnICsga2V5XSA9IChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUpIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuQ2hlY2sodGFyZ2V0LCBuYW1lLCByZXhwc1trZXldLCBrZXkpXG4gICAgfVxuICB9KShrZXkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL3BhdHRlcm5zLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIOajgOafpeaYr+WQpuebuOWQjFxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIHByaW50U3RyaW5nID0gcmVxdWlyZSgnLi4vdXRpbHMvcHJpbnRTdHJpbmcnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2FtZTogc2FtZVxufVxuXG5mdW5jdGlvbiBtZXNzYWdlICh0YXJnZXQsIG5hbWUsIG90aGVyKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgdGhlIHNhbWUgYXMgJyArIHByaW50U3RyaW5nKG90aGVyKVxufVxuXG4vKipcbiAqIOajgOafpeaYr+WQpuebuOWQjCjkvb/nlKg9PT3liKTmlq0pXG4gKlxuICogQHBhcmFtIHthbnl9IG90aGVyIOavlOi+g+eahOWvueixoVxuICogQHJldHVybnMge3VuZGVmaW5lZHxTdHJpbmd9IOmUmeivr+a2iOaBr1xuICovXG5mdW5jdGlvbiBzYW1lICh0YXJnZXQsIG5hbWUsIG90aGVyKSB7XG4gIHJldHVybiAodGFyZ2V0ID09PSBvdGhlcikgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgb3RoZXIpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi92YWxpZGF0b3JzL3NhbWUuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog5Yik5pat5piv5ZCm5Zyo5Yy66Ze05YaFXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG52YXIgX3YgPSByZXF1aXJlKCcuLi91dGlscy9fdicpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9wcmludFN0cmluZycpXG5cbi8vIHZhciBpc0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXknKVxudmFyIGlzU3RyaW5nID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHdpdGhpbjogd2l0aGluXG59XG5cbnZhciByZXhwUmFuZ2UgPSAvXihbKFtdKShbLStdP1tcXGQuXSspLFxccyooWy0rXT9bXFxkLl0rKShbXFxdKV0pJC9cbnZhciBjYWNoZSA9IHt9XG5cbi8vIOagueaNruaVsOWtpuihqOi+vuW8j+eUn+aIkOWIpOaWreWHveaVsFxuZnVuY3Rpb24gZ2VuUmFuZ2VGbiAocmFuZ2UpIHtcbiAgdmFyIGZuID0gY2FjaGVbcmFuZ2VdXG5cbiAgaWYgKGZuKSByZXR1cm4gZm5cblxuICBpZiAoIV92KGlzU3RyaW5nKHJhbmdlKSxcbiAgICAnQmFkIHBhcmFtOiByYW5nZSBpcyBOT1Qgc3RyaW5nLicpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHZhciBtYXRjaCA9IHJleHBSYW5nZS5leGVjKHJhbmdlKVxuXG4gIGlmICghX3YobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID09PSA1LFxuICAgICdCYWQgcGFyYW06IGJhZCByYW5nZSBzdHJpbmc6ICcgKyByYW5nZSArICcuJykpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgb3AxID0gKG1hdGNoWzFdID09PSAnWycpID8gJz49JyA6ICc+J1xuICAgIHZhciBvcDIgPSAobWF0Y2hbMl0gPT09ICddJykgPyAnPD0nIDogJzwnXG4gICAgdmFyIGxvd2VyQm91bmQgPSBwYXJzZUZsb2F0KG1hdGNoWzJdKVxuICAgIHZhciBoaWdoZXJCb3VuZCA9IHBhcnNlRmxvYXQobWF0Y2hbM10pXG5cbiAgICB2YXIgZm5Tb3VyY2UgPSAoJ3JldHVybiAobiAkb3AxICRsb3dlckJvdW5kKSAmJiAobiAkb3AyICRoaWdoZXJCb3VuZCk7JylcbiAgICAgIC5yZXBsYWNlKCckb3AxJywgb3AxKVxuICAgICAgLnJlcGxhY2UoJyRsb3dlckJvdW5kJywgbG93ZXJCb3VuZClcbiAgICAgIC5yZXBsYWNlKCckb3AyJywgb3AyKVxuICAgICAgLnJlcGxhY2UoJyRoaWdoZXJCb3VuZCcsIGhpZ2hlckJvdW5kKVxuXG4gICAgLyogZXNsaW50IG5vLW5ldy1mdW5jOiAwICovXG4gICAgZm4gPSBjYWNoZVtyYW5nZV0gPSBuZXcgRnVuY3Rpb24oWyduJ10sIGZuU291cmNlKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZuXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKHRhcmdldCwgbmFtZSwgcmFuZ2VzKSB7XG4gIHJldHVybiBuYW1lICsgJyBpcyBOT1QgaW4gcmFuZ2Uocyk6ICcgKyBwcmludFN0cmluZyhyYW5nZXMpXG59XG5cbi8qKlxuICog5qOA5p+l5piv5ZCm5bGe5LqO5p+Q5Liq5Yy66Ze0XG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXk8U3RyaW5nPn0gLi4ucmFuZ2VzIOWMuumXtOWtl+espuS4su+8jOW9ouWmglsxLDIpLCDlj6/ku6XkuLrlpJrkuKpcbiAqIEByZXR1cm4ge3VuZGVmaW5lZHxTdHJpbmd9IOmUmeivr+a2iOaBr1xuICovXG5mdW5jdGlvbiB3aXRoaW4gKHRhcmdldCwgbmFtZSkge1xuICB2YXIgcmFuZ2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICB2YXIgbGVuID0gcmFuZ2VzLmxlbmd0aFxuXG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciB5ZXMgPSBmYWxzZVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgcmFuZ2UgPSByYW5nZXNbaV1cbiAgICB2YXIgZm4gPSBnZW5SYW5nZUZuKHJhbmdlKVxuXG4gICAgaWYgKGZuKSB7XG4gICAgICB5ZXMgPSBmbih0YXJnZXQpXG4gICAgICBpZiAoeWVzKSBicmVha1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB5ZXMgPyB1bmRlZmluZWQgOiBtZXNzYWdlKHRhcmdldCwgbmFtZSB8fCAncGFyYW1ldGVyJywgcmFuZ2VzKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvdmFsaWRhdG9ycy93aXRoaW4uanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiDlr7zlh7rlhaXlj6NcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBjaGVjayA9IHJlcXVpcmUoJy4vbGliL2NoZWNrJylcclxudmFyIENoZWNrZXIgPSByZXF1aXJlKCcuL2xpYi9DaGVja2VyJylcclxuXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9hbW9uZycpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvYW5kJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9lcXVhbCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvZXF1YWxPckdyZWF0ZXJUaGFuJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9lcXVhbE9yTGVzc1RoYW4nKSlcclxuQ2hlY2tlci5yZWdpc3RlcihyZXF1aXJlKCcuL2xpYi92YWxpZGF0b3JzL2dvdCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvZ3JlYXRlclRoYW4nKSlcclxuQ2hlY2tlci5yZWdpc3RlcihyZXF1aXJlKCcuL2xpYi92YWxpZGF0b3JzL2hhcycpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvaW5zdGFuY2VPZicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvaXMnKSlcclxuQ2hlY2tlci5yZWdpc3RlcihyZXF1aXJlKCcuL2xpYi92YWxpZGF0b3JzL2lzQXJyYXlPZicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvbGVuZ3RoJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9sZXNzVGhhbicpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvbWFwJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9tYXRjaCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvbWVldCcpKVxyXG5DaGVja2VyLnJlZ2lzdGVyKHJlcXVpcmUoJy4vbGliL3ZhbGlkYXRvcnMvb3InKSlcclxuQ2hlY2tlci5yZWdpc3RlcihyZXF1aXJlKCcuL2xpYi92YWxpZGF0b3JzL3BhdHRlcm5zJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy9zYW1lJykpXHJcbkNoZWNrZXIucmVnaXN0ZXIocmVxdWlyZSgnLi9saWIvdmFsaWRhdG9ycy93aXRoaW4nKSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2hlY2tcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiDlkKblrprmo4Dmn6XlmahcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciB2ZXJpZnkgPSByZXF1aXJlKCcuL3V0aWxzL3ZlcmlmeScpXG52YXIgcHJpbnRTdHJpbmcgPSByZXF1aXJlKCcuL3V0aWxzL3ByaW50U3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBOb3RDaGVja2VyXG5cbi8qKlxuICog5ZCm5a6a5qOA5p+l5ZmoKOWvuUNoZWNrZXLnmoTmr4/kuKrmo4Dmn6Xmlrnms5Xlj5bigJzpnZ7igJ0pXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0NoZWNrZXJ9IGNoZWNrZXJcbiAqL1xuZnVuY3Rpb24gTm90Q2hlY2tlciAoY2hlY2tlcikge1xuICB0aGlzLmNoZWNrZXJfID0gY2hlY2tlclxufVxuXG5Ob3RDaGVja2VyLnJlZ2lzdGVyID0gZnVuY3Rpb24gKGNoZWNrcykge1xuICBmb3IgKHZhciBrZXkgaW4gY2hlY2tzKSB7XG4gICAgaWYgKCFjaGVja3MuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWVcblxuICAgIE5vdENoZWNrZXIucHJvdG90eXBlW2tleV0gPSAoZnVuY3Rpb24gKGNoZWNrTmFtZSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzLmNoZWNrZXJfXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICB2YXIgZXJyTXNnID0gbnVsbFxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhhdFtjaGVja05hbWVdLmFwcGx5KHRoYXQsIGFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICBpZiAoZXJyLmlzUGFyYW1DaGVja0Vycm9yKSB7XG4gICAgICAgICAgICBlcnJNc2cgPSBlcnIubWVzc2FnZVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnIgLy8g5YaF6YOo6ZSZ6K+v77yM6Z2e5qOA5p+l5aSx6LSlXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlYWxNc2cgPSBudWxsXG5cbiAgICAgICAgaWYgKGVyck1zZykge1xuICAgICAgICAgIHJlYWxNc2cgPSBlcnJNc2cucmVwbGFjZSgnW1ZBTElEQVRFLUlPXScsICdbVkFMSURBVEUtSU9dW05PVF0nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlYWxNc2cgPSAnW1ZBTElEQVRFLUlPXVtOT1RdICcgKyBjaGVja05hbWUgKyAnIGNoZWNrIGVycm9yLCB0YXJnZXQ6ICcgKyBwcmludFN0cmluZyh0aGlzLmNoZWNrZXJfLnRhcmdldF8pXG4gICAgICAgIH1cblxuICAgICAgICB2ZXJpZnkoZXJyTXNnLCByZWFsTXNnKVxuXG4gICAgICAgIHJldHVybiB0aGF0XG4gICAgICB9XG4gICAgfSkoa2V5KVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9Ob3RDaGVja2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQGF1dGhvciBZM0dcclxuICogQGZpbGVvdmVydmlld1xyXG4gKiDmoLnmja7nsbtBKOWFtuaWueazleaUr+aMgemTvuW8j+iwg+eUqCksIOeUn+aIkOS4gOS4quebuOW6lOeahOKAnHBsYW7igJ3nsbssIOmTvuW8j+iwg+eUqHBsYW7nmoTmlrnms5UsIOi/lOWbnuS4gOS4quWHveaVsCwg5omn6KGM5Ye95pWw5Y2z5Y+v6ZO+5byP5omn6KGMQeeahOebuOW6lOaWueazlS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKVxyXG52YXIgZGVmID0gcmVxdWlyZSgnLi91dGlscy9kZWYnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQbGFuXHJcblxyXG4vKipcclxuICog55Sf5oiQIHBsYW5cclxuICpcclxuICogQHBhcmFtIHByb3RvIOimgeeUn+aIkCBwbGFuIOeahOexu+WOn+Wei1xyXG4gKiBAcGFyYW0gY2hhaW5pbmdQcm9wcyDmlK/mjIHpk77lvI/osIPnlKjnmoToh6rlrprkuYnlsZ7mgKflkI3liJfooahcclxuICogQHBhcmFtIGNoYWluaW5nTWV0aG9kcyDmlK/mjIHpk77lvI/osIPnlKjnmoTmlrnms5XlkI3liJfooajvvIzlpoLmnpzkuI3loavvvIzpu5jorqTmiYDmnInmlrnms5Xpg73mlK/mjIHpk77lvI/osIPnlKhcclxuICogQHJldHVybiDnlJ/miJDnmoQgcGxhbiDlrp7kvotcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVBsYW4gKHByb3RvLCBjaGFpbmluZ1Byb3BzLCBjaGFpbmluZ01ldGhvZHMpIHtcclxuICBmdW5jdGlvbiBQbGFuIChmbiwgcHJldiwgbmFtZSkge1xyXG4gICAgdGhpcy5mbl8gPSBmblxyXG4gICAgdGhpcy5wcmV2XyA9IHByZXZcclxuICAgIHRoaXMubmFtZV8gPSBuYW1lXHJcbiAgICB0aGlzLl9faW5pdEN1c3RvbVByb3BzKGNoYWluaW5nUHJvcHMpXHJcbiAgfVxyXG5cclxuICBQbGFuLnByb3RvdHlwZS5fX2lzUGxhbiA9IHRydWVcclxuXHJcbiAgLy8g5Zug5Li6IFBsYW4ucHJvdG90eXBlIOS4iuS8mua3u+WKoOiuuOWkmuWQjeWtl+acquefpeeahOaWueazle+8jOaJgOS7peiHquW3seeahOaWueazleWKoFwiX19cIuS7peinhOmBv+mHjeWQjVxyXG4gIFBsYW4ucHJvdG90eXBlLl9faW5pdEN1c3RvbVByb3BzID0gZnVuY3Rpb24gKGNoYWluaW5nUHJvcHMpIHtcclxuICAgIGlmIChjaGFpbmluZ1Byb3BzICYmIGNoYWluaW5nUHJvcHMubGVuZ3RoKSB7XHJcbiAgICAgIHZhciBsZW4gPSBjaGFpbmluZ1Byb3BzLmxlbmd0aFxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBjaGFpbmluZ1Byb3BzW2ldXHJcbiAgICAgICAgdmFyIGZuID0gKGZ1bmN0aW9uIChwcm9wKSB7XHJcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBsYW4oZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdFtwcm9wXVxyXG4gICAgICAgICAgICB9LCBzZWxmLCBwcm9wKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKHByb3BOYW1lKVxyXG5cclxuICAgICAgICBkZWYodGhpcywgcHJvcE5hbWUsIGZuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBQbGFuLnByb3RvdHlwZS5fX2V4ZWMgPSBmdW5jdGlvbiAodGhhdCkge1xyXG4gICAgdmFyIG15VGhhdCA9IHRoYXRcclxuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2X1xyXG4gICAgdmFyIGZuID0gdGhpcy5mbl9cclxuXHJcbiAgICBpZiAocHJldikge1xyXG4gICAgICBteVRoYXQgPSBwcmV2Ll9fZXhlYyh0aGF0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICByZXR1cm4gZm4obXlUaGF0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGF0XHJcbiAgfVxyXG5cclxuICBQbGFuLnByb3RvdHlwZS5fX3BhdGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJldiA9IHRoaXMucHJldl9cclxuICAgIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gICAgdmFyIHJldCA9IHByZXYgPyBwcmV2Ll9fcGF0aCgpIDogJydcclxuXHJcbiAgICByZXQgKz0gJy4nICsgbmFtZVxyXG5cclxuICAgIHJldHVybiByZXRcclxuICB9XHJcblxyXG4gIFBsYW4uX19yZWdpc3RlciA9IGZ1bmN0aW9uIChjaGVja3MpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBjaGVja3MpIHtcclxuICAgICAgaWYgKCFjaGVja3MuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhaXNGdW5jdGlvbihjaGVja3Nba2V5XSkpIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhaW5pbmdNZXRob2RzICYmIGNoYWluaW5nTWV0aG9kcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKFBsYW4ucHJvdG90eXBlW2tleV0pIHtcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBQbGFuLnByb3RvdHlwZVtrZXldID0gKGZ1bmN0aW9uIChmbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcbiAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgICAgICByZXR1cm4gbmV3IFBsYW4oZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXRbZm5OYW1lXS5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICAgICAgfSwgc2VsZiwgZm5OYW1lKVxyXG4gICAgICAgIH1cclxuICAgICAgfSkoa2V5KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUGxhbi5fX3JlZ2lzdGVyKHByb3RvKVxyXG5cclxuICByZXR1cm4gUGxhblxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3BsYW4uanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICog6aaW5a2X5q+N5aSn5YaZXG4gKiBAYXV0aG9yIFkzR1xuICovXG5cbid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZpcnN0VXBwZXJDYXNlIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxTL2csIGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRvVXBwZXJDYXNlKCkgfSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3V0aWxzL2ZpcnN0VXBwZXJDYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcnJheUJ1ZmZlcmAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXkgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FycmF5QnVmZmVyKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFycmF5QnVmZmVyVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJyYXlCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRGF0ZWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBkYXRlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNEYXRlKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGRhdGVUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRGF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbWFwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hcCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IG1hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1JlZ0V4cGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSByZWdleHAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzUmVnRXhwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHJlZ2V4cFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNSZWdFeHAuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNTZXRgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09IHNldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGlzIGNhcGFibGUgb2YgYmVpbmcgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2FibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xudmFyIGlzTWFza2FibGUgPSBjb3JlSnNEYXRhID8gaXNGdW5jdGlvbiA6IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2thYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrYWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJyYXlCdWZmZXInKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzQXJyYXlCdWZmZXIgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc0FycmF5QnVmZmVyO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5QnVmZmVyYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXkgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUJ1ZmZlcihuZXcgQXJyYXlCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUJ1ZmZlcihuZXcgQXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXlCdWZmZXIgPSBub2RlSXNBcnJheUJ1ZmZlciA/IGJhc2VVbmFyeShub2RlSXNBcnJheUJ1ZmZlcikgOiBiYXNlSXNBcnJheUJ1ZmZlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGJvb2xlYW4gcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJvb2xlYW4sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Jvb2xlYW4oZmFsc2UpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCb29sZWFuKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2UgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBib29sVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Jvb2xlYW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQm9vbGVhbi5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0RhdGUgPSByZXF1aXJlKCcuL19iYXNlSXNEYXRlJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc0RhdGUgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc0RhdGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBEYXRlYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBkYXRlIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRGF0ZShuZXcgRGF0ZSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0RhdGUoJ01vbiBBcHJpbCAyMyAyMDEyJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNEYXRlID0gbm9kZUlzRGF0ZSA/IGJhc2VVbmFyeShub2RlSXNEYXRlKSA6IGJhc2VJc0RhdGU7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNEYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpLFxuICAgIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL2lzUGxhaW5PYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBET00gZWxlbWVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIERPTSBlbGVtZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNFbGVtZW50KGRvY3VtZW50LmJvZHkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbGVtZW50KCc8Ym9keT4nKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMSAmJiAhaXNQbGFpbk9iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFbGVtZW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VsZW1lbnQuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgb2JqZWN0LCBjb2xsZWN0aW9uLCBtYXAsIG9yIHNldC5cbiAqXG4gKiBPYmplY3RzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBubyBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWRcbiAqIHByb3BlcnRpZXMuXG4gKlxuICogQXJyYXktbGlrZSB2YWx1ZXMgc3VjaCBhcyBgYXJndW1lbnRzYCBvYmplY3RzLCBhcnJheXMsIGJ1ZmZlcnMsIHN0cmluZ3MsIG9yXG4gKiBqUXVlcnktbGlrZSBjb2xsZWN0aW9ucyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgbGVuZ3RoYCBvZiBgMGAuXG4gKiBTaW1pbGFybHksIG1hcHMgYW5kIHNldHMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYHNpemVgIG9mIGAwYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRW1wdHkobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KHRydWUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSgxKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0VtcHR5KHsgJ2EnOiAxIH0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkgJiZcbiAgICAgIChpc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgIGlzQnVmZmVyKHZhbHVlKSB8fCBpc1R5cGVkQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICByZXR1cm4gIXZhbHVlLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgaWYgKHRhZyA9PSBtYXBUYWcgfHwgdGFnID09IHNldFRhZykge1xuICAgIHJldHVybiAhdmFsdWUuc2l6ZTtcbiAgfVxuICBpZiAoaXNQcm90b3R5cGUodmFsdWUpKSB7XG4gICAgcmV0dXJuICFiYXNlS2V5cyh2YWx1ZSkubGVuZ3RoO1xuICB9XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW1wdHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRW1wdHkuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyksXG4gICAgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZG9tRXhjVGFnID0gJ1tvYmplY3QgRE9NRXhjZXB0aW9uXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGBFcnJvcmAsIGBFdmFsRXJyb3JgLCBgUmFuZ2VFcnJvcmAsIGBSZWZlcmVuY2VFcnJvcmAsXG4gKiBgU3ludGF4RXJyb3JgLCBgVHlwZUVycm9yYCwgb3IgYFVSSUVycm9yYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gZXJyb3Igb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNFcnJvcihuZXcgRXJyb3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFcnJvcihFcnJvcik7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Vycm9yKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZXJyb3JUYWcgfHwgdGFnID09IGRvbUV4Y1RhZyB8fFxuICAgICh0eXBlb2YgdmFsdWUubWVzc2FnZSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUubmFtZSA9PSAnc3RyaW5nJyAmJiAhaXNQbGFpbk9iamVjdCh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXJyb3I7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgaXNNYXNrYWJsZSA9IHJlcXVpcmUoJy4vX2lzTWFza2FibGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIENPUkVfRVJST1JfVEVYVCA9ICdVbnN1cHBvcnRlZCBjb3JlLWpzIHVzZS4gVHJ5IGh0dHBzOi8vbnBtcy5pby9zZWFyY2g/cT1wb255ZmlsbC4nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJpc3RpbmUgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBjYW4ndCByZWxpYWJseSBkZXRlY3QgbmF0aXZlIGZ1bmN0aW9ucyBpbiB0aGUgcHJlc2VuY2VcbiAqIG9mIHRoZSBjb3JlLWpzIHBhY2thZ2UgYmVjYXVzZSBjb3JlLWpzIGNpcmN1bXZlbnRzIHRoaXMga2luZCBvZiBkZXRlY3Rpb24uXG4gKiBEZXNwaXRlIG11bHRpcGxlIHJlcXVlc3RzLCB0aGUgY29yZS1qcyBtYWludGFpbmVyIGhhcyBtYWRlIGl0IGNsZWFyOiBhbnlcbiAqIGF0dGVtcHQgdG8gZml4IHRoZSBkZXRlY3Rpb24gd2lsbCBiZSBvYnN0cnVjdGVkLiBBcyBhIHJlc3VsdCwgd2UncmUgbGVmdFxuICogd2l0aCBsaXR0bGUgY2hvaWNlIGJ1dCB0byB0aHJvdyBhbiBlcnJvci4gVW5mb3J0dW5hdGVseSwgdGhpcyBhbHNvIGFmZmVjdHNcbiAqIHBhY2thZ2VzLCBsaWtlIFtiYWJlbC1wb2x5ZmlsbF0oaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvYmFiZWwtcG9seWZpbGwpLFxuICogd2hpY2ggcmVseSBvbiBjb3JlLWpzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hdGl2ZShBcnJheS5wcm90b3R5cGUucHVzaCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05hdGl2ZShfKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmIChpc01hc2thYmxlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihDT1JFX0VSUk9SX1RFWFQpO1xuICB9XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgbnVsbGlzaCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmlsKG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOaWwodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmlsKE5hTik7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05pbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05pbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNOaWwuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNTZXQgPSByZXF1aXJlKCcuL19iYXNlSXNTZXQnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzU2V0ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNTZXQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU2V0KG5ldyBTZXQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTZXQobmV3IFdlYWtTZXQpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzU2V0ID0gbm9kZUlzU2V0ID8gYmFzZVVuYXJ5KG5vZGVJc1NldCkgOiBiYXNlSXNTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBXZWFrTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB3ZWFrIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzV2Vha01hcChuZXcgV2Vha01hcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1dlYWtNYXAobmV3IE1hcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1dlYWtNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSB3ZWFrTWFwVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNXZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgd2Vha1NldFRhZyA9ICdbb2JqZWN0IFdlYWtTZXRdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFdlYWtTZXRgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHdlYWsgc2V0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNXZWFrU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzV2Vha1NldChuZXcgU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzV2Vha1NldCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSB3ZWFrU2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzV2Vha1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNXZWFrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
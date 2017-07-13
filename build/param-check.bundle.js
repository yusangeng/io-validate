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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
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

var Symbol = __webpack_require__(13),
    getRawTag = __webpack_require__(47),
    objectToString = __webpack_require__(52);

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

var freeGlobal = __webpack_require__(16);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(16);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(14),
    getValue = __webpack_require__(48);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObject = __webpack_require__(10);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(33),
    Map = __webpack_require__(34),
    Promise = __webpack_require__(35),
    Set = __webpack_require__(36),
    WeakMap = __webpack_require__(37),
    baseGetTag = __webpack_require__(1),
    toSource = __webpack_require__(19);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(6),
    isLength = __webpack_require__(9);

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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    getPrototype = __webpack_require__(46),
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 自定义属性
 * @author Y3G
 */



module.exports = def

/**
 * 定义自定义属性
 *
 * @param {Object} that 要定义属性的对象
 * @param {String} key 属性名
 * @param {Function} getter 读函数
 * @param {Function} setter 写函数
 * @throws 属性不可自定义
 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(6),
    isMasked = __webpack_require__(50),
    isObject = __webpack_require__(10),
    toSource = __webpack_require__(19);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)))

/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(38),
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(25);

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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isArray = __webpack_require__(21),
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(44),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 25 */
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 参数检查器
 * @author Y3G
 */



var toAsync = __webpack_require__(32)

var isArguments = __webpack_require__(20)
var isArrayBuffer = __webpack_require__(53)
var isArrayLike = __webpack_require__(8)
var isArrayLikeObject = __webpack_require__(54)
var isBoolean = __webpack_require__(55)
var isBuffer = __webpack_require__(22)
var isDate = __webpack_require__(56)
var isElement = __webpack_require__(57)
var isEmpty = __webpack_require__(58)
var isError = __webpack_require__(59)
var isFunction = __webpack_require__(6)
var isLength = __webpack_require__(9)
var isMap = __webpack_require__(60)
var isNative = __webpack_require__(61)
var isNil = __webpack_require__(62)
var isNull = __webpack_require__(63)
var isNumber = __webpack_require__(64)
var isObject = __webpack_require__(10)
var isObjectLike = __webpack_require__(0)
var isPlainObject = __webpack_require__(11)
var isRegExp = __webpack_require__(65)
var isSet = __webpack_require__(66)
var isString = __webpack_require__(23)
var isSymbol = __webpack_require__(67)
var isTypedArray = __webpack_require__(24)
var isUndefined = __webpack_require__(68)
var isWeakMap = __webpack_require__(69)
var isWeakSet = __webpack_require__(70)

var isExist = function isExist(o) {
  return !(isUndefined(o) || isNull(o))
}

var isArray = Array.isArray || function isArray (o) {
  return Object.prototype.toString.call(o) === '[object Array]'
}

var is = {
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

var message = __webpack_require__(31)
var def = __webpack_require__(12)
var equal = __webpack_require__(30)

module.exports = {
  check: check,
  Checker: Checker
}

/**
 * 参数检查方法
 *
 * @param {any} obj 要检查的参数
 * @param {String} name 要检查的参数名（可选，有助于精确打印信息）
 * @returns 检查器
 */
function check (obj, name) {
  return new Checker(obj, name)
}

/**
 * 抛出异常
 *
 * @param {Error} err 异常对象
 */
function throwErr (err) {
  function _throw (err) {
    throw err
  }

  if (!check.__UT__) {
    // 在非单元测试环境，为了防止抛出的异常被catch，异步抛出一次
    toAsync(_throw)(err)
  }

  throw err
}

/**
 * 断言
 *
 * @param {any} expr 断言为真的表达式
 * @param {String|Function} message 错误消息
 */
function verify (expr, message) {
  if (!expr) {
    var msg = isFunction(message) ? message() : message
    throwErr(new Error(msg))
  }
}

/**
 * 内部使用的断言
 *
 * @param {any} expr 断言为真的表达式
 * @param {String} message 错误消息（仅打印日志）
 * @returns expr是否为真
 */
function verifyInternal (expr, message) {
  if (!expr) {
    console.warn('[PARAM-CHECK-INTERNAL] ' + message)
  }

  return !!expr
}

/**
 * 首字母大写
 *
 * @param {String} str 要处理的字符串
 * @return 首字母大写字符串
 */
function firstUpperCase (str) {
  return str.replace(/^\S/g, function (s) { return s.toUpperCase() })
}

/**
 * 检查器
 *
 * @class
 * @param {any} obj 要检查的对象
 * @param {String} name 要检查的对象名字（可选，有助于精确打印信息）
 * @param {Checker} owner 所属对象（链式调用has时使用）
 */
function Checker (obj, name, owner) {
  this.obj_ = obj
  this.name_ = name || '[Nameless]'
  this.owner = owner
  this._ = owner // _为owner的简写

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

/**
 * 检查数据类型
 * 
 * @memberof Checker
 * @param {String} type 类型名称，可以为多个
 * @return this
 */
Checker.prototype.is = function (type) {
  var obj = this.obj_
  var name = this.name_
  var len = arguments.length
  var yes = false

  for (var i = 0; i < len; ++i) {
    var key = arguments[i]

    if (!verifyInternal(isString(key),
      'Bad param: arguments[' + i + '] is NOT string')) {
      continue
    }

    key = 'is' + firstUpperCase(key)

    var fn = is[key]

    if (verifyInternal(is.hasOwnProperty(key) && isFunction(fn),
      'Bad param: arguments[' + i + '] is NOT a legal type')) {
      yes = fn(obj)
      if (yes) break
    }
  }

  verify(yes, message('is', obj, name, arguments))

  return this
}

// isXXX方法
for (var entry in is) {
  var fn = is[entry]

  if (!is.hasOwnProperty(entry) || !isFunction(fn)) {
    continue
  }

  (function (entry, fn) {
    Checker.prototype[entry] = function () {
      var obj = this.obj_
      var name = this.name_
      verify(fn(obj), message(entry, obj, name, arguments))
      return this
    }
  })(entry, fn)
}

/**
 * 检查所属的类（使用instanceof关键字判断）
 * 
 * @memberof Checker
 * @param {Function} ctor 类
 * @return this
 */
Checker.prototype.instanceOf = function (ctor) {
  var obj = this.obj_
  var name = this.name_

  if (verifyInternal(isFunction(ctor), 'Bad param: ctor is NOT a function')) {
    verify(obj instanceof ctor, message('instanceOf', obj, name, arguments))
  }

  return this
}

/**
 * 大于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.gt = function (n) {
  var obj = this.obj_
  var name = this.name_

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments))
    verify(obj > n, message('gt', obj, name, arguments))
  }

  return this
}

/**
 * 大于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.greaterThan = Checker.prototype.gt

/**
 * 大于等于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.egt = function (n) {
  var obj = this.obj_
  var name = this.name_

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments))
    verify(obj >= n, message('gt', obj, name, arguments))
  }

  return this
}

/**
 * 大于等于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.equalOrGreaterThan = Checker.prototype.egt

/**
 * 小于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.lt = function (n) {
  var obj = this.obj_
  var name = this.name_

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments))
    verify(obj < n, message('lt', obj, name, arguments))
  }

  return this
}

/**
 * 小于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.lessThan = Checker.prototype.lt

/**
 * 小于等于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.elt = function (n) {
  var obj = this.obj_
  var name = this.name_

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments))
    verify(obj <= n, message('lt', obj, name, arguments))
  }

  return this
}

/**
 * 小于等于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.equalOrLessThan = Checker.prototype.elt

var rexpRange = /^([([])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/

// 根据数学表达式生成判断函数
function genRangeFn (range) {
  if (!genRangeFn.cache) {
    genRangeFn.cache = {}
  }

  var fn = genRangeFn.cache[range]

  if (fn) return fn

  if (!verifyInternal(isString(range),
    'Bad param: range is NOT string')) {
    return null
  }

  var match = rexpRange.exec(range)

  if (!verifyInternal(match && match.length === 5,
    'Bad param: bad range string: ' + range)) {
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
    fn = genRangeFn.cache[range] = new Function(['n'], fnSource)
  } catch (err) {
    return null
  }

  return fn
}

/**
 * 检查是否属于某个区间
 * 
 * @memberof Checker
 * @param {String} range 区间字符串，形如“[1,2)”，可以为多个
 * @return this
 */
Checker.prototype.within = function (range) {
  var len = arguments.length

  if (len === 0) {
    return this
  }

  var obj = this.obj_
  var name = this.name_
  var yes = false

  for (var i = 0; i < len; ++i) {
    var range = arguments[i]
    var fn = genRangeFn(range)

    if (fn) {
      yes =  fn(obj)
      if (yes) break
    }
  }

  verify(yes, message('within', obj, name, arguments))

  return this
}

/**
 * 检查是否符合正则表达式
 * 
 * @memberof Checker
 * @param {RegRxp} rexp 正则表达式
 * @return this
 */
Checker.prototype.match = function (rexp) {
  var obj = this.obj_,
    name = this.name_

  if (verifyInternal(isRegExp(rexp),
			'Bad param: n is NOT a regexp')) {
    verify(isString(obj), message('isString', obj, name, arguments))
    verify(rexp.test(obj), message('match', obj, name, arguments))
  }

  return this
}

/**
 * 检查是否相同（使用===判断）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.same = function (other) {
  var obj = this.obj_,
    name = this.name_

  verify((obj === other), message('same', obj, name, arguments))

  return this
}

/**
 * 检查是否相等（即deep equal，不支持argument比较，如果需要更换equal算法，请赋值check._equal={你的equal函数}）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.eq = function (other) {
  var obj = this.obj_
  var name = this.name_
  var eq = check._equal || function(l, r) {return equal(l, r, true)}

  verify(eq(obj, other), message('eq', obj, name, arguments))

  return this
}

/**
 * 检查是否相等（即deep equal，不支持argument比较，如果需要更换equal算法，请赋值check._equal={你的equal函数}）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.equal = Checker.prototype.eq

/**
 * 检查是否有某个属性（不包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.has = function (key) {
  var obj = this.obj_
  var name = this.name_

  verify(isExist(obj), message('isExist', obj, name, arguments))
  verify(obj.hasOwnProperty && obj.hasOwnProperty(key),
		message('has', obj, name, arguments))

  return new Checker(obj[key], name + '.' + key, this)
}

/**
 * 检查是否有某个属性（不包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.hasOwn = Checker.prototype.has

/**
 * 检查是否有某个属性（包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.got = function (key) {
  var obj = this.obj_
  var name = this.name_

  verify(isExist(obj), message('isExist', obj, name, arguments))
  verify(!isUndefined(obj[key]), message('got', obj, name, arguments))

  return new Checker(obj[key], name + '.' + key, this)
}

/**
 * 检查是否有length属性（包括原型链上的属性）
 * 
 * @memberof Checker
 * @return 使用length属性构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.length = function () {
  return this.got('length')
}

/**
 * 使用map函数转化对象，并返回用转化过的对象构造的Checker
 * 
 * @memberof Checker
 * @param {Function|String} 转化函数，如果为字符串，则调用待检查对象同名方法，后面的参数会传给相应方法
 * @return 使用转化过的对象构造的Checker，使用owner跳回本对象
 */
Checker.prototype.map = function (fn) {
  var obj = this.obj_
  var name = this.name_
  var mapObj

  verify(isExist(obj), message('isExist', obj, name, arguments))

  try {
    if (isFunction(fn)) {
      mapObj = fn(obj)
    } else if (isString(fn)) {
      var f = obj[fn]
      if (verifyInternal(isFunction(f),
					'Bad param: the obj has NOT got a method called' + fn)) {
        mapObj = f.apply(obj, Array.prototype.slice.call(arguments, 1))
      }
    } else {
      verifyInternal(false, 'Bad param: fn is illegal')
    }
  } catch (err) {
    verify(false, err.message)
  }

  var str = name + '=>' + (isString(fn) ? fn : (fn.name || '[Anonymous Function]'))
  return new Checker(mapObj, str, this)
}

function errorMessage (fn) {
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

/**
 * 使用自定义函数或policy检查
 * 
 * @memberof Checker
 * @param {Function|Policy} fn 检查函数或policy，参数为待检查对象
 * @return this
 */
Checker.prototype.meet = function (fn) {
  var obj = this.obj_
  var name = this.name_
  var errorMsg

  if (isFunction(fn)) {
    errorMsg = errorMessage(fn, obj)
  } else if (fn.isPolicy) {
    try {
      fn.__exec(this)
    } catch (e) {
      errorMsg = fn.__path()
    }
  } else {
    verifyInternal(false, 'Bad param: fn is NOT a function or policy')
  }

  verify(!errorMsg, message('meet', obj, name, [errorMsg]))

  return this
}

/**
 * 使用“且”关系组合检查函数或policy
 * 
 * @memberof Checker
 * @param {Function|Policy} x 函数或Policy实例，可以为多个
 * @return this
 */
Checker.prototype.and = function (x) {
  var obj = this.obj_
  var name = this.name_
  var len = arguments.length
  var errorMsg

  for (var i = 0; i < len; ++i) {
    var fn = arguments[i]

    if (isFunction(fn)) {
      errorMsg = errorMessage(fn, obj)
      if (errorMsg) {
        errorMsg = message('and', obj, name, [i, errorMsg])
        break
      }
    } else if (fn.isPolicy) {
      try {
        fn.__exec(this)
      } catch (e) {
        errorMsg = message('and', obj, name, [i, fn.__path()])
        break
      }
    } else {
      verifyInternal(false, 'Bad param: argument[' + i + '] is NOT a function or policy')
    }
  }

  verify(!errorMsg, errorMsg)

  return this
}

/**
 * 使用“或”关系组合检查函数或policy
 * 
 * @memberof Checker
 * @param {Function|Policy} x 函数或Policy实例，可以为多个
 * @return this
 */
Checker.prototype.or = function () {
  var obj = this.obj_
  var name = this.name_
  var len = arguments.length
  var errorDetail = []
  var errorCount = 0

  for (var i = 0; i < len; ++i) {
    var fn = arguments[i]

    if (isFunction(fn)) {
      var errorMsg = errorMessage(fn, obj)
      if (errorMsg) {
        errorDetail.push(errorMsg)
        errorCount++
        continue
      }

      break
    } else if (fn.isPolicy) {
      try {
        fn.__exec(this)
      } catch (err) {
        errorDetail.push(fn.__path())
        errorCount++
        continue
      }

      break
    } else {
      verifyInternal(false, 'Bad param: argument[' + i + '] is NOT a function or policy')
    }
  }

  verify(errorCount < len, message('or', obj, name, errorDetail))

  return this
}

/**
 * 否定检查器（对Checker的每个检查方法取“非”）
 * 
 * @class
 * @param {Checker} checker 
 */
function NotChecker (checker) {
  this.checker_ = checker
}

for (var methodName in Checker.prototype) {
  var method = Checker.prototype[methodName]

  if (!Checker.prototype.hasOwnProperty(methodName) ||
		!isFunction(method)) {
    continue
  }

  NotChecker.prototype[methodName] = (function (name) {
    return function () {
      var that = this.checker_
      var obj = that.obj_
      var objName = that.name_
      var args = Array.prototype.slice.call(arguments, 0)
      var yes = false

      try {
        that[name].apply(that, args)
      } catch (err) {
        if (err.message.indexOf('[PARAM-CHECK]') === 0) {
          yes = true
        } else {
          throw err // 内部错误，非检查失败
        }
      }

      verify(yes, function () {
        return message(name, obj, objName, args)()
					.replace('[PARAM-CHECK]', '[PARAM-CHECK][NOT]')
      })

      return that
    }
  })(methodName)
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Y3G
 * @fileoverview
 * 根据一个方法支持链式调用的类 A，生成一个提取其方法的“policy”类。
 * 链式调用 policy 的方法，返回一个函数，执行函数即可链式执行 A 的相应方法。
 */



var isFunction = __webpack_require__(6)
var def = __webpack_require__(12)

module.exports = makePolicy

/**
 * 生成 policy
 *
 * @param proto 要生成 policy 的类原型
 * @param chainingProps 支持链式调用的自定义属性名列表
 * @param chainingMethods 支持链式调用的方法名列表，如果不填，默认所有方法都支持链式调用
 * @return 生成的 policy 实例
 */
function makePolicy (proto, chainingProps, chainingMethods) {
  function Policy (fn, prev, name) {
    this.fn_ = fn
    this.prev_ = prev
    this.name_ = name
    this.__initCustomProps(chainingProps)
  }

  Policy.prototype.isPolicy = true

  // 因为 Policy.prototype 上会添加许多名字未知的方法，所以自己的方法加"__"以规避重名
  Policy.prototype.__initCustomProps = function (chainingProps) {
    if (chainingProps && chainingProps.length) {
      var len = chainingProps.length
      var self = this

      for (var i = 0; i < len; ++i) {
        var propName = chainingProps[i]
        var fn = (function (prop) {
          return function () {
            return new Policy(function (that) {
              return that[prop]
            }, self, prop)
          }
        })(propName)

        def(this, propName, fn)
      }
    }
  }

  Policy.prototype.__exec = function (that) {
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

  Policy.prototype.__path = function () {
    var prev = this.prev_
    var name = this.name_
    var ret = prev ? prev.__path() : ''

    ret += '.' + name

    return ret
  }

  for (var key in proto) {
    if (!proto.hasOwnProperty(key) || !isFunction(proto[key])) {
      continue
    }

    if (chainingMethods && chainingMethods.indexOf(key) === -1) {
      continue
    }

    Policy.prototype[key] = (function (fnName) {
      return function () {
        var self = this
        var args = Array.prototype.slice.call(arguments, 0)

        return new Policy(function (that) {
          return that[fnName].apply(that, args)
        }, self, fnName)
      }
    })(key)
  }

  return new Policy(null, null, 'policy')
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 导出接口
 * @author Y3G
 */



var check = __webpack_require__(27)
var makePolicy = __webpack_require__(28)

var expo = check.check
expo.policy = makePolicy(check.Checker.prototype, ['not', 'owner'])

module.exports = expo


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file deep equal实现
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @file 错误消息
 * @author Y3G
 */

var isString = __webpack_require__(23)

// export一个生成函数的函数，是因为大多数时候message不需要打印，此时并不需要真的计算message是什么
module.exports = function (entry, obj, name, args) {
  return function () {
    return message(entry, obj, name, args)
  }
}

function printString (obj) {
  return isString(obj) ? ('"' + obj + '"') : ('' + obj)
}

function message (entry, obj, name, args) {
  var reason

  if (entry === 'is') {
    reason = 'is NOT ' + Array.prototype.join.call(args, ', ')
  } else if (entry.indexOf('is') === 0) {
    reason = 'is NOT a(n) ' + entry.replace(/^is/, '').toLowerCase()
  } else if (entry === 'instanceOf') {
    var ctorName = (args[0] || {}).name || '[unknown]'
    reason = 'is NOT an instance of given constructor: ' + ctorName
  } else if (entry === 'gt' || entry === 'greaterThan') {
    reason = 'is NOT greater than ' + printString(args[0])
  } else if (entry === 'lt' || entry === 'lessThan') {
    reason = 'is NOT less than ' + printString(args[0])
  } else if (entry === 'egt' || entry === 'equalOrGreaterThan') {
    reason = 'is NOT greater than ' + printString(args[0])
  } else if (entry === 'elt' || entry === 'equalOrLessThan') {
    reason = 'is NOT less than ' + printString(args[0])
  } else if (entry === 'within') {
    reason = 'is NOT in range(s): ' + Array.prototype.join.call(args, ', ')
  } else if (entry === 'match') {
    reason = 'does NOT match regexp: ' + printString(args[0])
  } else if (entry === 'same') {
    reason = 'is NOT the same object to ' + printString(args[0])
  } else if (entry === 'eq' || entry === 'equal') {
    reason = 'is NOT equal to ' + printString(args[0])
  } else if (entry === 'has' || entry === 'hasOwn') {
    reason = 'has NO own property: ' + printString(args[0])
  } else if (entry === 'got') {
    reason = 'has NOT property: ' + printString(args[0])
  } else if (entry === 'and') {
    // args[0] 是执行失败的检查序号,args[1] 是具体原因
    var no = args[0]
    var detail = args[1] || 'unknown'

    if (detail.isPolicy) {
      detail = detail.path()
    }

    reason = 'does NOT pass the [' +
      no + ']th of an "AND" check, detail: {' + detail + '}'
  } else if (entry === 'or') {
    var details = []

    for (var i = 0; i < args.length; ++i) {
      detail = args[i] || 'unknown'

      if (detail.isPolicy) {
        detail = detail.path()
      }

      details.push(detail)
    }

    reason = 'does NOT pass an "OR" check, detail: {' + details.join('}{') + '}'
  } else if (entry === 'meet') {
    reason = 'does NOT pass the check, detail: {' + args[0] + '}'
  } else {
    reason = 'does NOT pass the check ' + entry
  }

  return '[PARAM-CHECK] Check Failure: ' + name + '(' + printString(obj) + ') ' + reason + '.'
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * @file 将函数转化为异步函数
 * @author Y3G
 */

/**
 * 将函数转化为异步函数
 * @param  {Function} fn 输入函数
 * @return {Function} 输出函数
 * @export
 */
module.exports = function asyncCast (fn) {
  if (typeof fn !== 'function') {
    throw new TypeError('fn is NOT a function.')
  }

  function asyncFn () {
    var args = Array.prototype.slice.call(arguments)
    var self = this

    setTimeout(function () {
      fn.apply(self, args)
    }, 0)
  }

  // for debug
  asyncFn.originalFunction = fn

  return asyncFn
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(5),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(7),
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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(7),
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isLength = __webpack_require__(9),
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(17),
    nativeKeys = __webpack_require__(51);

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(18);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(13);

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
/* 48 */
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(15),
    isFunction = __webpack_require__(6),
    stubFalse = __webpack_require__(25);

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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(15);

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(18);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 52 */
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArrayBuffer = __webpack_require__(39),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(8),
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsDate = __webpack_require__(40),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(11);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(45),
    getTag = __webpack_require__(7),
    isArguments = __webpack_require__(20),
    isArray = __webpack_require__(21),
    isArrayLike = __webpack_require__(8),
    isBuffer = __webpack_require__(22),
    isPrototype = __webpack_require__(17),
    isTypedArray = __webpack_require__(24);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(1),
    isObjectLike = __webpack_require__(0),
    isPlainObject = __webpack_require__(11);

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(41),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(14),
    isMaskable = __webpack_require__(49);

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
/* 62 */
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
/* 63 */
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
/* 64 */
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsRegExp = __webpack_require__(42),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(43),
    baseUnary = __webpack_require__(3),
    nodeUtil = __webpack_require__(4);

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
/* 67 */
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(7),
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
/* 70 */
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
/* 71 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0tY2hlY2suYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDViYzYwMWNhZTBmMWY1ZmYyZWYiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2RlZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3BvbGljeS5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9saWIvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9hc3luYy1jYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19Qcm9taXNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJyYXlCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzUmVnRXhwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlSXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2FibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQm9vbGVhbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNFbGVtZW50LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc05pbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc051bGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNSZWdFeHAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNTeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNXZWFrTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzV2Vha1NldC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGFyYW0tY2hlY2tcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDViYzYwMWNhZTBmMWY1ZmYyZWYiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzUGxhaW5PYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBAZmlsZSDoh6rlrprkuYnlsZ7mgKdcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmXHJcblxyXG4vKipcclxuICog5a6a5LmJ6Ieq5a6a5LmJ5bGe5oCnXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGF0IOimgeWumuS5ieWxnuaAp+eahOWvueixoVxyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXR0ZXIg6K+75Ye95pWwXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciDlhpnlh73mlbBcclxuICogQHRocm93cyDlsZ7mgKfkuI3lj6/oh6rlrprkuYlcclxuICovXHJcbmZ1bmN0aW9uIGRlZiAodGhhdCwga2V5LCBnZXR0ZXIsIHNldHRlcikge1xyXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoYXQsIGtleSlcclxuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnaXMgTk9UIGEgY29uZmlndXJhYmxlIHByb3BlcnR5LicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhhdCwga2V5LCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICBzZXQ6IHNldHRlclxyXG4gIH0pXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvZGVmLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG4gKiBAZmlsZSDlj4LmlbDmo4Dmn6XlmahcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciB0b0FzeW5jID0gcmVxdWlyZSgnYXN5bmMtY2FzdCcpXHJcblxyXG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCdsb2Rhc2gvaXNBcmd1bWVudHMnKVxyXG52YXIgaXNBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJ2xvZGFzaC9pc0FycmF5QnVmZmVyJylcclxudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXlMaWtlJylcclxudmFyIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0JylcclxudmFyIGlzQm9vbGVhbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Jvb2xlYW4nKVxyXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNCdWZmZXInKVxyXG52YXIgaXNEYXRlID0gcmVxdWlyZSgnbG9kYXNoL2lzRGF0ZScpXHJcbnZhciBpc0VsZW1lbnQgPSByZXF1aXJlKCdsb2Rhc2gvaXNFbGVtZW50JylcclxudmFyIGlzRW1wdHkgPSByZXF1aXJlKCdsb2Rhc2gvaXNFbXB0eScpXHJcbnZhciBpc0Vycm9yID0gcmVxdWlyZSgnbG9kYXNoL2lzRXJyb3InKVxyXG52YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJ2xvZGFzaC9pc0Z1bmN0aW9uJylcclxudmFyIGlzTGVuZ3RoID0gcmVxdWlyZSgnbG9kYXNoL2lzTGVuZ3RoJylcclxudmFyIGlzTWFwID0gcmVxdWlyZSgnbG9kYXNoL2lzTWFwJylcclxudmFyIGlzTmF0aXZlID0gcmVxdWlyZSgnbG9kYXNoL2lzTmF0aXZlJylcclxudmFyIGlzTmlsID0gcmVxdWlyZSgnbG9kYXNoL2lzTmlsJylcclxudmFyIGlzTnVsbCA9IHJlcXVpcmUoJ2xvZGFzaC9pc051bGwnKVxyXG52YXIgaXNOdW1iZXIgPSByZXF1aXJlKCdsb2Rhc2gvaXNOdW1iZXInKVxyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdsb2Rhc2gvaXNPYmplY3QnKVxyXG52YXIgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnbG9kYXNoL2lzT2JqZWN0TGlrZScpXHJcbnZhciBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2lzUGxhaW5PYmplY3QnKVxyXG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCdsb2Rhc2gvaXNSZWdFeHAnKVxyXG52YXIgaXNTZXQgPSByZXF1aXJlKCdsb2Rhc2gvaXNTZXQnKVxyXG52YXIgaXNTdHJpbmcgPSByZXF1aXJlKCdsb2Rhc2gvaXNTdHJpbmcnKVxyXG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCdsb2Rhc2gvaXNTeW1ib2wnKVxyXG52YXIgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnbG9kYXNoL2lzVHlwZWRBcnJheScpXHJcbnZhciBpc1VuZGVmaW5lZCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1VuZGVmaW5lZCcpXHJcbnZhciBpc1dlYWtNYXAgPSByZXF1aXJlKCdsb2Rhc2gvaXNXZWFrTWFwJylcclxudmFyIGlzV2Vha1NldCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1dlYWtTZXQnKVxyXG5cclxudmFyIGlzRXhpc3QgPSBmdW5jdGlvbiBpc0V4aXN0KG8pIHtcclxuICByZXR1cm4gIShpc1VuZGVmaW5lZChvKSB8fCBpc051bGwobykpXHJcbn1cclxuXHJcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5IChvKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xyXG59XHJcblxyXG52YXIgaXMgPSB7XHJcbiAgaXNBcmd1bWVudHM6IGlzQXJndW1lbnRzLFxyXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXHJcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxyXG4gIGlzQXJyYXlMaWtlT2JqZWN0OiBpc0FycmF5TGlrZU9iamVjdCxcclxuICBpc0Jvb2xlYW46IGlzQm9vbGVhbixcclxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXHJcbiAgaXNEYXRlOiBpc0RhdGUsXHJcbiAgaXNFbGVtZW50OiBpc0VsZW1lbnQsXHJcbiAgaXNFbXB0eTogaXNFbXB0eSxcclxuICBpc0Vycm9yOiBpc0Vycm9yLFxyXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXHJcbiAgaXNMZW5ndGg6IGlzTGVuZ3RoLFxyXG4gIGlzTWFwOiBpc01hcCxcclxuICBpc05hdGl2ZTogaXNOYXRpdmUsXHJcbiAgaXNOaWw6IGlzTmlsLFxyXG4gIGlzTnVsbDogaXNOdWxsLFxyXG4gIGlzTnVtYmVyOiBpc051bWJlcixcclxuICBpc09iamVjdDogaXNPYmplY3QsXHJcbiAgaXNPYmplY3RMaWtlOiBpc09iamVjdExpa2UsXHJcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcclxuICBpc1JlZ0V4cDogaXNSZWdFeHAsXHJcbiAgaXNTZXQ6IGlzU2V0LFxyXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcclxuICBpc1N5bWJvbDogaXNTeW1ib2wsXHJcbiAgaXNUeXBlZEFycmF5OiBpc1R5cGVkQXJyYXksXHJcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxyXG4gIGlzV2Vha01hcDogaXNXZWFrTWFwLFxyXG4gIGlzV2Vha1NldDogaXNXZWFrU2V0LFxyXG4gIGlzQXJyYXk6IGlzQXJyYXksXHJcbiAgaXNFeGlzdDogaXNFeGlzdFxyXG59XHJcblxyXG52YXIgbWVzc2FnZSA9IHJlcXVpcmUoJy4vbWVzc2FnZScpXHJcbnZhciBkZWYgPSByZXF1aXJlKCcuL2RlZicpXHJcbnZhciBlcXVhbCA9IHJlcXVpcmUoJy4vZXF1YWwnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY2hlY2s6IGNoZWNrLFxyXG4gIENoZWNrZXI6IENoZWNrZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWPguaVsOajgOafpeaWueazlVxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqIOimgeajgOafpeeahOWPguaVsFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDopoHmo4Dmn6XnmoTlj4LmlbDlkI3vvIjlj6/pgInvvIzmnInliqnkuo7nsr7noa7miZPljbDkv6Hmga/vvIlcclxuICogQHJldHVybnMg5qOA5p+l5ZmoXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVjayAob2JqLCBuYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBDaGVja2VyKG9iaiwgbmFtZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKm+WHuuW8guW4uFxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIg5byC5bi45a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvd0VyciAoZXJyKSB7XHJcbiAgZnVuY3Rpb24gX3Rocm93IChlcnIpIHtcclxuICAgIHRocm93IGVyclxyXG4gIH1cclxuXHJcbiAgaWYgKCFjaGVjay5fX1VUX18pIHtcclxuICAgIC8vIOWcqOmdnuWNleWFg+a1i+ivleeOr+Wig++8jOS4uuS6humYsuatouaKm+WHuueahOW8guW4uOiiq2NhdGNo77yM5byC5q2l5oqb5Ye65LiA5qyhXHJcbiAgICB0b0FzeW5jKF90aHJvdykoZXJyKVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgZXJyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlq3oqIBcclxuICpcclxuICogQHBhcmFtIHthbnl9IGV4cHIg5pat6KiA5Li655yf55qE6KGo6L6+5byPXHJcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBtZXNzYWdlIOmUmeivr+a2iOaBr1xyXG4gKi9cclxuZnVuY3Rpb24gdmVyaWZ5IChleHByLCBtZXNzYWdlKSB7XHJcbiAgaWYgKCFleHByKSB7XHJcbiAgICB2YXIgbXNnID0gaXNGdW5jdGlvbihtZXNzYWdlKSA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2VcclxuICAgIHRocm93RXJyKG5ldyBFcnJvcihtc2cpKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWGhemDqOS9v+eUqOeahOaWreiogFxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gZXhwciDmlq3oqIDkuLrnnJ/nmoTooajovr7lvI9cclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2Ug6ZSZ6K+v5raI5oGv77yI5LuF5omT5Y2w5pel5b+X77yJXHJcbiAqIEByZXR1cm5zIGV4cHLmmK/lkKbkuLrnnJ9cclxuICovXHJcbmZ1bmN0aW9uIHZlcmlmeUludGVybmFsIChleHByLCBtZXNzYWdlKSB7XHJcbiAgaWYgKCFleHByKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1tQQVJBTS1DSEVDSy1JTlRFUk5BTF0gJyArIG1lc3NhZ2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gISFleHByXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpppblrZfmr43lpKflhplcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciDopoHlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybiDpppblrZfmr43lpKflhpnlrZfnrKbkuLJcclxuICovXHJcbmZ1bmN0aW9uIGZpcnN0VXBwZXJDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXFMvZywgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9VcHBlckNhc2UoKSB9KVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5ZmoXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0ge2FueX0gb2JqIOimgeajgOafpeeahOWvueixoVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDopoHmo4Dmn6XnmoTlr7nosaHlkI3lrZfvvIjlj6/pgInvvIzmnInliqnkuo7nsr7noa7miZPljbDkv6Hmga/vvIlcclxuICogQHBhcmFtIHtDaGVja2VyfSBvd25lciDmiYDlsZ7lr7nosaHvvIjpk77lvI/osIPnlKhoYXPml7bkvb/nlKjvvIlcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrZXIgKG9iaiwgbmFtZSwgb3duZXIpIHtcclxuICB0aGlzLm9ial8gPSBvYmpcclxuICB0aGlzLm5hbWVfID0gbmFtZSB8fCAnW05hbWVsZXNzXSdcclxuICB0aGlzLm93bmVyID0gb3duZXJcclxuICB0aGlzLl8gPSBvd25lciAvLyBf5Li6b3duZXLnmoTnroDlhplcclxuXHJcbiAgLy8g5L2/55Sobm905bGe5oCn6I635Y+W5ZCm5a6a5qOA5p+l5ZmoXHJcbiAgdHJ5IHtcclxuICAgIGRlZih0aGlzLCAnbm90JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmV0ID0gdGhpcy5ub3RfIHx8ICh0aGlzLm5vdF8gPSBuZXcgTm90Q2hlY2tlcih0aGlzKSlcclxuICAgICAgcmV0dXJuIHJldFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aGlzLm5vdCA9IG5ldyBOb3RDaGVja2VyKHRoaXMpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5o2u57G75Z6LXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDnsbvlnovlkI3np7DvvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIHllcyA9IGZhbHNlXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgICBpZiAoIXZlcmlmeUludGVybmFsKGlzU3RyaW5nKGtleSksXHJcbiAgICAgICdCYWQgcGFyYW06IGFyZ3VtZW50c1snICsgaSArICddIGlzIE5PVCBzdHJpbmcnKSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGtleSA9ICdpcycgKyBmaXJzdFVwcGVyQ2FzZShrZXkpXHJcblxyXG4gICAgdmFyIGZuID0gaXNba2V5XVxyXG5cclxuICAgIGlmICh2ZXJpZnlJbnRlcm5hbChpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlzRnVuY3Rpb24oZm4pLFxyXG4gICAgICAnQmFkIHBhcmFtOiBhcmd1bWVudHNbJyArIGkgKyAnXSBpcyBOT1QgYSBsZWdhbCB0eXBlJykpIHtcclxuICAgICAgeWVzID0gZm4ob2JqKVxyXG4gICAgICBpZiAoeWVzKSBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KHllcywgbWVzc2FnZSgnaXMnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8vIGlzWFhY5pa55rOVXHJcbmZvciAodmFyIGVudHJ5IGluIGlzKSB7XHJcbiAgdmFyIGZuID0gaXNbZW50cnldXHJcblxyXG4gIGlmICghaXMuaGFzT3duUHJvcGVydHkoZW50cnkpIHx8ICFpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgY29udGludWVcclxuICB9XHJcblxyXG4gIChmdW5jdGlvbiAoZW50cnksIGZuKSB7XHJcbiAgICBDaGVja2VyLnByb3RvdHlwZVtlbnRyeV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBvYmogPSB0aGlzLm9ial9cclxuICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgICAgIHZlcmlmeShmbihvYmopLCBtZXNzYWdlKGVudHJ5LCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfSkoZW50cnksIGZuKVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5omA5bGe55qE57G777yI5L2/55SoaW5zdGFuY2VvZuWFs+mUruWtl+WIpOaWre+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3RvciDnsbtcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5pbnN0YW5jZU9mID0gZnVuY3Rpb24gKGN0b3IpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIGlmICh2ZXJpZnlJbnRlcm5hbChpc0Z1bmN0aW9uKGN0b3IpLCAnQmFkIHBhcmFtOiBjdG9yIGlzIE5PVCBhIGZ1bmN0aW9uJykpIHtcclxuICAgIHZlcmlmeShvYmogaW5zdGFuY2VvZiBjdG9yLCBtZXNzYWdlKCdpbnN0YW5jZU9mJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+S6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZ3QgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqID4gbiwgbWVzc2FnZSgnZ3QnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5aSn5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIvnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5ncmVhdGVyVGhhbiA9IENoZWNrZXIucHJvdG90eXBlLmd0XHJcblxyXG4vKipcclxuICog5aSn5LqO562J5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIvnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lZ3QgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqID49IG4sIG1lc3NhZ2UoJ2d0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+S6juetieS6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXF1YWxPckdyZWF0ZXJUaGFuID0gQ2hlY2tlci5wcm90b3R5cGUuZWd0XHJcblxyXG4vKipcclxuICog5bCP5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5sdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyJykpIHtcclxuICAgIHZlcmlmeShpc051bWJlcihvYmopLCBtZXNzYWdlKCdpc051bWJlcicsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICAgIHZlcmlmeShvYmogPCBuLCBtZXNzYWdlKCdsdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsI/kuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4iueVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmxlc3NUaGFuID0gQ2hlY2tlci5wcm90b3R5cGUubHRcclxuXHJcbi8qKlxyXG4gKiDlsI/kuo7nrYnkuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4iueVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmVsdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyJykpIHtcclxuICAgIHZlcmlmeShpc051bWJlcihvYmopLCBtZXNzYWdlKCdpc051bWJlcicsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICAgIHZlcmlmeShvYmogPD0gbiwgbWVzc2FnZSgnbHQnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5bCP5LqO562J5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lcXVhbE9yTGVzc1RoYW4gPSBDaGVja2VyLnByb3RvdHlwZS5lbHRcclxuXHJcbnZhciByZXhwUmFuZ2UgPSAvXihbKFtdKShbLStdP1tcXGQuXSspLFxccyooWy0rXT9bXFxkLl0rKShbXFxdKV0pJC9cclxuXHJcbi8vIOagueaNruaVsOWtpuihqOi+vuW8j+eUn+aIkOWIpOaWreWHveaVsFxyXG5mdW5jdGlvbiBnZW5SYW5nZUZuIChyYW5nZSkge1xyXG4gIGlmICghZ2VuUmFuZ2VGbi5jYWNoZSkge1xyXG4gICAgZ2VuUmFuZ2VGbi5jYWNoZSA9IHt9XHJcbiAgfVxyXG5cclxuICB2YXIgZm4gPSBnZW5SYW5nZUZuLmNhY2hlW3JhbmdlXVxyXG5cclxuICBpZiAoZm4pIHJldHVybiBmblxyXG5cclxuICBpZiAoIXZlcmlmeUludGVybmFsKGlzU3RyaW5nKHJhbmdlKSxcclxuICAgICdCYWQgcGFyYW06IHJhbmdlIGlzIE5PVCBzdHJpbmcnKSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHZhciBtYXRjaCA9IHJleHBSYW5nZS5leGVjKHJhbmdlKVxyXG5cclxuICBpZiAoIXZlcmlmeUludGVybmFsKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA9PT0gNSxcclxuICAgICdCYWQgcGFyYW06IGJhZCByYW5nZSBzdHJpbmc6ICcgKyByYW5nZSkpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIG9wMSA9IChtYXRjaFsxXSA9PT0gJ1snKSA/ICc+PScgOiAnPidcclxuICAgIHZhciBvcDIgPSAobWF0Y2hbMl0gPT09ICddJykgPyAnPD0nIDogJzwnXHJcbiAgICB2YXIgbG93ZXJCb3VuZCA9IHBhcnNlRmxvYXQobWF0Y2hbMl0pXHJcbiAgICB2YXIgaGlnaGVyQm91bmQgPSBwYXJzZUZsb2F0KG1hdGNoWzNdKVxyXG5cclxuICAgIHZhciBmblNvdXJjZSA9ICgncmV0dXJuIChuICRvcDEgJGxvd2VyQm91bmQpICYmIChuICRvcDIgJGhpZ2hlckJvdW5kKTsnKVxyXG4gICAgICAucmVwbGFjZSgnJG9wMScsIG9wMSlcclxuICAgICAgLnJlcGxhY2UoJyRsb3dlckJvdW5kJywgbG93ZXJCb3VuZClcclxuICAgICAgLnJlcGxhY2UoJyRvcDInLCBvcDIpXHJcbiAgICAgIC5yZXBsYWNlKCckaGlnaGVyQm91bmQnLCBoaWdoZXJCb3VuZClcclxuXHJcbiAgICAvKiBlc2xpbnQgbm8tbmV3LWZ1bmM6IFwiaWdub3JlXCIgKi9cclxuICAgIGZuID0gZ2VuUmFuZ2VGbi5jYWNoZVtyYW5nZV0gPSBuZXcgRnVuY3Rpb24oWyduJ10sIGZuU291cmNlKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHJldHVybiBmblxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5bGe5LqO5p+Q5Liq5Yy66Ze0XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmFuZ2Ug5Yy66Ze05a2X56ym5Liy77yM5b2i5aaC4oCcWzEsMinigJ3vvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS53aXRoaW4gPSBmdW5jdGlvbiAocmFuZ2UpIHtcclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG5cclxuICBpZiAobGVuID09PSAwKSB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciB5ZXMgPSBmYWxzZVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICB2YXIgcmFuZ2UgPSBhcmd1bWVudHNbaV1cclxuICAgIHZhciBmbiA9IGdlblJhbmdlRm4ocmFuZ2UpXHJcblxyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIHllcyA9ICBmbihvYmopXHJcbiAgICAgIGlmICh5ZXMpIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2ZXJpZnkoeWVzLCBtZXNzYWdlKCd3aXRoaW4nLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbnrKblkIjmraPliJnooajovr7lvI9cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7UmVnUnhwfSByZXhwIOato+WImeihqOi+vuW8j1xyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHJleHApIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfLFxyXG4gICAgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzUmVnRXhwKHJleHApLFxyXG5cdFx0XHQnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIHJlZ2V4cCcpKSB7XHJcbiAgICB2ZXJpZnkoaXNTdHJpbmcob2JqKSwgbWVzc2FnZSgnaXNTdHJpbmcnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkocmV4cC50ZXN0KG9iaiksIG1lc3NhZ2UoJ21hdGNoJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuebuOWQjO+8iOS9v+eUqD09PeWIpOaWre+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IG90aGVyXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuc2FtZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial8sXHJcbiAgICBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICB2ZXJpZnkoKG9iaiA9PT0gb3RoZXIpLCBtZXNzYWdlKCdzYW1lJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm55u4562J77yI5Y2zZGVlcCBlcXVhbO+8jOS4jeaUr+aMgWFyZ3VtZW505q+U6L6D77yM5aaC5p6c6ZyA6KaB5pu05o2iZXF1YWznrpfms5XvvIzor7fotYvlgLxjaGVjay5fZXF1YWw9e+S9oOeahGVxdWFs5Ye95pWwfe+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IG90aGVyXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIGVxID0gY2hlY2suX2VxdWFsIHx8IGZ1bmN0aW9uKGwsIHIpIHtyZXR1cm4gZXF1YWwobCwgciwgdHJ1ZSl9XHJcblxyXG4gIHZlcmlmeShlcShvYmosIG90aGVyKSwgbWVzc2FnZSgnZXEnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbnm7jnrYnvvIjljbNkZWVwIGVxdWFs77yM5LiN5pSv5oyBYXJndW1lbnTmr5TovoPvvIzlpoLmnpzpnIDopoHmm7TmjaJlcXVhbOeul+azle+8jOivt+i1i+WAvGNoZWNrLl9lcXVhbD175L2g55qEZXF1YWzlh73mlbB977yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0gb3RoZXJcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lcXVhbCA9IENoZWNrZXIucHJvdG90eXBlLmVxXHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pyJ5p+Q5Liq5bGe5oCn77yI5LiN5YyF5ous5Y6f5Z6L6ZO+5LiK55qE5bGe5oCn77yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcmV0dXJuIOS9v+eUqOebuOW6lOWxnuaAp+WAvOaehOmAoOeahENoZWNrZXLlr7nosaHvvIzkvb/nlKhvd25lcui3s+WbnuacrOWvueixoVxyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgdmVyaWZ5KGlzRXhpc3Qob2JqKSwgbWVzc2FnZSgnaXNFeGlzdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB2ZXJpZnkob2JqLmhhc093blByb3BlcnR5ICYmIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpLFxyXG5cdFx0bWVzc2FnZSgnaGFzJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gbmV3IENoZWNrZXIob2JqW2tleV0sIG5hbWUgKyAnLicgKyBrZXksIHRoaXMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmnInmn5DkuKrlsZ7mgKfvvIjkuI3ljIXmi6zljp/lnovpk77kuIrnmoTlsZ7mgKfvvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBrZXkg5bGe5oCn5ZCNXHJcbiAqIEByZXR1cm4g5L2/55So55u45bqU5bGe5oCn5YC85p6E6YCg55qEQ2hlY2tlcuWvueixoe+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5oYXNPd24gPSBDaGVja2VyLnByb3RvdHlwZS5oYXNcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmnInmn5DkuKrlsZ7mgKfvvIjljIXmi6zljp/lnovpk77kuIrnmoTlsZ7mgKfvvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBrZXkg5bGe5oCn5ZCNXHJcbiAqIEByZXR1cm4g5L2/55So55u45bqU5bGe5oCn5YC85p6E6YCg55qEQ2hlY2tlcuWvueixoe+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5nb3QgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICB2ZXJpZnkoaXNFeGlzdChvYmopLCBtZXNzYWdlKCdpc0V4aXN0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIHZlcmlmeSghaXNVbmRlZmluZWQob2JqW2tleV0pLCBtZXNzYWdlKCdnb3QnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiBuZXcgQ2hlY2tlcihvYmpba2V5XSwgbmFtZSArICcuJyArIGtleSwgdGhpcylcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaciWxlbmd0aOWxnuaAp++8iOWMheaLrOWOn+Wei+mTvuS4iueahOWxnuaAp++8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHJldHVybiDkvb/nlKhsZW5ndGjlsZ7mgKfmnoTpgKDnmoRDaGVja2Vy5a+56LGh77yM5L2/55Sob3duZXLot7Plm57mnKzlr7nosaFcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5nb3QoJ2xlbmd0aCcpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKhtYXDlh73mlbDovazljJblr7nosaHvvIzlubbov5Tlm57nlKjovazljJbov4fnmoTlr7nosaHmnoTpgKDnmoRDaGVja2VyXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30g6L2s5YyW5Ye95pWw77yM5aaC5p6c5Li65a2X56ym5Liy77yM5YiZ6LCD55So5b6F5qOA5p+l5a+56LGh5ZCM5ZCN5pa55rOV77yM5ZCO6Z2i55qE5Y+C5pWw5Lya5Lyg57uZ55u45bqU5pa55rOVXHJcbiAqIEByZXR1cm4g5L2/55So6L2s5YyW6L+H55qE5a+56LGh5p6E6YCg55qEQ2hlY2tlcu+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4pIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIG1hcE9ialxyXG5cclxuICB2ZXJpZnkoaXNFeGlzdChvYmopLCBtZXNzYWdlKCdpc0V4aXN0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgIG1hcE9iaiA9IGZuKG9iailcclxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZm4pKSB7XHJcbiAgICAgIHZhciBmID0gb2JqW2ZuXVxyXG4gICAgICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNGdW5jdGlvbihmKSxcclxuXHRcdFx0XHRcdCdCYWQgcGFyYW06IHRoZSBvYmogaGFzIE5PVCBnb3QgYSBtZXRob2QgY2FsbGVkJyArIGZuKSkge1xyXG4gICAgICAgIG1hcE9iaiA9IGYuYXBwbHkob2JqLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogZm4gaXMgaWxsZWdhbCcpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB2ZXJpZnkoZmFsc2UsIGVyci5tZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgdmFyIHN0ciA9IG5hbWUgKyAnPT4nICsgKGlzU3RyaW5nKGZuKSA/IGZuIDogKGZuLm5hbWUgfHwgJ1tBbm9ueW1vdXMgRnVuY3Rpb25dJykpXHJcbiAgcmV0dXJuIG5ldyBDaGVja2VyKG1hcE9iaiwgc3RyLCB0aGlzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2UgKGZuKSB7XHJcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWZuLmFwcGx5KHRoaXMsIGFyZ3MpKSB7XHJcbiAgICAgIHZhciBtZXNzYWdlID0gZm4ubmFtZSB8fCBmbi50b1N0cmluZygpXHJcblxyXG4gICAgICByZXR1cm4gbWVzc2FnZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIGVyci5tZXNzYWdlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5L2/55So6Ieq5a6a5LmJ5Ye95pWw5oiWcG9saWN55qOA5p+lXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBvbGljeX0gZm4g5qOA5p+l5Ye95pWw5oiWcG9saWN577yM5Y+C5pWw5Li65b6F5qOA5p+l5a+56LGhXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUubWVldCA9IGZ1bmN0aW9uIChmbikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgZXJyb3JNc2dcclxuXHJcbiAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICBlcnJvck1zZyA9IGVycm9yTWVzc2FnZShmbiwgb2JqKVxyXG4gIH0gZWxzZSBpZiAoZm4uaXNQb2xpY3kpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZuLl9fZXhlYyh0aGlzKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBlcnJvck1zZyA9IGZuLl9fcGF0aCgpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHZlcmlmeUludGVybmFsKGZhbHNlLCAnQmFkIHBhcmFtOiBmbiBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCFlcnJvck1zZywgbWVzc2FnZSgnbWVldCcsIG9iaiwgbmFtZSwgW2Vycm9yTXNnXSkpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjigJzkuJTigJ3lhbPns7vnu4TlkIjmo4Dmn6Xlh73mlbDmiJZwb2xpY3lcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258UG9saWN5fSB4IOWHveaVsOaIllBvbGljeeWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIGVycm9yTXNnXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBmbiA9IGFyZ3VtZW50c1tpXVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICBlcnJvck1zZyA9IGVycm9yTWVzc2FnZShmbiwgb2JqKVxyXG4gICAgICBpZiAoZXJyb3JNc2cpIHtcclxuICAgICAgICBlcnJvck1zZyA9IG1lc3NhZ2UoJ2FuZCcsIG9iaiwgbmFtZSwgW2ksIGVycm9yTXNnXSlcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZuLmlzUG9saWN5KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm4uX19leGVjKHRoaXMpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBlcnJvck1zZyA9IG1lc3NhZ2UoJ2FuZCcsIG9iaiwgbmFtZSwgW2ksIGZuLl9fcGF0aCgpXSlcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogYXJndW1lbnRbJyArIGkgKyAnXSBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCFlcnJvck1zZywgZXJyb3JNc2cpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjigJzmiJbigJ3lhbPns7vnu4TlkIjmo4Dmn6Xlh73mlbDmiJZwb2xpY3lcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258UG9saWN5fSB4IOWHveaVsOaIllBvbGljeeWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIHZhciBlcnJvckRldGFpbCA9IFtdXHJcbiAgdmFyIGVycm9yQ291bnQgPSAwXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBmbiA9IGFyZ3VtZW50c1tpXVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICB2YXIgZXJyb3JNc2cgPSBlcnJvck1lc3NhZ2UoZm4sIG9iailcclxuICAgICAgaWYgKGVycm9yTXNnKSB7XHJcbiAgICAgICAgZXJyb3JEZXRhaWwucHVzaChlcnJvck1zZylcclxuICAgICAgICBlcnJvckNvdW50KytcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVha1xyXG4gICAgfSBlbHNlIGlmIChmbi5pc1BvbGljeSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZuLl9fZXhlYyh0aGlzKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGZuLl9fcGF0aCgpKVxyXG4gICAgICAgIGVycm9yQ291bnQrK1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogYXJndW1lbnRbJyArIGkgKyAnXSBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KGVycm9yQ291bnQgPCBsZW4sIG1lc3NhZ2UoJ29yJywgb2JqLCBuYW1lLCBlcnJvckRldGFpbCkpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkKblrprmo4Dmn6XlmajvvIjlr7lDaGVja2Vy55qE5q+P5Liq5qOA5p+l5pa55rOV5Y+W4oCc6Z2e4oCd77yJXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHBhcmFtIHtDaGVja2VyfSBjaGVja2VyIFxyXG4gKi9cclxuZnVuY3Rpb24gTm90Q2hlY2tlciAoY2hlY2tlcikge1xyXG4gIHRoaXMuY2hlY2tlcl8gPSBjaGVja2VyXHJcbn1cclxuXHJcbmZvciAodmFyIG1ldGhvZE5hbWUgaW4gQ2hlY2tlci5wcm90b3R5cGUpIHtcclxuICB2YXIgbWV0aG9kID0gQ2hlY2tlci5wcm90b3R5cGVbbWV0aG9kTmFtZV1cclxuXHJcbiAgaWYgKCFDaGVja2VyLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShtZXRob2ROYW1lKSB8fFxyXG5cdFx0IWlzRnVuY3Rpb24obWV0aG9kKSkge1xyXG4gICAgY29udGludWVcclxuICB9XHJcblxyXG4gIE5vdENoZWNrZXIucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMuY2hlY2tlcl9cclxuICAgICAgdmFyIG9iaiA9IHRoYXQub2JqX1xyXG4gICAgICB2YXIgb2JqTmFtZSA9IHRoYXQubmFtZV9cclxuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXHJcbiAgICAgIHZhciB5ZXMgPSBmYWxzZVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGF0W25hbWVdLmFwcGx5KHRoYXQsIGFyZ3MpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdbUEFSQU0tQ0hFQ0tdJykgPT09IDApIHtcclxuICAgICAgICAgIHllcyA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgZXJyIC8vIOWGhemDqOmUmeivr++8jOmdnuajgOafpeWksei0pVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmVyaWZ5KHllcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlKG5hbWUsIG9iaiwgb2JqTmFtZSwgYXJncykoKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ1tQQVJBTS1DSEVDS10nLCAnW1BBUkFNLUNIRUNLXVtOT1RdJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGF0XHJcbiAgICB9XHJcbiAgfSkobWV0aG9kTmFtZSlcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9jaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqIEBmaWxlb3ZlcnZpZXdcclxuICog5qC55o2u5LiA5Liq5pa55rOV5pSv5oyB6ZO+5byP6LCD55So55qE57G7IEHvvIznlJ/miJDkuIDkuKrmj5Dlj5blhbbmlrnms5XnmoTigJxwb2xpY3nigJ3nsbvjgIJcclxuICog6ZO+5byP6LCD55SoIHBvbGljeSDnmoTmlrnms5XvvIzov5Tlm57kuIDkuKrlh73mlbDvvIzmiafooYzlh73mlbDljbPlj6/pk77lvI/miafooYwgQSDnmoTnm7jlupTmlrnms5XjgIJcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKVxyXG52YXIgZGVmID0gcmVxdWlyZSgnLi9kZWYnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtYWtlUG9saWN5XHJcblxyXG4vKipcclxuICog55Sf5oiQIHBvbGljeVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdG8g6KaB55Sf5oiQIHBvbGljeSDnmoTnsbvljp/lnotcclxuICogQHBhcmFtIGNoYWluaW5nUHJvcHMg5pSv5oyB6ZO+5byP6LCD55So55qE6Ieq5a6a5LmJ5bGe5oCn5ZCN5YiX6KGoXHJcbiAqIEBwYXJhbSBjaGFpbmluZ01ldGhvZHMg5pSv5oyB6ZO+5byP6LCD55So55qE5pa55rOV5ZCN5YiX6KGo77yM5aaC5p6c5LiN5aGr77yM6buY6K6k5omA5pyJ5pa55rOV6YO95pSv5oyB6ZO+5byP6LCD55SoXHJcbiAqIEByZXR1cm4g55Sf5oiQ55qEIHBvbGljeSDlrp7kvotcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VQb2xpY3kgKHByb3RvLCBjaGFpbmluZ1Byb3BzLCBjaGFpbmluZ01ldGhvZHMpIHtcclxuICBmdW5jdGlvbiBQb2xpY3kgKGZuLCBwcmV2LCBuYW1lKSB7XHJcbiAgICB0aGlzLmZuXyA9IGZuXHJcbiAgICB0aGlzLnByZXZfID0gcHJldlxyXG4gICAgdGhpcy5uYW1lXyA9IG5hbWVcclxuICAgIHRoaXMuX19pbml0Q3VzdG9tUHJvcHMoY2hhaW5pbmdQcm9wcylcclxuICB9XHJcblxyXG4gIFBvbGljeS5wcm90b3R5cGUuaXNQb2xpY3kgPSB0cnVlXHJcblxyXG4gIC8vIOWboOS4uiBQb2xpY3kucHJvdG90eXBlIOS4iuS8mua3u+WKoOiuuOWkmuWQjeWtl+acquefpeeahOaWueazle+8jOaJgOS7peiHquW3seeahOaWueazleWKoFwiX19cIuS7peinhOmBv+mHjeWQjVxyXG4gIFBvbGljeS5wcm90b3R5cGUuX19pbml0Q3VzdG9tUHJvcHMgPSBmdW5jdGlvbiAoY2hhaW5pbmdQcm9wcykge1xyXG4gICAgaWYgKGNoYWluaW5nUHJvcHMgJiYgY2hhaW5pbmdQcm9wcy5sZW5ndGgpIHtcclxuICAgICAgdmFyIGxlbiA9IGNoYWluaW5nUHJvcHMubGVuZ3RoXHJcbiAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHZhciBwcm9wTmFtZSA9IGNoYWluaW5nUHJvcHNbaV1cclxuICAgICAgICB2YXIgZm4gPSAoZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9saWN5KGZ1bmN0aW9uICh0aGF0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXRbcHJvcF1cclxuICAgICAgICAgICAgfSwgc2VsZiwgcHJvcClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShwcm9wTmFtZSlcclxuXHJcbiAgICAgICAgZGVmKHRoaXMsIHByb3BOYW1lLCBmbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUG9saWN5LnByb3RvdHlwZS5fX2V4ZWMgPSBmdW5jdGlvbiAodGhhdCkge1xyXG4gICAgdmFyIG15VGhhdCA9IHRoYXRcclxuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2X1xyXG4gICAgdmFyIGZuID0gdGhpcy5mbl9cclxuXHJcbiAgICBpZiAocHJldikge1xyXG4gICAgICBteVRoYXQgPSBwcmV2Ll9fZXhlYyh0aGF0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICByZXR1cm4gZm4obXlUaGF0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGF0XHJcbiAgfVxyXG5cclxuICBQb2xpY3kucHJvdG90eXBlLl9fcGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2X1xyXG4gICAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgICB2YXIgcmV0ID0gcHJldiA/IHByZXYuX19wYXRoKCkgOiAnJ1xyXG5cclxuICAgIHJldCArPSAnLicgKyBuYW1lXHJcblxyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIga2V5IGluIHByb3RvKSB7XHJcbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KGtleSkgfHwgIWlzRnVuY3Rpb24ocHJvdG9ba2V5XSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhaW5pbmdNZXRob2RzICYmIGNoYWluaW5nTWV0aG9kcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgUG9saWN5LnByb3RvdHlwZVtrZXldID0gKGZ1bmN0aW9uIChmbk5hbWUpIHtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMClcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2xpY3koZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0W2ZuTmFtZV0uYXBwbHkodGhhdCwgYXJncylcclxuICAgICAgICB9LCBzZWxmLCBmbk5hbWUpXHJcbiAgICAgIH1cclxuICAgIH0pKGtleSlcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUG9saWN5KG51bGwsIG51bGwsICdwb2xpY3knKVxyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3BvbGljeS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBmaWxlIOWvvOWHuuaOpeWPo1xyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIGNoZWNrID0gcmVxdWlyZSgnLi9saWIvY2hlY2snKVxyXG52YXIgbWFrZVBvbGljeSA9IHJlcXVpcmUoJy4vbGliL3BvbGljeScpXHJcblxyXG52YXIgZXhwbyA9IGNoZWNrLmNoZWNrXHJcbmV4cG8ucG9saWN5ID0gbWFrZVBvbGljeShjaGVjay5DaGVja2VyLnByb3RvdHlwZSwgWydub3QnLCAnb3duZXInXSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuICogQGZpbGUgZGVlcCBlcXVhbOWunueOsFxyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIGRlZXAgZXF1YWxcclxuICpcclxuICogQHBhcmFtICB7YW55fSBsZWZ0IOWPguaVsDFcclxuICogQHBhcmFtICB7YW55fSByaWdodCDlj4LmlbAyXHJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHN0cmljdCDlpoLmnpzkuLpmYWxzZe+8jOWImT095oiQ56uL5pe25Y2z6L+U5ZuedHJ1ZVxyXG4gKiBAcmV0dXJuIHtCb29sZWFufSDmr5TovoPnu5PmnpxcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwgKGxlZnQsIHJpZ2h0LCBzdHJpY3QpIHtcclxuICBpZiAobGVmdCA9PT0gcmlnaHQpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoIWxlZnQgfHwgIXJpZ2h0IHx8IC8vIOmSiOWvueWFtuS4reS4gOS4quaYr251bGznmoTmg4XlhrVcclxuICAgIHR5cGVvZiBsZWZ0ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gc3RyaWN0ID8gKGxlZnQgPT09IHJpZ2h0KSA6IChsZWZ0ID09IHJpZ2h0KVxyXG4gIH1cclxuXHJcbiAgaWYgKGxlZnQgaW5zdGFuY2VvZiBEYXRlICYmIHJpZ2h0IGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgcmV0dXJuIGxlZnQuZ2V0VGltZSgpID09PSByaWdodC5nZXRUaW1lKClcclxuICB9XHJcblxyXG4gIC8vIOeUn+aIkOato+WImeihqOi+vuW8j+agh+azqFxyXG4gIHZhciBnZW5GbGFncyA9IGZ1bmN0aW9uIChyZXhwKSB7XHJcbiAgICByZXR1cm4gKHJleHAuZ2xvYmFsID8gJ2cnIDogJycpICsgKHJleHAuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXHJcbiAgICAgIChyZXhwLm11bHRpbGluZSA/ICdtJyA6ICcnKSArIChyZXhwLnN0aWNreSA/ICd5JyA6ICcnKVxyXG4gIH1cclxuXHJcbiAgaWYgKGxlZnQgaW5zdGFuY2VvZiBSZWdFeHAgJiYgcmlnaHQgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgIHJldHVybiBsZWZ0LnRvU3RyaW5nKCkgPT09IHJpZ2h0LnRvU3RyaW5nKCkgJiYgZ2VuRmxhZ3MobGVmdCkgPT09IGdlbkZsYWdzKHJpZ2h0KVxyXG4gIH1cclxuXHJcbiAgaWYgKGxlZnQuY29uc3RydWN0b3IucHJvdG90eXBlICE9PSByaWdodC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgdmFyIGtMZWZ0ID0gT2JqZWN0LmtleXMobGVmdClcclxuICB2YXIga1JpZ2h0ID0gT2JqZWN0LmtleXMocmlnaHQpXHJcblxyXG4gIGlmIChrTGVmdC5sZW5ndGggIT09IGtSaWdodC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAga0xlZnQuc29ydCgpXHJcbiAga1JpZ2h0LnNvcnQoKVxyXG5cclxuICBpZiAoIWtMZWZ0LmV2ZXJ5KGZ1bmN0aW9uIChlbCwgaW5kZXgpIHsgcmV0dXJuIGVsID09PSBrUmlnaHRbaW5kZXhdIH0pKSB7XHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHZhciByZXQgPSBrTGVmdC5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICByZXR1cm4gZXF1YWwobGVmdFtrZXldLCByaWdodFtrZXldKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiByZXRcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2xpYi9lcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBmaWxlIOmUmeivr+a2iOaBr1xyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbnZhciBpc1N0cmluZyA9IHJlcXVpcmUoJ2xvZGFzaC9pc1N0cmluZycpXHJcblxyXG4vLyBleHBvcnTkuIDkuKrnlJ/miJDlh73mlbDnmoTlh73mlbDvvIzmmK/lm6DkuLrlpKflpJrmlbDml7blgJltZXNzYWdl5LiN6ZyA6KaB5omT5Y2w77yM5q2k5pe25bm25LiN6ZyA6KaB55yf55qE6K6h566XbWVzc2FnZeaYr+S7gOS5iFxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbnRyeSwgb2JqLCBuYW1lLCBhcmdzKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBtZXNzYWdlKGVudHJ5LCBvYmosIG5hbWUsIGFyZ3MpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmludFN0cmluZyAob2JqKSB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKG9iaikgPyAoJ1wiJyArIG9iaiArICdcIicpIDogKCcnICsgb2JqKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlIChlbnRyeSwgb2JqLCBuYW1lLCBhcmdzKSB7XHJcbiAgdmFyIHJlYXNvblxyXG5cclxuICBpZiAoZW50cnkgPT09ICdpcycpIHtcclxuICAgIHJlYXNvbiA9ICdpcyBOT1QgJyArIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJncywgJywgJylcclxuICB9IGVsc2UgaWYgKGVudHJ5LmluZGV4T2YoJ2lzJykgPT09IDApIHtcclxuICAgIHJlYXNvbiA9ICdpcyBOT1QgYShuKSAnICsgZW50cnkucmVwbGFjZSgvXmlzLywgJycpLnRvTG93ZXJDYXNlKClcclxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnaW5zdGFuY2VPZicpIHtcclxuICAgIHZhciBjdG9yTmFtZSA9IChhcmdzWzBdIHx8IHt9KS5uYW1lIHx8ICdbdW5rbm93bl0nXHJcbiAgICByZWFzb24gPSAnaXMgTk9UIGFuIGluc3RhbmNlIG9mIGdpdmVuIGNvbnN0cnVjdG9yOiAnICsgY3Rvck5hbWVcclxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnZ3QnIHx8IGVudHJ5ID09PSAnZ3JlYXRlclRoYW4nKSB7XHJcbiAgICByZWFzb24gPSAnaXMgTk9UIGdyZWF0ZXIgdGhhbiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcclxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnbHQnIHx8IGVudHJ5ID09PSAnbGVzc1RoYW4nKSB7XHJcbiAgICByZWFzb24gPSAnaXMgTk9UIGxlc3MgdGhhbiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcclxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnZWd0JyB8fCBlbnRyeSA9PT0gJ2VxdWFsT3JHcmVhdGVyVGhhbicpIHtcclxuICAgIHJlYXNvbiA9ICdpcyBOT1QgZ3JlYXRlciB0aGFuICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxyXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdlbHQnIHx8IGVudHJ5ID09PSAnZXF1YWxPckxlc3NUaGFuJykge1xyXG4gICAgcmVhc29uID0gJ2lzIE5PVCBsZXNzIHRoYW4gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXHJcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ3dpdGhpbicpIHtcclxuICAgIHJlYXNvbiA9ICdpcyBOT1QgaW4gcmFuZ2Uocyk6ICcgKyBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKGFyZ3MsICcsICcpXHJcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ21hdGNoJykge1xyXG4gICAgcmVhc29uID0gJ2RvZXMgTk9UIG1hdGNoIHJlZ2V4cDogJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXHJcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ3NhbWUnKSB7XHJcbiAgICByZWFzb24gPSAnaXMgTk9UIHRoZSBzYW1lIG9iamVjdCB0byAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcclxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnZXEnIHx8IGVudHJ5ID09PSAnZXF1YWwnKSB7XHJcbiAgICByZWFzb24gPSAnaXMgTk9UIGVxdWFsIHRvICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxyXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdoYXMnIHx8IGVudHJ5ID09PSAnaGFzT3duJykge1xyXG4gICAgcmVhc29uID0gJ2hhcyBOTyBvd24gcHJvcGVydHk6ICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxyXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdnb3QnKSB7XHJcbiAgICByZWFzb24gPSAnaGFzIE5PVCBwcm9wZXJ0eTogJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXHJcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2FuZCcpIHtcclxuICAgIC8vIGFyZ3NbMF0g5piv5omn6KGM5aSx6LSl55qE5qOA5p+l5bqP5Y+3LGFyZ3NbMV0g5piv5YW35L2T5Y6f5ZugXHJcbiAgICB2YXIgbm8gPSBhcmdzWzBdXHJcbiAgICB2YXIgZGV0YWlsID0gYXJnc1sxXSB8fCAndW5rbm93bidcclxuXHJcbiAgICBpZiAoZGV0YWlsLmlzUG9saWN5KSB7XHJcbiAgICAgIGRldGFpbCA9IGRldGFpbC5wYXRoKClcclxuICAgIH1cclxuXHJcbiAgICByZWFzb24gPSAnZG9lcyBOT1QgcGFzcyB0aGUgWycgK1xyXG4gICAgICBubyArICdddGggb2YgYW4gXCJBTkRcIiBjaGVjaywgZGV0YWlsOiB7JyArIGRldGFpbCArICd9J1xyXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdvcicpIHtcclxuICAgIHZhciBkZXRhaWxzID0gW11cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgZGV0YWlsID0gYXJnc1tpXSB8fCAndW5rbm93bidcclxuXHJcbiAgICAgIGlmIChkZXRhaWwuaXNQb2xpY3kpIHtcclxuICAgICAgICBkZXRhaWwgPSBkZXRhaWwucGF0aCgpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRldGFpbHMucHVzaChkZXRhaWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmVhc29uID0gJ2RvZXMgTk9UIHBhc3MgYW4gXCJPUlwiIGNoZWNrLCBkZXRhaWw6IHsnICsgZGV0YWlscy5qb2luKCd9eycpICsgJ30nXHJcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ21lZXQnKSB7XHJcbiAgICByZWFzb24gPSAnZG9lcyBOT1QgcGFzcyB0aGUgY2hlY2ssIGRldGFpbDogeycgKyBhcmdzWzBdICsgJ30nXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlYXNvbiA9ICdkb2VzIE5PVCBwYXNzIHRoZSBjaGVjayAnICsgZW50cnlcclxuICB9XHJcblxyXG4gIHJldHVybiAnW1BBUkFNLUNIRUNLXSBDaGVjayBGYWlsdXJlOiAnICsgbmFtZSArICcoJyArIHByaW50U3RyaW5nKG9iaikgKyAnKSAnICsgcmVhc29uICsgJy4nXHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9saWIvbWVzc2FnZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXHJcbiAqIEBmaWxlIOWwhuWHveaVsOi9rOWMluS4uuW8guatpeWHveaVsFxyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiDlsIblh73mlbDovazljJbkuLrlvILmraXlh73mlbBcclxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuIOi+k+WFpeWHveaVsFxyXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0g6L6T5Ye65Ye95pWwXHJcbiAqIEBleHBvcnRcclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXN5bmNDYXN0IChmbikge1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZuIGlzIE5PVCBhIGZ1bmN0aW9uLicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhc3luY0ZuICgpIHtcclxuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG4gICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGZuLmFwcGx5KHNlbGYsIGFyZ3MpXHJcbiAgICB9LCAwKVxyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGRlYnVnXHJcbiAgYXN5bmNGbi5vcmlnaW5hbEZ1bmN0aW9uID0gZm5cclxuXHJcbiAgcmV0dXJuIGFzeW5jRm5cclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXN5bmMtY2FzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJyYXlCdWZmZXJgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5IGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNBcnJheUJ1ZmZlcih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcnJheUJ1ZmZlclRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcnJheUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0RhdGVgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZGF0ZSBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBkYXRlVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0RhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNEYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNSZWdFeHBgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcmVnZXhwLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1JlZ0V4cCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSByZWdleHBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzU2V0YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHNldCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBzZXRUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBpcyBjYXBhYmxlIG9mIGJlaW5nIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2thYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbnZhciBpc01hc2thYmxlID0gY29yZUpzRGF0YSA/IGlzRnVuY3Rpb24gOiBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrYWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2FibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FycmF5QnVmZmVyJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc0FycmF5QnVmZmVyID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNBcnJheUJ1ZmZlcjtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheUJ1ZmZlcmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5IGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlCdWZmZXIobmV3IEFycmF5QnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlCdWZmZXIobmV3IEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5QnVmZmVyID0gbm9kZUlzQXJyYXlCdWZmZXIgPyBiYXNlVW5hcnkobm9kZUlzQXJyYXlCdWZmZXIpIDogYmFzZUlzQXJyYXlCdWZmZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBib29sZWFuIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBib29sZWFuLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCb29sZWFuKGZhbHNlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQm9vbGVhbihudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYm9vbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCb29sZWFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Jvb2xlYW4uanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNEYXRlID0gcmVxdWlyZSgnLi9fYmFzZUlzRGF0ZScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNEYXRlID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNEYXRlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRGF0ZWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZGF0ZSBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0RhdGUobmV3IERhdGUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNEYXRlKCdNb24gQXByaWwgMjMgMjAxMicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzRGF0ZSA9IG5vZGVJc0RhdGUgPyBiYXNlVW5hcnkobm9kZUlzRGF0ZSkgOiBiYXNlSXNEYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRGF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNEYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgRE9NIGVsZW1lbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBET00gZWxlbWVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRWxlbWVudChkb2N1bWVudC5ib2R5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRWxlbWVudCgnPGJvZHk+Jyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0VsZW1lbnQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgdmFsdWUubm9kZVR5cGUgPT09IDEgJiYgIWlzUGxhaW5PYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRWxlbWVudDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNFbGVtZW50LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IG9iamVjdCwgY29sbGVjdGlvbiwgbWFwLCBvciBzZXQuXG4gKlxuICogT2JqZWN0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgbm8gb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkXG4gKiBwcm9wZXJ0aWVzLlxuICpcbiAqIEFycmF5LWxpa2UgdmFsdWVzIHN1Y2ggYXMgYGFyZ3VtZW50c2Agb2JqZWN0cywgYXJyYXlzLCBidWZmZXJzLCBzdHJpbmdzLCBvclxuICogalF1ZXJ5LWxpa2UgY29sbGVjdGlvbnMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYGxlbmd0aGAgb2YgYDBgLlxuICogU2ltaWxhcmx5LCBtYXBzIGFuZCBzZXRzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBzaXplYCBvZiBgMGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0VtcHR5KG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNFbXB0eSh0cnVlKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRW1wdHkoMSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0VtcHR5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNFbXB0eSh7ICdhJzogMSB9KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAoaXNBcnJheSh2YWx1ZSkgfHwgdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWx1ZS5zcGxpY2UgPT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICBpc0J1ZmZlcih2YWx1ZSkgfHwgaXNUeXBlZEFycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGg7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSk7XG4gIGlmICh0YWcgPT0gbWFwVGFnIHx8IHRhZyA9PSBzZXRUYWcpIHtcbiAgICByZXR1cm4gIXZhbHVlLnNpemU7XG4gIH1cbiAgaWYgKGlzUHJvdG90eXBlKHZhbHVlKSkge1xuICAgIHJldHVybiAhYmFzZUtleXModmFsdWUpLmxlbmd0aDtcbiAgfVxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0VtcHR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0VtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpLFxuICAgIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL2lzUGxhaW5PYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGRvbUV4Y1RhZyA9ICdbb2JqZWN0IERPTUV4Y2VwdGlvbl0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhbiBgRXJyb3JgLCBgRXZhbEVycm9yYCwgYFJhbmdlRXJyb3JgLCBgUmVmZXJlbmNlRXJyb3JgLFxuICogYFN5bnRheEVycm9yYCwgYFR5cGVFcnJvcmAsIG9yIGBVUklFcnJvcmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGVycm9yIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRXJyb3IobmV3IEVycm9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRXJyb3IoRXJyb3IpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcnJvcih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGVycm9yVGFnIHx8IHRhZyA9PSBkb21FeGNUYWcgfHxcbiAgICAodHlwZW9mIHZhbHVlLm1lc3NhZ2UgPT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlLm5hbWUgPT0gJ3N0cmluZycgJiYgIWlzUGxhaW5PYmplY3QodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Vycm9yO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTWFwID0gcmVxdWlyZSgnLi9fYmFzZUlzTWFwJyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc01hcCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzTWFwO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTWFwYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc01hcChuZXcgTWFwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTWFwKG5ldyBXZWFrTWFwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc01hcCA9IG5vZGVJc01hcCA/IGJhc2VVbmFyeShub2RlSXNNYXApIDogYmFzZUlzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGlzTWFza2FibGUgPSByZXF1aXJlKCcuL19pc01hc2thYmxlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBDT1JFX0VSUk9SX1RFWFQgPSAnVW5zdXBwb3J0ZWQgY29yZS1qcyB1c2UuIFRyeSBodHRwczovL25wbXMuaW8vc2VhcmNoP3E9cG9ueWZpbGwuJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByaXN0aW5lIG5hdGl2ZSBmdW5jdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgY2FuJ3QgcmVsaWFibHkgZGV0ZWN0IG5hdGl2ZSBmdW5jdGlvbnMgaW4gdGhlIHByZXNlbmNlXG4gKiBvZiB0aGUgY29yZS1qcyBwYWNrYWdlIGJlY2F1c2UgY29yZS1qcyBjaXJjdW12ZW50cyB0aGlzIGtpbmQgb2YgZGV0ZWN0aW9uLlxuICogRGVzcGl0ZSBtdWx0aXBsZSByZXF1ZXN0cywgdGhlIGNvcmUtanMgbWFpbnRhaW5lciBoYXMgbWFkZSBpdCBjbGVhcjogYW55XG4gKiBhdHRlbXB0IHRvIGZpeCB0aGUgZGV0ZWN0aW9uIHdpbGwgYmUgb2JzdHJ1Y3RlZC4gQXMgYSByZXN1bHQsIHdlJ3JlIGxlZnRcbiAqIHdpdGggbGl0dGxlIGNob2ljZSBidXQgdG8gdGhyb3cgYW4gZXJyb3IuIFVuZm9ydHVuYXRlbHksIHRoaXMgYWxzbyBhZmZlY3RzXG4gKiBwYWNrYWdlcywgbGlrZSBbYmFiZWwtcG9seWZpbGxdKGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2JhYmVsLXBvbHlmaWxsKSxcbiAqIHdoaWNoIHJlbHkgb24gY29yZS1qcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOYXRpdmUoQXJyYXkucHJvdG90eXBlLnB1c2gpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYXRpdmUoXyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoaXNNYXNrYWJsZSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoQ09SRV9FUlJPUl9URVhUKTtcbiAgfVxuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG51bGxpc2gsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05pbChudWxsKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmlsKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc05pbChOYU4pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOaWwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOaWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTmlsLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgbnVsbGAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bGwobnVsbCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bGwodm9pZCAwKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOdWxsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc051bGwuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE51bWJlcmAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiAqKk5vdGU6KiogVG8gZXhjbHVkZSBgSW5maW5pdHlgLCBgLUluZmluaXR5YCwgYW5kIGBOYU5gLCB3aGljaCBhcmVcbiAqIGNsYXNzaWZpZWQgYXMgbnVtYmVycywgdXNlIHRoZSBgXy5pc0Zpbml0ZWAgbWV0aG9kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdW1iZXIoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gbnVtYmVyVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNOdW1iZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNSZWdFeHAgPSByZXF1aXJlKCcuL19iYXNlSXNSZWdFeHAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzUmVnRXhwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNSZWdFeHA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBSZWdFeHBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHJlZ2V4cCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzUmVnRXhwKC9hYmMvKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUmVnRXhwKCcvYWJjLycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzUmVnRXhwID0gbm9kZUlzUmVnRXhwID8gYmFzZVVuYXJ5KG5vZGVJc1JlZ0V4cCkgOiBiYXNlSXNSZWdFeHA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgdW5kZWZpbmVkYCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKHZvaWQgMCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1VuZGVmaW5lZChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVW5kZWZpbmVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1VuZGVmaW5lZC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgV2Vha01hcGAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgd2VhayBtYXAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1dlYWtNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNXZWFrTWFwKG5ldyBNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNXZWFrTWFwKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gd2Vha01hcFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHdlYWtTZXRUYWcgPSAnW29iamVjdCBXZWFrU2V0XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBXZWFrU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB3ZWFrIHNldCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzV2Vha1NldChuZXcgV2Vha1NldCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1dlYWtTZXQobmV3IFNldCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1dlYWtTZXQodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gd2Vha1NldFRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dlYWtTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzV2Vha1NldC5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQ2hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*istanbul ignore next*/(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.is = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.isUndefined = isUndefined;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isString = isString;
  exports.isBoolean = isBoolean;
  exports.isDate = isDate;
  exports.isRegExp = isRegExp;
  exports.isError = isError;
  exports.isFunction = isFunction;
  exports.isObject = isObject;
  exports.isExist = isExist;
  exports.isPrimitive = isPrimitive;
  exports.isArray = isArray;
  exports.isArrayLike = isArrayLike;
  exports.isPlainObject = isPlainObject;
  exports.isHTMLElement = isHTMLElement;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  /**
   * @file 数据类型判断.
   * @author Y3G
   */

  /**
   * 是否未定义
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isUndefined(o) {
    return o === void 0;
  }

  /**
   * 是否为null
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isNull(o) {
    return o === null;
  }

  /**
   * 是否为数字
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isNumber(o) {
    return Object.prototype.toString.call(o) === '[object Number]';
  }

  /**
   * 是否为字符串
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isString(o) {
    return Object.prototype.toString.call(o) === '[object String]';
  }

  /**
   * 是否为布尔值
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isBoolean(o) {
    return o === true || o === false || Object.prototype.toString.call(o) === '[object Boolean]';
  }

  /**
   * 是否为日期
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isDate(o) {
    return Object.prototype.toString.call(o) === '[object Date]';
  }

  /**
   * 是否为正则表达式
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isRegExp(o) {
    return Object.prototype.toString.call(o) === '[object RegExp]';
  }

  /**
   * 是否为Error
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isError(o) {
    return Object.prototype.toString.call(o) === '[object Error]';
  }

  /**
   * 是否为函数
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isFunction(o) {
    return Object.prototype.toString.call(o) === '[object Function]';
  }

  /**
   * 是否为对象
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isObject(o) {
    var type = /*istanbul ignore next*/typeof o === 'undefined' ? 'undefined' : _typeof(o);
    return !!o && (type === 'object' || type === 'function');
  }

  /**
   * 是否存在
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isExist(o) {
    return !isUndefined(o) && !isNull(o);
  }

  /**
   * 是否是基本类型
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isPrimitive(o) {
    return isUndefined(o) || isNull(o) || typeof o === 'number' || typeof o === 'boolean' || typeof o === 'string';
  }

  /**
   * 是否为数组
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isArray(o) {
    if (Array.isArray) {
      return Array.isArray(o);
    }

    return Object.prototype.toString.call(o) === '[object Array]';
  }

  /**
   * 是否为仿数组
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isArrayLike(o) {
    if (!isExist(o) || isFunction(o)) {
      return false;
    }

    var len = o.length;

    return isNumber(len) && len >= 0;
  }

  /**
   * 是否为plain对象
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isPlainObject(o) {
    if (!o || o.toString() !== '[object Object]' || o.nodeType || o.setInterval) {
      return false;
    }

    // constructor是对创建对象的函数的引用。对于Object对象，该指针指向原始的Object()函数
    // 判断obj是否具有isPrototypeOf属性，isPrototypeOf是挂在Object.prototype上的
    // 通过字面量或自定义类（构造器）创建的对象都会继承该属性方法
    if (o.constructor && !o.hasOwnProperty('constructor') && !o.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
      return false;
    }

    for (var key in o) {}

    return isUndefined(key) || o.hasOwnProperty(key);
  }

  /**
   * 是否为HTMLElement
   * @param o 目标对象
   * @return {Boolean} 判断结果
   * @export
   */
  function isHTMLElement(o) {
    /* global HTMLElement */
    if (HTMLElement) {
      return o instanceof HTMLElement;
    }

    return !!o && o.nodeType === 1 && typeof o.nodeName === 'string';
  }

  /**
   * 接口聚合
   */
  exports.default = {
    isUndefined: isUndefined,
    isNull: isNull,
    isNumber: isNumber,
    isString: isString,
    isBoolean: isBoolean,
    isDate: isDate,
    isRegExp: isRegExp,
    isError: isError,
    isFunction: isFunction,
    isObject: isObject,
    isExist: isExist,
    isArray: isArray,
    isArrayLike: isArrayLike,
    isPlainObject: isPlainObject,
    isHTMLElement: isHTMLElement,
    isPrimitive: isPrimitive
  };
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 自定义属性
 * @author Y3G
 */



module.exports = def;

/**
 * 定义自定义属性
 *
 * @param {Object} that 要定义属性的对象
 * @param {String} key 属性名
 * @param {Function} getter 读函数
 * @param {Function} setter 写函数
 * @throws 属性不可自定义
 */
function def(that, key, getter, setter) {
  if (Object.getOwnPropertyDescriptor) {
    var property = Object.getOwnPropertyDescriptor(that, key);
    if (property && property.configurable === false) {
      throw new Error(key + 'is NOT a configurable property.');
    }
  }

  Object.defineProperty(that, key, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 参数检查器
 * @author Y3G
 */



var is = __webpack_require__(0);
var toAsync = __webpack_require__(7);

var message = __webpack_require__(6);
var def = __webpack_require__(1);
var equal = __webpack_require__(5);

var isFunction = is.isFunction;
var isString = is.isString;
var isNumber = is.isNumber;
var isUndefined = is.isUndefined;
var isExist = is.isExist;
var isRegExp = is.isRegExp;

module.exports = {
  check: check,
  Checker: Checker
};

/**
 * 参数检查方法
 *
 * @param {any} obj 要检查的参数
 * @param {String} name 要检查的参数名（可选，有助于精确打印信息）
 * @returns 检查器
 */
function check(obj, name) {
  return new Checker(obj, name);
}

/**
 * 抛出异常
 *
 * @param {Error} err 异常对象
 */
function throwErr(err) {
  function _throw(err) {
    throw err;
  }

  if (!check.__UT__) {
    // 在非单元测试环境，为了防止抛出的异常被catch，异步抛出一次
    toAsync(_throw)(err);
  }

  throw err;
}

/**
 * 断言
 *
 * @param {any} expr 断言为真的表达式
 * @param {String|Function} message 错误消息
 */
function verify(expr, message) {
  if (!expr) {
    var msg = isFunction(message) ? message() : message;
    throwErr(new Error(msg));
  }
}

/**
 * 内部使用的断言
 *
 * @param {any} expr 断言为真的表达式
 * @param {String} message 错误消息（仅打印日志）
 * @returns expr是否为真
 */
function verifyInternal(expr, message) {
  if (!expr) {
    console.warn('[PARAM-CHECK-INTERNAL] ' + message);
  }

  return !!expr;
}

/**
 * 首字母大写
 *
 * @param {String} str 要处理的字符串
 * @return 首字母大写字符串
 */
function firstUpperCase(str) {
  return str.replace(/^\S/g, function (s) {
    return s.toUpperCase();
  });
}

/**
 * 检查器
 *
 * @class
 * @param {any} obj 要检查的对象
 * @param {String} name 要检查的对象名字（可选，有助于精确打印信息）
 * @param {Checker} owner 所属对象（链式调用has时使用）
 */
function Checker(obj, name, owner) {
  this.obj_ = obj;
  this.name_ = name || '[Nameless]';
  this.owner = owner;
  this._ = owner; // _为owner的简写

  // 使用not属性获取否定检查器
  try {
    def(this, 'not', function () {
      var ret = this.not_ || (this.not_ = new NotChecker(this));
      return ret;
    });
  } catch (e) {
    this.not = new NotChecker(this);
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
  var obj = this.obj_;
  var name = this.name_;
  var len = arguments.length;
  var yes = false;

  for (var i = 0; i < len; ++i) {
    var key = arguments[i];

    if (!verifyInternal(isString(key), 'Bad param: arguments[' + i + '] is NOT string')) {
      continue;
    }

    key = 'is' + firstUpperCase(key);

    var fn = is[key];

    if (verifyInternal(is.hasOwnProperty(key) && isFunction(fn), 'Bad param: arguments[' + i + '] is NOT a legal type')) {
      yes = fn(obj);
      if (yes) break;
    }
  }

  verify(yes, message('is', obj, name, arguments));

  return this;
};

// isXXX方法
for (var entry in is) {
  var fn = is[entry];

  if (!is.hasOwnProperty(entry) || !isFunction(fn)) {
    continue;
  }

  (function (entry, fn) {
    Checker.prototype[entry] = function () {
      var obj = this.obj_;
      var name = this.name_;
      verify(fn(obj), message(entry, obj, name, arguments));
      return this;
    };
  })(entry, fn);
}

/**
 * 检查所属的类（使用instanceof关键字判断）
 * 
 * @memberof Checker
 * @param {Function} ctor 类
 * @return this
 */
Checker.prototype.instanceOf = function (ctor) {
  var obj = this.obj_;
  var name = this.name_;

  if (verifyInternal(isFunction(ctor), 'Bad param: ctor is NOT a function')) {
    verify(obj instanceof ctor, message('instanceOf', obj, name, arguments));
  }

  return this;
};

/**
 * 大于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.gt = function (n) {
  var obj = this.obj_;
  var name = this.name_;

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments));
    verify(obj > n, message('gt', obj, name, arguments));
  }

  return this;
};

/**
 * 大于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.greaterThan = Checker.prototype.gt;

/**
 * 大于等于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.egt = function (n) {
  var obj = this.obj_;
  var name = this.name_;

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments));
    verify(obj >= n, message('gt', obj, name, arguments));
  }

  return this;
};

/**
 * 大于等于
 * 
 * @memberof Checker
 * @param {Number} n 下界
 * @return this
 */
Checker.prototype.equalOrGreaterThan = Checker.prototype.egt;

/**
 * 小于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.lt = function (n) {
  var obj = this.obj_;
  var name = this.name_;

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments));
    verify(obj < n, message('lt', obj, name, arguments));
  }

  return this;
};

/**
 * 小于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.lessThan = Checker.prototype.lt;

/**
 * 小于等于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.elt = function (n) {
  var obj = this.obj_;
  var name = this.name_;

  if (verifyInternal(isNumber(n), 'Bad param: n is NOT a number')) {
    verify(isNumber(obj), message('isNumber', obj, name, arguments));
    verify(obj <= n, message('lt', obj, name, arguments));
  }

  return this;
};

/**
 * 小于等于
 * 
 * @memberof Checker
 * @param {Number} n 上界
 * @return this
 */
Checker.prototype.equalOrLessThan = Checker.prototype.elt;

var rexpRange = /^([([])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/;

// 根据数学表达式生成判断函数
function genRangeFn(range) {
  if (!genRangeFn.cache) {
    genRangeFn.cache = {};
  }

  var fn = genRangeFn.cache[range];

  if (fn) return fn;

  if (!verifyInternal(isString(range), 'Bad param: range is NOT string')) {
    return null;
  }

  var match = rexpRange.exec(range);

  if (!verifyInternal(match && match.length === 5, 'Bad param: bad range string: ' + range)) {
    return null;
  }

  try {
    var op1 = match[1] === '[' ? '>=' : '>';
    var op2 = match[2] === ']' ? '<=' : '<';
    var lowerBound = parseFloat(match[2]);
    var higherBound = parseFloat(match[3]);

    var fnSource = 'return (n $op1 $lowerBound) && (n $op2 $higherBound);'.replace('$op1', op1).replace('$lowerBound', lowerBound).replace('$op2', op2).replace('$higherBound', higherBound);

    /* eslint no-new-func: "ignore" */
    fn = genRangeFn.cache[range] = new Function(['n'], fnSource);
  } catch (err) {
    return null;
  }

  return fn;
}

/**
 * 检查是否属于某个区间
 * 
 * @memberof Checker
 * @param {String} range 区间字符串，形如“[1,2)”，可以为多个
 * @return this
 */
Checker.prototype.within = function (range) {
  var len = arguments.length;

  if (len === 0) {
    return this;
  }

  var obj = this.obj_;
  var name = this.name_;
  var yes = false;

  for (var i = 0; i < len; ++i) {
    var range = arguments[i];
    var fn = genRangeFn(range);

    if (fn) {
      yes = fn(obj);
      if (yes) break;
    }
  }

  verify(yes, message('within', obj, name, arguments));

  return this;
};

/**
 * 检查是否符合正则表达式
 * 
 * @memberof Checker
 * @param {RegRxp} rexp 正则表达式
 * @return this
 */
Checker.prototype.match = function (rexp) {
  var obj = this.obj_,
      name = this.name_;

  if (verifyInternal(isRegExp(rexp), 'Bad param: n is NOT a regexp')) {
    verify(isString(obj), message('isString', obj, name, arguments));
    verify(rexp.test(obj), message('match', obj, name, arguments));
  }

  return this;
};

/**
 * 检查是否相同（使用===判断）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.same = function (other) {
  var obj = this.obj_,
      name = this.name_;

  verify(obj === other, message('same', obj, name, arguments));

  return this;
};

/**
 * 检查是否相等（即deep equal，不支持argument比较，如果需要更换equal算法，请赋值check._equal={你的equal函数}）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.eq = function (other) {
  var obj = this.obj_;
  var name = this.name_;
  var eq = check._equal || function (l, r) {
    return equal(l, r, true);
  };

  verify(eq(obj, other), message('eq', obj, name, arguments));

  return this;
};

/**
 * 检查是否相等（即deep equal，不支持argument比较，如果需要更换equal算法，请赋值check._equal={你的equal函数}）
 * 
 * @memberof Checker
 * @param {any} other
 * @return this
 */
Checker.prototype.equal = Checker.prototype.eq;

/**
 * 检查是否有某个属性（不包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.has = function (key) {
  var obj = this.obj_;
  var name = this.name_;

  verify(isExist(obj), message('isExist', obj, name, arguments));
  verify(obj.hasOwnProperty && obj.hasOwnProperty(key), message('has', obj, name, arguments));

  return new Checker(obj[key], name + '.' + key, this);
};

/**
 * 检查是否有某个属性（不包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.hasOwn = Checker.prototype.has;

/**
 * 检查是否有某个属性（包括原型链上的属性）
 * 
 * @memberof Checker
 * @param {any} key 属性名
 * @return 使用相应属性值构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.got = function (key) {
  var obj = this.obj_;
  var name = this.name_;

  verify(isExist(obj), message('isExist', obj, name, arguments));
  verify(!isUndefined(obj[key]), message('got', obj, name, arguments));

  return new Checker(obj[key], name + '.' + key, this);
};

/**
 * 检查是否有length属性（包括原型链上的属性）
 * 
 * @memberof Checker
 * @return 使用length属性构造的Checker对象，使用owner跳回本对象
 */
Checker.prototype.length = function () {
  return this.got('length');
};

/**
 * 使用map函数转化对象，并返回用转化过的对象构造的Checker
 * 
 * @memberof Checker
 * @param {Function|String} 转化函数，如果为字符串，则调用待检查对象同名方法，后面的参数会传给相应方法
 * @return 使用转化过的对象构造的Checker，使用owner跳回本对象
 */
Checker.prototype.map = function (fn) {
  var obj = this.obj_;
  var name = this.name_;
  var mapObj;

  verify(isExist(obj), message('isExist', obj, name, arguments));

  try {
    if (isFunction(fn)) {
      mapObj = fn(obj);
    } else if (isString(fn)) {
      var f = obj[fn];
      if (verifyInternal(isFunction(f), 'Bad param: the obj has NOT got a method called' + fn)) {
        mapObj = f.apply(obj, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      verifyInternal(false, 'Bad param: fn is illegal');
    }
  } catch (err) {
    verify(false, err.message);
  }

  var str = name + '=>' + (isString(fn) ? fn : fn.name || '[Anonymous Function]');
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

/**
 * 使用自定义函数或policy检查
 * 
 * @memberof Checker
 * @param {Function|Policy} fn 检查函数或policy，参数为待检查对象
 * @return this
 */
Checker.prototype.meet = function (fn) {
  var obj = this.obj_;
  var name = this.name_;
  var errorMsg;

  if (isFunction(fn)) {
    errorMsg = errorMessage(fn, obj);
  } else if (fn.isPolicy) {
    try {
      fn.__exec(this);
    } catch (e) {
      errorMsg = fn.__path();
    }
  } else {
    verifyInternal(false, 'Bad param: fn is NOT a function or policy');
  }

  verify(!errorMsg, message('meet', obj, name, [errorMsg]));

  return this;
};

/**
 * 使用“且”关系组合检查函数或policy
 * 
 * @memberof Checker
 * @param {Function|Policy} x 函数或Policy实例，可以为多个
 * @return this
 */
Checker.prototype.and = function (x) {
  var obj = this.obj_;
  var name = this.name_;
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
        fn.__exec(this);
      } catch (e) {
        errorMsg = message('and', obj, name, [i, fn.__path()]);
        break;
      }
    } else {
      verifyInternal(false, 'Bad param: argument[' + i + '] is NOT a function or policy');
    }
  }

  verify(!errorMsg, errorMsg);

  return this;
};

/**
 * 使用“或”关系组合检查函数或policy
 * 
 * @memberof Checker
 * @param {Function|Policy} x 函数或Policy实例，可以为多个
 * @return this
 */
Checker.prototype.or = function () {
  var obj = this.obj_;
  var name = this.name_;
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
        fn.__exec(this);
      } catch (err) {
        errorDetail.push(fn.__path());
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

/**
 * 否定检查器（对Checker的每个检查方法取“非”）
 * 
 * @class
 * @param {Checker} checker 
 */
function NotChecker(checker) {
  this.checker_ = checker;
}

for (var methodName in Checker.prototype) {
  var method = Checker.prototype[methodName];

  if (!Checker.prototype.hasOwnProperty(methodName) || !isFunction(method)) {
    continue;
  }

  NotChecker.prototype[methodName] = function (name) {
    return function () {
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

      verify(yes, function () {
        return message(name, obj, objName, args)().replace('[PARAM-CHECK]', '[PARAM-CHECK][NOT]');
      });

      return that;
    };
  }(methodName);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Y3G
 * @fileoverview
 * 根据一个方法支持链式调用的类 A，生成一个提取其方法的“policy”类。
 * 链式调用 policy 的方法，返回一个函数，执行函数即可链式执行 A 的相应方法。
 */



var is = __webpack_require__(0);
var def = __webpack_require__(1);

var isFunction = is.isFunction;

module.exports = makePolicy;

/**
 * 生成 policy
 *
 * @param proto 要生成 policy 的类原型
 * @param chainingProps 支持链式调用的自定义属性名列表
 * @param chainingMethods 支持链式调用的方法名列表，如果不填，默认所有方法都支持链式调用
 * @return 生成的 policy 实例
 */
function makePolicy(proto, chainingProps, chainingMethods) {
  function Policy(fn, prev, name) {
    this.fn_ = fn;
    this.prev_ = prev;
    this.name_ = name;
    this.__initCustomProps(chainingProps);
  }

  Policy.prototype.isPolicy = true;

  // 因为 Policy.prototype 上会添加许多名字未知的方法，所以自己的方法加"__"以规避重名
  Policy.prototype.__initCustomProps = function (chainingProps) {
    if (chainingProps && chainingProps.length) {
      var len = chainingProps.length;
      var self = this;

      for (var i = 0; i < len; ++i) {
        var propName = chainingProps[i];
        var fn = function (prop) {
          return function () {
            return new Policy(function (that) {
              return that[prop];
            }, self, prop);
          };
        }(propName);

        def(this, propName, fn);
      }
    }
  };

  Policy.prototype.__exec = function (that) {
    var myThat = that;
    var prev = this.prev_;
    var fn = this.fn_;

    if (prev) {
      myThat = prev.__exec(that);
    }

    if (isFunction(fn)) {
      return fn(myThat);
    }

    return that;
  };

  Policy.prototype.__path = function () {
    var prev = this.prev_;
    var name = this.name_;
    var ret = prev ? prev.__path() : '';

    ret += '.' + name;

    return ret;
  };

  for (var key in proto) {
    if (!proto.hasOwnProperty(key) || !isFunction(proto[key])) {
      continue;
    }

    if (chainingMethods && chainingMethods.indexOf(key) === -1) {
      continue;
    }

    Policy.prototype[key] = function (fnName) {
      return function () {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 0);

        return new Policy(function (that) {
          return that[fnName].apply(that, args);
        }, self, fnName);
      };
    }(key);
  }

  return new Policy(null, null, 'policy');
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file 导出接口
 * @author Y3G
 */



var check = __webpack_require__(2);
var makePolicy = __webpack_require__(3);

var expo = check.check;
expo.policy = makePolicy(check.Checker.prototype, ['not', 'owner']);

module.exports = expo;

/***/ }),
/* 5 */
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function equal(left, right, strict) {
  if (left === right) {
    return true;
  }

  if (!left || !right || // 针对其中一个是null的情况
  (typeof left === 'undefined' ? 'undefined' : _typeof(left)) !== 'object' || (typeof right === 'undefined' ? 'undefined' : _typeof(right)) !== 'object') {
    return strict ? left === right : left == right;
  }

  if (left instanceof Date && right instanceof Date) {
    return left.getTime() === right.getTime();
  }

  // 生成正则表达式标注
  var genFlags = function genFlags(rexp) {
    return (rexp.global ? 'g' : '') + (rexp.ignoreCase ? 'i' : '') + (rexp.multiline ? 'm' : '') + (rexp.sticky ? 'y' : '');
  };

  if (left instanceof RegExp && right instanceof RegExp) {
    return left.toString() === right.toString() && genFlags(left) === genFlags(right);
  }

  if (left.constructor.prototype !== right.constructor.prototype) {
    return false;
  }

  var kLeft = Object.keys(left);
  var kRight = Object.keys(right);

  if (kLeft.length !== kRight.length) {
    return false;
  }

  kLeft.sort();
  kRight.sort();

  if (!kLeft.every(function (el, index) {
    return el === kRight[index];
  })) {
    return false;
  }

  var ret = kLeft.every(function (key) {
    return equal(left[key], right[key]);
  });

  return ret;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file 错误消息
 * @author Y3G
 */

var is = __webpack_require__(0);
var isString = is.isString;

// export一个生成函数的函数，是因为大多数时候message不需要打印，此时并不需要真的计算message是什么
module.exports = function (entry, obj, name, args) {
  return function () {
    return message(entry, obj, name, args);
  };
};

function printString(obj) {
  return isString(obj) ? '"' + obj + '"' : '' + obj;
}

function message(entry, obj, name, args) {
  var reason;

  if (entry === 'is') {
    reason = 'is NOT ' + Array.prototype.join.call(args, ', ');
  } else if (entry.indexOf('is') === 0) {
    reason = 'is NOT a(n) ' + entry.replace(/^is/, '').toLowerCase();
  } else if (entry === 'instanceOf') {
    var ctorName = (args[0] || {}).name || '[unknown]';
    reason = 'is NOT an instance of given constructor: ' + ctorName;
  } else if (entry === 'gt' || entry === 'greaterThan') {
    reason = 'is NOT greater than ' + printString(args[0]);
  } else if (entry === 'lt' || entry === 'lessThan') {
    reason = 'is NOT less than ' + printString(args[0]);
  } else if (entry === 'egt' || entry === 'equalOrGreaterThan') {
    reason = 'is NOT greater than ' + printString(args[0]);
  } else if (entry === 'elt' || entry === 'equalOrLessThan') {
    reason = 'is NOT less than ' + printString(args[0]);
  } else if (entry === 'within') {
    reason = 'is NOT in range(s): ' + Array.prototype.join.call(args, ', ');
  } else if (entry === 'match') {
    reason = 'does NOT match regexp: ' + printString(args[0]);
  } else if (entry === 'same') {
    reason = 'is NOT the same object to ' + printString(args[0]);
  } else if (entry === 'eq' || entry === 'equal') {
    reason = 'is NOT equal to ' + printString(args[0]);
  } else if (entry === 'has' || entry === 'hasOwn') {
    reason = 'has NO own property: ' + printString(args[0]);
  } else if (entry === 'got') {
    reason = 'has NOT property: ' + printString(args[0]);
  } else if (entry === 'and') {
    // args[0] 是执行失败的检查序号,args[1] 是具体原因
    var no = args[0];
    var detail = args[1] || 'unknown';

    if (detail.isPolicy) {
      detail = detail.path();
    }

    reason = 'does NOT pass the [' + no + ']th of an "AND" check, detail: {' + detail + '}';
  } else if (entry === 'or') {
    var details = [];

    for (var i = 0; i < args.length; ++i) {
      detail = args[i] || 'unknown';

      if (detail.isPolicy) {
        detail = detail.path();
      }

      details.push(detail);
    }

    reason = 'does NOT pass an "OR" check, detail: {' + details.join('}{') + '}';
  } else if (entry === 'meet') {
    reason = 'does NOT pass the check, detail: {' + args[0] + '}';
  } else {
    reason = 'does NOT pass the check ' + entry;
  }

  return '[PARAM-CHECK] Check Failure: ' + name + '(' + printString(obj) + ') ' + reason + '.';
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*istanbul ignore next*/(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.toAsync = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = toAsync;
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
  function toAsync(fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('fn is NOT a function.');
    }

    function asyncFn() {
      /*istanbul ignore next*/var _this = this;

      var args = Array.prototype.slice.call(arguments);
      setTimeout(function () /*istanbul ignore next*/{
        return fn.apply( /*istanbul ignore next*/_this, args);
      }, 0);
    }

    // for debug
    asyncFn.originalFunction = fn;

    return asyncFn;
  }
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0tY2hlY2suYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDI5MmExOGZlOWQ0YTUyM2UxNjciLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy95LXV0aWxzL2lzLmpzIiwid2VicGFjazovLy9saWIvZGVmLmpzIiwid2VicGFjazovLy9saWIvY2hlY2suanMiLCJ3ZWJwYWNrOi8vL2xpYi9wb2xpY3kuanMiLCJ3ZWJwYWNrOi8vL2luZGV4LmpzIiwid2VicGFjazovLy9saWIvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vL2xpYi9tZXNzYWdlLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMveS11dGlscy90b0FzeW5jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGFyYW0tY2hlY2tcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0MjkyYTE4ZmU5ZDRhNTIzZTE2NyIsIi8qKlxuICogQGZpbGUg5pWw5o2u57G75Z6L5Yik5patLlxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4vKipcbiAqIOaYr+WQpuacquWumuS5iVxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkIChvKSB7XG4gIHJldHVybiBvID09PSB2b2lkIDBcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLpudWxsXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdWxsIChvKSB7XG4gIHJldHVybiBvID09PSBudWxsXG59XG5cbi8qKlxuICog5piv5ZCm5Li65pWw5a2XXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIgKG8pIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IE51bWJlcl0nKVxufVxuXG4vKipcbiAqIOaYr+WQpuS4uuWtl+espuS4slxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nIChvKSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBTdHJpbmddJylcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLrluIPlsJTlgLxcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4gKG8pIHtcbiAgcmV0dXJuIG8gPT09IHRydWUgfHwgbyA9PT0gZmFsc2UgfHxcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IEJvb2xlYW5dJ1xufVxuXG4vKipcbiAqIOaYr+WQpuS4uuaXpeacn1xuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSAobykge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgRGF0ZV0nKVxufVxuXG4vKipcbiAqIOaYr+WQpuS4uuato+WImeihqOi+vuW8j1xuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUmVnRXhwIChvKSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBSZWdFeHBdJylcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLpFcnJvclxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXJyb3IgKG8pIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IEVycm9yXScpXG59XG5cbi8qKlxuICog5piv5ZCm5Li65Ye95pWwXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbiAobykge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJylcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLrlr7nosaFcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCAobykge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBvXG4gIHJldHVybiAhIW8gJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpXG59XG5cbi8qKlxuICog5piv5ZCm5a2Y5ZyoXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFeGlzdCAobykge1xuICByZXR1cm4gIWlzVW5kZWZpbmVkKG8pICYmICFpc051bGwobylcbn1cblxuLyoqXG4gKiDmmK/lkKbmmK/ln7rmnKznsbvlnotcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1pdGl2ZSAobykge1xuICByZXR1cm4gaXNVbmRlZmluZWQobykgfHwgaXNOdWxsKG8pIHx8IHR5cGVvZiBvID09PSAnbnVtYmVyJyB8fFxuICAgIHR5cGVvZiBvID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIG8gPT09ICdzdHJpbmcnXG59XG5cbi8qKlxuICog5piv5ZCm5Li65pWw57uEXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheSAobykge1xuICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG8pXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBBcnJheV0nXG59XG5cbi8qKlxuICog5piv5ZCm5Li65Lu/5pWw57uEXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheUxpa2UgKG8pIHtcbiAgaWYgKCFpc0V4aXN0KG8pIHx8IGlzRnVuY3Rpb24obykpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGxlbiA9IG8ubGVuZ3RoXG5cbiAgcmV0dXJuIGlzTnVtYmVyKGxlbikgJiYgbGVuID49IDBcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLpwbGFpbuWvueixoVxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3QgKG8pIHtcbiAgaWYgKCFvIHx8IG8udG9TdHJpbmcoKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScgfHwgby5ub2RlVHlwZSB8fCBvLnNldEludGVydmFsKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBjb25zdHJ1Y3RvcuaYr+WvueWIm+W7uuWvueixoeeahOWHveaVsOeahOW8leeUqOOAguWvueS6jk9iamVjdOWvueixoe+8jOivpeaMh+mSiOaMh+WQkeWOn+Wni+eahE9iamVjdCgp5Ye95pWwXG4gIC8vIOWIpOaWrW9iauaYr+WQpuWFt+aciWlzUHJvdG90eXBlT2blsZ7mgKfvvIxpc1Byb3RvdHlwZU9m5piv5oyC5ZyoT2JqZWN0LnByb3RvdHlwZeS4iueahFxuICAvLyDpgJrov4flrZfpnaLph4/miJboh6rlrprkuYnnsbvvvIjmnoTpgKDlmajvvInliJvlu7rnmoTlr7nosaHpg73kvJrnu6fmib/or6XlsZ7mgKfmlrnms5VcbiAgaWYgKG8uY29uc3RydWN0b3IgJiZcbiAgICAhby5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSAmJlxuICAgICFvLmNvbnN0cnVjdG9yLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnaXNQcm90b3R5cGVPZicpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gbykge31cblxuICByZXR1cm4gaXNVbmRlZmluZWQoa2V5KSB8fCBvLmhhc093blByb3BlcnR5KGtleSlcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLpIVE1MRWxlbWVudFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSFRNTEVsZW1lbnQgKG8pIHtcbiAgLyogZ2xvYmFsIEhUTUxFbGVtZW50ICovXG4gIGlmIChIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgfVxuXG4gIHJldHVybiAhIW8gJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZSA9PT0gJ3N0cmluZydcbn1cblxuLyoqXG4gKiDmjqXlj6PogZrlkIhcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzTnVsbDogaXNOdWxsLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNCb29sZWFuOiBpc0Jvb2xlYW4sXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc1JlZ0V4cDogaXNSZWdFeHAsXG4gIGlzRXJyb3I6IGlzRXJyb3IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNFeGlzdDogaXNFeGlzdCxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc0hUTUxFbGVtZW50OiBpc0hUTUxFbGVtZW50LFxuICBpc1ByaW1pdGl2ZTogaXNQcmltaXRpdmVcbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy95LXV0aWxzL2lzLmpzIiwiLyoqXHJcbiAqIEBmaWxlIOiHquWumuS5ieWxnuaAp1xyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkZWZcclxuXHJcbi8qKlxyXG4gKiDlrprkuYnoh6rlrprkuYnlsZ7mgKdcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IHRoYXQg6KaB5a6a5LmJ5bGe5oCn55qE5a+56LGhXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkg5bGe5oCn5ZCNXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldHRlciDor7vlh73mlbBcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIOWGmeWHveaVsFxyXG4gKiBAdGhyb3dzIOWxnuaAp+S4jeWPr+iHquWumuS5iVxyXG4gKi9cclxuZnVuY3Rpb24gZGVmICh0aGF0LCBrZXksIGdldHRlciwgc2V0dGVyKSB7XHJcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgIHZhciBwcm9wZXJ0eSA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhhdCwga2V5KVxyXG4gICAgaWYgKHByb3BlcnR5ICYmIHByb3BlcnR5LmNvbmZpZ3VyYWJsZSA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICdpcyBOT1QgYSBjb25maWd1cmFibGUgcHJvcGVydHkuJylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGF0LCBrZXksIHtcclxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICBnZXQ6IGdldHRlcixcclxuICAgIHNldDogc2V0dGVyXHJcbiAgfSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2RlZi5qcyIsIi8qKlxyXG4gKiBAZmlsZSDlj4LmlbDmo4Dmn6XlmahcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBpcyA9IHJlcXVpcmUoJ3ktdXRpbHMvaXMnKVxyXG52YXIgdG9Bc3luYyA9IHJlcXVpcmUoJ3ktdXRpbHMvdG9Bc3luYycpXHJcblxyXG52YXIgbWVzc2FnZSA9IHJlcXVpcmUoJy4vbWVzc2FnZScpXHJcbnZhciBkZWYgPSByZXF1aXJlKCcuL2RlZicpXHJcbnZhciBlcXVhbCA9IHJlcXVpcmUoJy4vZXF1YWwnKVxyXG5cclxudmFyIGlzRnVuY3Rpb24gPSBpcy5pc0Z1bmN0aW9uXHJcbnZhciBpc1N0cmluZyA9IGlzLmlzU3RyaW5nXHJcbnZhciBpc051bWJlciA9IGlzLmlzTnVtYmVyXHJcbnZhciBpc1VuZGVmaW5lZCA9IGlzLmlzVW5kZWZpbmVkXHJcbnZhciBpc0V4aXN0ID0gaXMuaXNFeGlzdFxyXG52YXIgaXNSZWdFeHAgPSBpcy5pc1JlZ0V4cFxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY2hlY2s6IGNoZWNrLFxyXG4gIENoZWNrZXI6IENoZWNrZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIOWPguaVsOajgOafpeaWueazlVxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gb2JqIOimgeajgOafpeeahOWPguaVsFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDopoHmo4Dmn6XnmoTlj4LmlbDlkI3vvIjlj6/pgInvvIzmnInliqnkuo7nsr7noa7miZPljbDkv6Hmga/vvIlcclxuICogQHJldHVybnMg5qOA5p+l5ZmoXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVjayAob2JqLCBuYW1lKSB7XHJcbiAgcmV0dXJuIG5ldyBDaGVja2VyKG9iaiwgbmFtZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOaKm+WHuuW8guW4uFxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIg5byC5bi45a+56LGhXHJcbiAqL1xyXG5mdW5jdGlvbiB0aHJvd0VyciAoZXJyKSB7XHJcbiAgZnVuY3Rpb24gX3Rocm93IChlcnIpIHtcclxuICAgIHRocm93IGVyclxyXG4gIH1cclxuXHJcbiAgaWYgKCFjaGVjay5fX1VUX18pIHtcclxuICAgIC8vIOWcqOmdnuWNleWFg+a1i+ivleeOr+Wig++8jOS4uuS6humYsuatouaKm+WHuueahOW8guW4uOiiq2NhdGNo77yM5byC5q2l5oqb5Ye65LiA5qyhXHJcbiAgICB0b0FzeW5jKF90aHJvdykoZXJyKVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgZXJyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmlq3oqIBcclxuICpcclxuICogQHBhcmFtIHthbnl9IGV4cHIg5pat6KiA5Li655yf55qE6KGo6L6+5byPXHJcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBtZXNzYWdlIOmUmeivr+a2iOaBr1xyXG4gKi9cclxuZnVuY3Rpb24gdmVyaWZ5IChleHByLCBtZXNzYWdlKSB7XHJcbiAgaWYgKCFleHByKSB7XHJcbiAgICB2YXIgbXNnID0gaXNGdW5jdGlvbihtZXNzYWdlKSA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2VcclxuICAgIHRocm93RXJyKG5ldyBFcnJvcihtc2cpKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOWGhemDqOS9v+eUqOeahOaWreiogFxyXG4gKlxyXG4gKiBAcGFyYW0ge2FueX0gZXhwciDmlq3oqIDkuLrnnJ/nmoTooajovr7lvI9cclxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2Ug6ZSZ6K+v5raI5oGv77yI5LuF5omT5Y2w5pel5b+X77yJXHJcbiAqIEByZXR1cm5zIGV4cHLmmK/lkKbkuLrnnJ9cclxuICovXHJcbmZ1bmN0aW9uIHZlcmlmeUludGVybmFsIChleHByLCBtZXNzYWdlKSB7XHJcbiAgaWYgKCFleHByKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1tQQVJBTS1DSEVDSy1JTlRFUk5BTF0gJyArIG1lc3NhZ2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gISFleHByXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDpppblrZfmr43lpKflhplcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciDopoHlpITnkIbnmoTlrZfnrKbkuLJcclxuICogQHJldHVybiDpppblrZfmr43lpKflhpnlrZfnrKbkuLJcclxuICovXHJcbmZ1bmN0aW9uIGZpcnN0VXBwZXJDYXNlIChzdHIpIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXFMvZywgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMudG9VcHBlckNhc2UoKSB9KVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5ZmoXHJcbiAqXHJcbiAqIEBjbGFzc1xyXG4gKiBAcGFyYW0ge2FueX0gb2JqIOimgeajgOafpeeahOWvueixoVxyXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSDopoHmo4Dmn6XnmoTlr7nosaHlkI3lrZfvvIjlj6/pgInvvIzmnInliqnkuo7nsr7noa7miZPljbDkv6Hmga/vvIlcclxuICogQHBhcmFtIHtDaGVja2VyfSBvd25lciDmiYDlsZ7lr7nosaHvvIjpk77lvI/osIPnlKhoYXPml7bkvb/nlKjvvIlcclxuICovXHJcbmZ1bmN0aW9uIENoZWNrZXIgKG9iaiwgbmFtZSwgb3duZXIpIHtcclxuICB0aGlzLm9ial8gPSBvYmpcclxuICB0aGlzLm5hbWVfID0gbmFtZSB8fCAnW05hbWVsZXNzXSdcclxuICB0aGlzLm93bmVyID0gb3duZXJcclxuICB0aGlzLl8gPSBvd25lciAvLyBf5Li6b3duZXLnmoTnroDlhplcclxuXHJcbiAgLy8g5L2/55Sobm905bGe5oCn6I635Y+W5ZCm5a6a5qOA5p+l5ZmoXHJcbiAgdHJ5IHtcclxuICAgIGRlZih0aGlzLCAnbm90JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgcmV0ID0gdGhpcy5ub3RfIHx8ICh0aGlzLm5vdF8gPSBuZXcgTm90Q2hlY2tlcih0aGlzKSlcclxuICAgICAgcmV0dXJuIHJldFxyXG4gICAgfSlcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB0aGlzLm5vdCA9IG5ldyBOb3RDaGVja2VyKHRoaXMpXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5pWw5o2u57G75Z6LXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZSDnsbvlnovlkI3np7DvvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5pcyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIHllcyA9IGZhbHNlXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBrZXkgPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgICBpZiAoIXZlcmlmeUludGVybmFsKGlzU3RyaW5nKGtleSksXHJcbiAgICAgICdCYWQgcGFyYW06IGFyZ3VtZW50c1snICsgaSArICddIGlzIE5PVCBzdHJpbmcnKSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGtleSA9ICdpcycgKyBmaXJzdFVwcGVyQ2FzZShrZXkpXHJcblxyXG4gICAgdmFyIGZuID0gaXNba2V5XVxyXG5cclxuICAgIGlmICh2ZXJpZnlJbnRlcm5hbChpcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlzRnVuY3Rpb24oZm4pLFxyXG4gICAgICAnQmFkIHBhcmFtOiBhcmd1bWVudHNbJyArIGkgKyAnXSBpcyBOT1QgYSBsZWdhbCB0eXBlJykpIHtcclxuICAgICAgeWVzID0gZm4ob2JqKVxyXG4gICAgICBpZiAoeWVzKSBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KHllcywgbWVzc2FnZSgnaXMnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8vIGlzWFhY5pa55rOVXHJcbmZvciAodmFyIGVudHJ5IGluIGlzKSB7XHJcbiAgdmFyIGZuID0gaXNbZW50cnldXHJcblxyXG4gIGlmICghaXMuaGFzT3duUHJvcGVydHkoZW50cnkpIHx8ICFpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgY29udGludWVcclxuICB9XHJcblxyXG4gIChmdW5jdGlvbiAoZW50cnksIGZuKSB7XHJcbiAgICBDaGVja2VyLnByb3RvdHlwZVtlbnRyeV0gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBvYmogPSB0aGlzLm9ial9cclxuICAgICAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgICAgIHZlcmlmeShmbihvYmopLCBtZXNzYWdlKGVudHJ5LCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcbiAgfSkoZW50cnksIGZuKVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5omA5bGe55qE57G777yI5L2/55SoaW5zdGFuY2VvZuWFs+mUruWtl+WIpOaWre+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3RvciDnsbtcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5pbnN0YW5jZU9mID0gZnVuY3Rpb24gKGN0b3IpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIGlmICh2ZXJpZnlJbnRlcm5hbChpc0Z1bmN0aW9uKGN0b3IpLCAnQmFkIHBhcmFtOiBjdG9yIGlzIE5PVCBhIGZ1bmN0aW9uJykpIHtcclxuICAgIHZlcmlmeShvYmogaW5zdGFuY2VvZiBjdG9yLCBtZXNzYWdlKCdpbnN0YW5jZU9mJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+S6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZ3QgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqID4gbiwgbWVzc2FnZSgnZ3QnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5aSn5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIvnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5ncmVhdGVyVGhhbiA9IENoZWNrZXIucHJvdG90eXBlLmd0XHJcblxyXG4vKipcclxuICog5aSn5LqO562J5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIvnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lZ3QgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqID49IG4sIG1lc3NhZ2UoJ2d0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+S6juetieS6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXF1YWxPckdyZWF0ZXJUaGFuID0gQ2hlY2tlci5wcm90b3R5cGUuZWd0XHJcblxyXG4vKipcclxuICog5bCP5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5sdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyJykpIHtcclxuICAgIHZlcmlmeShpc051bWJlcihvYmopLCBtZXNzYWdlKCdpc051bWJlcicsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICAgIHZlcmlmeShvYmogPCBuLCBtZXNzYWdlKCdsdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsI/kuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4iueVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmxlc3NUaGFuID0gQ2hlY2tlci5wcm90b3R5cGUubHRcclxuXHJcbi8qKlxyXG4gKiDlsI/kuo7nrYnkuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4iueVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmVsdCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNOdW1iZXIobiksICdCYWQgcGFyYW06IG4gaXMgTk9UIGEgbnVtYmVyJykpIHtcclxuICAgIHZlcmlmeShpc051bWJlcihvYmopLCBtZXNzYWdlKCdpc051bWJlcicsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICAgIHZlcmlmeShvYmogPD0gbiwgbWVzc2FnZSgnbHQnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5bCP5LqO562J5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lcXVhbE9yTGVzc1RoYW4gPSBDaGVja2VyLnByb3RvdHlwZS5lbHRcclxuXHJcbnZhciByZXhwUmFuZ2UgPSAvXihbKFtdKShbLStdP1tcXGQuXSspLFxccyooWy0rXT9bXFxkLl0rKShbXFxdKV0pJC9cclxuXHJcbi8vIOagueaNruaVsOWtpuihqOi+vuW8j+eUn+aIkOWIpOaWreWHveaVsFxyXG5mdW5jdGlvbiBnZW5SYW5nZUZuIChyYW5nZSkge1xyXG4gIGlmICghZ2VuUmFuZ2VGbi5jYWNoZSkge1xyXG4gICAgZ2VuUmFuZ2VGbi5jYWNoZSA9IHt9XHJcbiAgfVxyXG5cclxuICB2YXIgZm4gPSBnZW5SYW5nZUZuLmNhY2hlW3JhbmdlXVxyXG5cclxuICBpZiAoZm4pIHJldHVybiBmblxyXG5cclxuICBpZiAoIXZlcmlmeUludGVybmFsKGlzU3RyaW5nKHJhbmdlKSxcclxuICAgICdCYWQgcGFyYW06IHJhbmdlIGlzIE5PVCBzdHJpbmcnKSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHZhciBtYXRjaCA9IHJleHBSYW5nZS5leGVjKHJhbmdlKVxyXG5cclxuICBpZiAoIXZlcmlmeUludGVybmFsKG1hdGNoICYmIG1hdGNoLmxlbmd0aCA9PT0gNSxcclxuICAgICdCYWQgcGFyYW06IGJhZCByYW5nZSBzdHJpbmc6ICcgKyByYW5nZSkpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdmFyIG9wMSA9IChtYXRjaFsxXSA9PT0gJ1snKSA/ICc+PScgOiAnPidcclxuICAgIHZhciBvcDIgPSAobWF0Y2hbMl0gPT09ICddJykgPyAnPD0nIDogJzwnXHJcbiAgICB2YXIgbG93ZXJCb3VuZCA9IHBhcnNlRmxvYXQobWF0Y2hbMl0pXHJcbiAgICB2YXIgaGlnaGVyQm91bmQgPSBwYXJzZUZsb2F0KG1hdGNoWzNdKVxyXG5cclxuICAgIHZhciBmblNvdXJjZSA9ICgncmV0dXJuIChuICRvcDEgJGxvd2VyQm91bmQpICYmIChuICRvcDIgJGhpZ2hlckJvdW5kKTsnKVxyXG4gICAgICAucmVwbGFjZSgnJG9wMScsIG9wMSlcclxuICAgICAgLnJlcGxhY2UoJyRsb3dlckJvdW5kJywgbG93ZXJCb3VuZClcclxuICAgICAgLnJlcGxhY2UoJyRvcDInLCBvcDIpXHJcbiAgICAgIC5yZXBsYWNlKCckaGlnaGVyQm91bmQnLCBoaWdoZXJCb3VuZClcclxuXHJcbiAgICAvKiBlc2xpbnQgbm8tbmV3LWZ1bmM6IFwiaWdub3JlXCIgKi9cclxuICAgIGZuID0gZ2VuUmFuZ2VGbi5jYWNoZVtyYW5nZV0gPSBuZXcgRnVuY3Rpb24oWyduJ10sIGZuU291cmNlKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHJldHVybiBmblxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5bGe5LqO5p+Q5Liq5Yy66Ze0XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcmFuZ2Ug5Yy66Ze05a2X56ym5Liy77yM5b2i5aaC4oCcWzEsMinigJ3vvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS53aXRoaW4gPSBmdW5jdGlvbiAocmFuZ2UpIHtcclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG5cclxuICBpZiAobGVuID09PSAwKSB7XHJcbiAgICByZXR1cm4gdGhpc1xyXG4gIH1cclxuXHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciB5ZXMgPSBmYWxzZVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICB2YXIgcmFuZ2UgPSBhcmd1bWVudHNbaV1cclxuICAgIHZhciBmbiA9IGdlblJhbmdlRm4ocmFuZ2UpXHJcblxyXG4gICAgaWYgKGZuKSB7XHJcbiAgICAgIHllcyA9ICBmbihvYmopXHJcbiAgICAgIGlmICh5ZXMpIGJyZWFrXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2ZXJpZnkoeWVzLCBtZXNzYWdlKCd3aXRoaW4nLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbnrKblkIjmraPliJnooajovr7lvI9cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7UmVnUnhwfSByZXhwIOato+WImeihqOi+vuW8j1xyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLm1hdGNoID0gZnVuY3Rpb24gKHJleHApIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfLFxyXG4gICAgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzUmVnRXhwKHJleHApLFxyXG5cdFx0XHQnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIHJlZ2V4cCcpKSB7XHJcbiAgICB2ZXJpZnkoaXNTdHJpbmcob2JqKSwgbWVzc2FnZSgnaXNTdHJpbmcnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkocmV4cC50ZXN0KG9iaiksIG1lc3NhZ2UoJ21hdGNoJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuebuOWQjO+8iOS9v+eUqD09PeWIpOaWre+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IG90aGVyXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuc2FtZSA9IGZ1bmN0aW9uIChvdGhlcikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial8sXHJcbiAgICBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICB2ZXJpZnkoKG9iaiA9PT0gb3RoZXIpLCBtZXNzYWdlKCdzYW1lJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm55u4562J77yI5Y2zZGVlcCBlcXVhbO+8jOS4jeaUr+aMgWFyZ3VtZW505q+U6L6D77yM5aaC5p6c6ZyA6KaB5pu05o2iZXF1YWznrpfms5XvvIzor7fotYvlgLxjaGVjay5fZXF1YWw9e+S9oOeahGVxdWFs5Ye95pWwfe+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IG90aGVyXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXEgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIGVxID0gY2hlY2suX2VxdWFsIHx8IGZ1bmN0aW9uKGwsIHIpIHtyZXR1cm4gZXF1YWwobCwgciwgdHJ1ZSl9XHJcblxyXG4gIHZlcmlmeShlcShvYmosIG90aGVyKSwgbWVzc2FnZSgnZXEnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbnm7jnrYnvvIjljbNkZWVwIGVxdWFs77yM5LiN5pSv5oyBYXJndW1lbnTmr5TovoPvvIzlpoLmnpzpnIDopoHmm7TmjaJlcXVhbOeul+azle+8jOivt+i1i+WAvGNoZWNrLl9lcXVhbD175L2g55qEZXF1YWzlh73mlbB977yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0gb3RoZXJcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lcXVhbCA9IENoZWNrZXIucHJvdG90eXBlLmVxXHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pyJ5p+Q5Liq5bGe5oCn77yI5LiN5YyF5ous5Y6f5Z6L6ZO+5LiK55qE5bGe5oCn77yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcmV0dXJuIOS9v+eUqOebuOW6lOWxnuaAp+WAvOaehOmAoOeahENoZWNrZXLlr7nosaHvvIzkvb/nlKhvd25lcui3s+WbnuacrOWvueixoVxyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgdmVyaWZ5KGlzRXhpc3Qob2JqKSwgbWVzc2FnZSgnaXNFeGlzdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB2ZXJpZnkob2JqLmhhc093blByb3BlcnR5ICYmIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpLFxyXG5cdFx0bWVzc2FnZSgnaGFzJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gbmV3IENoZWNrZXIob2JqW2tleV0sIG5hbWUgKyAnLicgKyBrZXksIHRoaXMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmnInmn5DkuKrlsZ7mgKfvvIjkuI3ljIXmi6zljp/lnovpk77kuIrnmoTlsZ7mgKfvvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBrZXkg5bGe5oCn5ZCNXHJcbiAqIEByZXR1cm4g5L2/55So55u45bqU5bGe5oCn5YC85p6E6YCg55qEQ2hlY2tlcuWvueixoe+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5oYXNPd24gPSBDaGVja2VyLnByb3RvdHlwZS5oYXNcclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmnInmn5DkuKrlsZ7mgKfvvIjljIXmi6zljp/lnovpk77kuIrnmoTlsZ7mgKfvvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBrZXkg5bGe5oCn5ZCNXHJcbiAqIEByZXR1cm4g5L2/55So55u45bqU5bGe5oCn5YC85p6E6YCg55qEQ2hlY2tlcuWvueixoe+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5nb3QgPSBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICB2ZXJpZnkoaXNFeGlzdChvYmopLCBtZXNzYWdlKCdpc0V4aXN0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIHZlcmlmeSghaXNVbmRlZmluZWQob2JqW2tleV0pLCBtZXNzYWdlKCdnb3QnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcblxyXG4gIHJldHVybiBuZXcgQ2hlY2tlcihvYmpba2V5XSwgbmFtZSArICcuJyArIGtleSwgdGhpcylcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuaciWxlbmd0aOWxnuaAp++8iOWMheaLrOWOn+Wei+mTvuS4iueahOWxnuaAp++8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHJldHVybiDkvb/nlKhsZW5ndGjlsZ7mgKfmnoTpgKDnmoRDaGVja2Vy5a+56LGh77yM5L2/55Sob3duZXLot7Plm57mnKzlr7nosaFcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5nb3QoJ2xlbmd0aCcpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKhtYXDlh73mlbDovazljJblr7nosaHvvIzlubbov5Tlm57nlKjovazljJbov4fnmoTlr7nosaHmnoTpgKDnmoRDaGVja2VyXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30g6L2s5YyW5Ye95pWw77yM5aaC5p6c5Li65a2X56ym5Liy77yM5YiZ6LCD55So5b6F5qOA5p+l5a+56LGh5ZCM5ZCN5pa55rOV77yM5ZCO6Z2i55qE5Y+C5pWw5Lya5Lyg57uZ55u45bqU5pa55rOVXHJcbiAqIEByZXR1cm4g5L2/55So6L2s5YyW6L+H55qE5a+56LGh5p6E6YCg55qEQ2hlY2tlcu+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiAoZm4pIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIG1hcE9ialxyXG5cclxuICB2ZXJpZnkoaXNFeGlzdChvYmopLCBtZXNzYWdlKCdpc0V4aXN0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgIG1hcE9iaiA9IGZuKG9iailcclxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoZm4pKSB7XHJcbiAgICAgIHZhciBmID0gb2JqW2ZuXVxyXG4gICAgICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNGdW5jdGlvbihmKSxcclxuXHRcdFx0XHRcdCdCYWQgcGFyYW06IHRoZSBvYmogaGFzIE5PVCBnb3QgYSBtZXRob2QgY2FsbGVkJyArIGZuKSkge1xyXG4gICAgICAgIG1hcE9iaiA9IGYuYXBwbHkob2JqLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogZm4gaXMgaWxsZWdhbCcpXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB2ZXJpZnkoZmFsc2UsIGVyci5tZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgdmFyIHN0ciA9IG5hbWUgKyAnPT4nICsgKGlzU3RyaW5nKGZuKSA/IGZuIDogKGZuLm5hbWUgfHwgJ1tBbm9ueW1vdXMgRnVuY3Rpb25dJykpXHJcbiAgcmV0dXJuIG5ldyBDaGVja2VyKG1hcE9iaiwgc3RyLCB0aGlzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvck1lc3NhZ2UgKGZuKSB7XHJcbiAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZiAoIWZuLmFwcGx5KHRoaXMsIGFyZ3MpKSB7XHJcbiAgICAgIHZhciBtZXNzYWdlID0gZm4ubmFtZSB8fCBmbi50b1N0cmluZygpXHJcblxyXG4gICAgICByZXR1cm4gbWVzc2FnZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIGVyci5tZXNzYWdlXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICog5L2/55So6Ieq5a6a5LmJ5Ye95pWw5oiWcG9saWN55qOA5p+lXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBvbGljeX0gZm4g5qOA5p+l5Ye95pWw5oiWcG9saWN577yM5Y+C5pWw5Li65b6F5qOA5p+l5a+56LGhXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUubWVldCA9IGZ1bmN0aW9uIChmbikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgZXJyb3JNc2dcclxuXHJcbiAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICBlcnJvck1zZyA9IGVycm9yTWVzc2FnZShmbiwgb2JqKVxyXG4gIH0gZWxzZSBpZiAoZm4uaXNQb2xpY3kpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGZuLl9fZXhlYyh0aGlzKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBlcnJvck1zZyA9IGZuLl9fcGF0aCgpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHZlcmlmeUludGVybmFsKGZhbHNlLCAnQmFkIHBhcmFtOiBmbiBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCFlcnJvck1zZywgbWVzc2FnZSgnbWVldCcsIG9iaiwgbmFtZSwgW2Vycm9yTXNnXSkpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjigJzkuJTigJ3lhbPns7vnu4TlkIjmo4Dmn6Xlh73mlbDmiJZwb2xpY3lcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258UG9saWN5fSB4IOWHveaVsOaIllBvbGljeeWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgdmFyIGVycm9yTXNnXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBmbiA9IGFyZ3VtZW50c1tpXVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICBlcnJvck1zZyA9IGVycm9yTWVzc2FnZShmbiwgb2JqKVxyXG4gICAgICBpZiAoZXJyb3JNc2cpIHtcclxuICAgICAgICBlcnJvck1zZyA9IG1lc3NhZ2UoJ2FuZCcsIG9iaiwgbmFtZSwgW2ksIGVycm9yTXNnXSlcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGZuLmlzUG9saWN5KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZm4uX19leGVjKHRoaXMpXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBlcnJvck1zZyA9IG1lc3NhZ2UoJ2FuZCcsIG9iaiwgbmFtZSwgW2ksIGZuLl9fcGF0aCgpXSlcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogYXJndW1lbnRbJyArIGkgKyAnXSBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KCFlcnJvck1zZywgZXJyb3JNc2cpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDkvb/nlKjigJzmiJbigJ3lhbPns7vnu4TlkIjmo4Dmn6Xlh73mlbDmiJZwb2xpY3lcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb258UG9saWN5fSB4IOWHveaVsOaIllBvbGljeeWunuS+i++8jOWPr+S7peS4uuWkmuS4qlxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKCkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIHZhciBlcnJvckRldGFpbCA9IFtdXHJcbiAgdmFyIGVycm9yQ291bnQgPSAwXHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcclxuICAgIHZhciBmbiA9IGFyZ3VtZW50c1tpXVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICB2YXIgZXJyb3JNc2cgPSBlcnJvck1lc3NhZ2UoZm4sIG9iailcclxuICAgICAgaWYgKGVycm9yTXNnKSB7XHJcbiAgICAgICAgZXJyb3JEZXRhaWwucHVzaChlcnJvck1zZylcclxuICAgICAgICBlcnJvckNvdW50KytcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVha1xyXG4gICAgfSBlbHNlIGlmIChmbi5pc1BvbGljeSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZuLl9fZXhlYyh0aGlzKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBlcnJvckRldGFpbC5wdXNoKGZuLl9fcGF0aCgpKVxyXG4gICAgICAgIGVycm9yQ291bnQrK1xyXG4gICAgICAgIGNvbnRpbnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJyZWFrXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogYXJndW1lbnRbJyArIGkgKyAnXSBpcyBOT1QgYSBmdW5jdGlvbiBvciBwb2xpY3knKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KGVycm9yQ291bnQgPCBsZW4sIG1lc3NhZ2UoJ29yJywgb2JqLCBuYW1lLCBlcnJvckRldGFpbCkpXHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkKblrprmo4Dmn6XlmajvvIjlr7lDaGVja2Vy55qE5q+P5Liq5qOA5p+l5pa55rOV5Y+W4oCc6Z2e4oCd77yJXHJcbiAqIFxyXG4gKiBAY2xhc3NcclxuICogQHBhcmFtIHtDaGVja2VyfSBjaGVja2VyIFxyXG4gKi9cclxuZnVuY3Rpb24gTm90Q2hlY2tlciAoY2hlY2tlcikge1xyXG4gIHRoaXMuY2hlY2tlcl8gPSBjaGVja2VyXHJcbn1cclxuXHJcbmZvciAodmFyIG1ldGhvZE5hbWUgaW4gQ2hlY2tlci5wcm90b3R5cGUpIHtcclxuICB2YXIgbWV0aG9kID0gQ2hlY2tlci5wcm90b3R5cGVbbWV0aG9kTmFtZV1cclxuXHJcbiAgaWYgKCFDaGVja2VyLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShtZXRob2ROYW1lKSB8fFxyXG5cdFx0IWlzRnVuY3Rpb24obWV0aG9kKSkge1xyXG4gICAgY29udGludWVcclxuICB9XHJcblxyXG4gIE5vdENoZWNrZXIucHJvdG90eXBlW21ldGhvZE5hbWVdID0gKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMuY2hlY2tlcl9cclxuICAgICAgdmFyIG9iaiA9IHRoYXQub2JqX1xyXG4gICAgICB2YXIgb2JqTmFtZSA9IHRoYXQubmFtZV9cclxuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXHJcbiAgICAgIHZhciB5ZXMgPSBmYWxzZVxyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGF0W25hbWVdLmFwcGx5KHRoYXQsIGFyZ3MpXHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGlmIChlcnIubWVzc2FnZS5pbmRleE9mKCdbUEFSQU0tQ0hFQ0tdJykgPT09IDApIHtcclxuICAgICAgICAgIHllcyA9IHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhyb3cgZXJyIC8vIOWGhemDqOmUmeivr++8jOmdnuajgOafpeWksei0pVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmVyaWZ5KHllcywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBtZXNzYWdlKG5hbWUsIG9iaiwgb2JqTmFtZSwgYXJncykoKVxyXG5cdFx0XHRcdFx0LnJlcGxhY2UoJ1tQQVJBTS1DSEVDS10nLCAnW1BBUkFNLUNIRUNLXVtOT1RdJylcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiB0aGF0XHJcbiAgICB9XHJcbiAgfSkobWV0aG9kTmFtZSlcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2NoZWNrLmpzIiwiLyoqXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqIEBmaWxlb3ZlcnZpZXdcclxuICog5qC55o2u5LiA5Liq5pa55rOV5pSv5oyB6ZO+5byP6LCD55So55qE57G7IEHvvIznlJ/miJDkuIDkuKrmj5Dlj5blhbbmlrnms5XnmoTigJxwb2xpY3nigJ3nsbvjgIJcclxuICog6ZO+5byP6LCD55SoIHBvbGljeSDnmoTmlrnms5XvvIzov5Tlm57kuIDkuKrlh73mlbDvvIzmiafooYzlh73mlbDljbPlj6/pk77lvI/miafooYwgQSDnmoTnm7jlupTmlrnms5XjgIJcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbnZhciBpcyA9IHJlcXVpcmUoJ3ktdXRpbHMvaXMnKVxyXG52YXIgZGVmID0gcmVxdWlyZSgnLi9kZWYnKVxyXG5cclxudmFyIGlzRnVuY3Rpb24gPSBpcy5pc0Z1bmN0aW9uXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1ha2VQb2xpY3lcclxuXHJcbi8qKlxyXG4gKiDnlJ/miJAgcG9saWN5XHJcbiAqXHJcbiAqIEBwYXJhbSBwcm90byDopoHnlJ/miJAgcG9saWN5IOeahOexu+WOn+Wei1xyXG4gKiBAcGFyYW0gY2hhaW5pbmdQcm9wcyDmlK/mjIHpk77lvI/osIPnlKjnmoToh6rlrprkuYnlsZ7mgKflkI3liJfooahcclxuICogQHBhcmFtIGNoYWluaW5nTWV0aG9kcyDmlK/mjIHpk77lvI/osIPnlKjnmoTmlrnms5XlkI3liJfooajvvIzlpoLmnpzkuI3loavvvIzpu5jorqTmiYDmnInmlrnms5Xpg73mlK/mjIHpk77lvI/osIPnlKhcclxuICogQHJldHVybiDnlJ/miJDnmoQgcG9saWN5IOWunuS+i1xyXG4gKi9cclxuZnVuY3Rpb24gbWFrZVBvbGljeSAocHJvdG8sIGNoYWluaW5nUHJvcHMsIGNoYWluaW5nTWV0aG9kcykge1xyXG4gIGZ1bmN0aW9uIFBvbGljeSAoZm4sIHByZXYsIG5hbWUpIHtcclxuICAgIHRoaXMuZm5fID0gZm5cclxuICAgIHRoaXMucHJldl8gPSBwcmV2XHJcbiAgICB0aGlzLm5hbWVfID0gbmFtZVxyXG4gICAgdGhpcy5fX2luaXRDdXN0b21Qcm9wcyhjaGFpbmluZ1Byb3BzKVxyXG4gIH1cclxuXHJcbiAgUG9saWN5LnByb3RvdHlwZS5pc1BvbGljeSA9IHRydWVcclxuXHJcbiAgLy8g5Zug5Li6IFBvbGljeS5wcm90b3R5cGUg5LiK5Lya5re75Yqg6K645aSa5ZCN5a2X5pyq55+l55qE5pa55rOV77yM5omA5Lul6Ieq5bex55qE5pa55rOV5YqgXCJfX1wi5Lul6KeE6YG/6YeN5ZCNXHJcbiAgUG9saWN5LnByb3RvdHlwZS5fX2luaXRDdXN0b21Qcm9wcyA9IGZ1bmN0aW9uIChjaGFpbmluZ1Byb3BzKSB7XHJcbiAgICBpZiAoY2hhaW5pbmdQcm9wcyAmJiBjaGFpbmluZ1Byb3BzLmxlbmd0aCkge1xyXG4gICAgICB2YXIgbGVuID0gY2hhaW5pbmdQcm9wcy5sZW5ndGhcclxuICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgICAgdmFyIHByb3BOYW1lID0gY2hhaW5pbmdQcm9wc1tpXVxyXG4gICAgICAgIHZhciBmbiA9IChmdW5jdGlvbiAocHJvcCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQb2xpY3koZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdFtwcm9wXVxyXG4gICAgICAgICAgICB9LCBzZWxmLCBwcm9wKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKHByb3BOYW1lKVxyXG5cclxuICAgICAgICBkZWYodGhpcywgcHJvcE5hbWUsIGZuKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBQb2xpY3kucHJvdG90eXBlLl9fZXhlYyA9IGZ1bmN0aW9uICh0aGF0KSB7XHJcbiAgICB2YXIgbXlUaGF0ID0gdGhhdFxyXG4gICAgdmFyIHByZXYgPSB0aGlzLnByZXZfXHJcbiAgICB2YXIgZm4gPSB0aGlzLmZuX1xyXG5cclxuICAgIGlmIChwcmV2KSB7XHJcbiAgICAgIG15VGhhdCA9IHByZXYuX19leGVjKHRoYXQpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgIHJldHVybiBmbihteVRoYXQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoYXRcclxuICB9XHJcblxyXG4gIFBvbGljeS5wcm90b3R5cGUuX19wYXRoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByZXYgPSB0aGlzLnByZXZfXHJcbiAgICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICAgIHZhciByZXQgPSBwcmV2ID8gcHJldi5fX3BhdGgoKSA6ICcnXHJcblxyXG4gICAgcmV0ICs9ICcuJyArIG5hbWVcclxuXHJcbiAgICByZXR1cm4gcmV0XHJcbiAgfVxyXG5cclxuICBmb3IgKHZhciBrZXkgaW4gcHJvdG8pIHtcclxuICAgIGlmICghcHJvdG8uaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhaXNGdW5jdGlvbihwcm90b1trZXldKSkge1xyXG4gICAgICBjb250aW51ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFpbmluZ01ldGhvZHMgJiYgY2hhaW5pbmdNZXRob2RzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBQb2xpY3kucHJvdG90eXBlW2tleV0gPSAoZnVuY3Rpb24gKGZuTmFtZSkge1xyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFBvbGljeShmdW5jdGlvbiAodGhhdCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoYXRbZm5OYW1lXS5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICAgIH0sIHNlbGYsIGZuTmFtZSlcclxuICAgICAgfVxyXG4gICAgfSkoa2V5KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBQb2xpY3kobnVsbCwgbnVsbCwgJ3BvbGljeScpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wb2xpY3kuanMiLCIvKipcclxuICogQGZpbGUg5a+85Ye65o6l5Y+jXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgY2hlY2sgPSByZXF1aXJlKCcuL2xpYi9jaGVjaycpXHJcbnZhciBtYWtlUG9saWN5ID0gcmVxdWlyZSgnLi9saWIvcG9saWN5JylcclxuXHJcbnZhciBleHBvID0gY2hlY2suY2hlY2tcclxuZXhwby5wb2xpY3kgPSBtYWtlUG9saWN5KGNoZWNrLkNoZWNrZXIucHJvdG90eXBlLCBbJ25vdCcsICdvd25lciddKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBleHBvXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBpbmRleC5qcyIsIi8qKlxuICogQGZpbGUgZGVlcCBlcXVhbOWunueOsFxuICogQGF1dGhvciBZM0dcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBkZWVwIGVxdWFsXG4gKlxuICogQHBhcmFtICB7YW55fSBsZWZ0IOWPguaVsDFcbiAqIEBwYXJhbSAge2FueX0gcmlnaHQg5Y+C5pWwMlxuICogQHBhcmFtICB7Qm9vbGVhbn0gc3RyaWN0IOWmguaenOS4umZhbHNl77yM5YiZPT3miJDnq4vml7bljbPov5Tlm550cnVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSDmr5TovoPnu5PmnpxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlcXVhbCAobGVmdCwgcmlnaHQsIHN0cmljdCkge1xuICBpZiAobGVmdCA9PT0gcmlnaHQpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKCFsZWZ0IHx8ICFyaWdodCB8fCAvLyDpkojlr7nlhbbkuK3kuIDkuKrmmK9udWxs55qE5oOF5Ya1XG4gICAgdHlwZW9mIGxlZnQgIT09ICdvYmplY3QnIHx8IHR5cGVvZiByaWdodCAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gc3RyaWN0ID8gKGxlZnQgPT09IHJpZ2h0KSA6IChsZWZ0ID09IHJpZ2h0KVxuICB9XG5cbiAgaWYgKGxlZnQgaW5zdGFuY2VvZiBEYXRlICYmIHJpZ2h0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBsZWZ0LmdldFRpbWUoKSA9PT0gcmlnaHQuZ2V0VGltZSgpXG4gIH1cblxuICAvLyDnlJ/miJDmraPliJnooajovr7lvI/moIfms6hcbiAgdmFyIGdlbkZsYWdzID0gZnVuY3Rpb24gKHJleHApIHtcbiAgICByZXR1cm4gKHJleHAuZ2xvYmFsID8gJ2cnIDogJycpICsgKHJleHAuaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAocmV4cC5tdWx0aWxpbmUgPyAnbScgOiAnJykgKyAocmV4cC5zdGlja3kgPyAneScgOiAnJylcbiAgfVxuXG4gIGlmIChsZWZ0IGluc3RhbmNlb2YgUmVnRXhwICYmIHJpZ2h0IGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgcmV0dXJuIGxlZnQudG9TdHJpbmcoKSA9PT0gcmlnaHQudG9TdHJpbmcoKSAmJiBnZW5GbGFncyhsZWZ0KSA9PT0gZ2VuRmxhZ3MocmlnaHQpXG4gIH1cblxuICBpZiAobGVmdC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgIT09IHJpZ2h0LmNvbnN0cnVjdG9yLnByb3RvdHlwZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIGtMZWZ0ID0gT2JqZWN0LmtleXMobGVmdClcbiAgdmFyIGtSaWdodCA9IE9iamVjdC5rZXlzKHJpZ2h0KVxuXG4gIGlmIChrTGVmdC5sZW5ndGggIT09IGtSaWdodC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGtMZWZ0LnNvcnQoKVxuICBrUmlnaHQuc29ydCgpXG5cbiAgaWYgKCFrTGVmdC5ldmVyeShmdW5jdGlvbiAoZWwsIGluZGV4KSB7IHJldHVybiBlbCA9PT0ga1JpZ2h0W2luZGV4XSB9KSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgdmFyIHJldCA9IGtMZWZ0LmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gZXF1YWwobGVmdFtrZXldLCByaWdodFtrZXldKVxuICB9KVxuXG4gIHJldHVybiByZXRcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvZXF1YWwuanMiLCIvKipcbiAqIEBmaWxlIOmUmeivr+a2iOaBr1xuICogQGF1dGhvciBZM0dcbiAqL1xuXG52YXIgaXMgPSByZXF1aXJlKCd5LXV0aWxzL2lzJylcbnZhciBpc1N0cmluZyA9IGlzLmlzU3RyaW5nXG5cbi8vIGV4cG9ydOS4gOS4queUn+aIkOWHveaVsOeahOWHveaVsO+8jOaYr+WboOS4uuWkp+WkmuaVsOaXtuWAmW1lc3NhZ2XkuI3pnIDopoHmiZPljbDvvIzmraTml7blubbkuI3pnIDopoHnnJ/nmoTorqHnrpdtZXNzYWdl5piv5LuA5LmIXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChlbnRyeSwgb2JqLCBuYW1lLCBhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UoZW50cnksIG9iaiwgbmFtZSwgYXJncylcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFN0cmluZyAob2JqKSB7XG4gIHJldHVybiBpc1N0cmluZyhvYmopID8gKCdcIicgKyBvYmogKyAnXCInKSA6ICgnJyArIG9iailcbn1cblxuZnVuY3Rpb24gbWVzc2FnZSAoZW50cnksIG9iaiwgbmFtZSwgYXJncykge1xuICB2YXIgcmVhc29uXG5cbiAgaWYgKGVudHJ5ID09PSAnaXMnKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCAnICsgQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChhcmdzLCAnLCAnKVxuICB9IGVsc2UgaWYgKGVudHJ5LmluZGV4T2YoJ2lzJykgPT09IDApIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIGEobikgJyArIGVudHJ5LnJlcGxhY2UoL15pcy8sICcnKS50b0xvd2VyQ2FzZSgpXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdpbnN0YW5jZU9mJykge1xuICAgIHZhciBjdG9yTmFtZSA9IChhcmdzWzBdIHx8IHt9KS5uYW1lIHx8ICdbdW5rbm93bl0nXG4gICAgcmVhc29uID0gJ2lzIE5PVCBhbiBpbnN0YW5jZSBvZiBnaXZlbiBjb25zdHJ1Y3RvcjogJyArIGN0b3JOYW1lXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdndCcgfHwgZW50cnkgPT09ICdncmVhdGVyVGhhbicpIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIGdyZWF0ZXIgdGhhbiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2x0JyB8fCBlbnRyeSA9PT0gJ2xlc3NUaGFuJykge1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgbGVzcyB0aGFuICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnZWd0JyB8fCBlbnRyeSA9PT0gJ2VxdWFsT3JHcmVhdGVyVGhhbicpIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIGdyZWF0ZXIgdGhhbiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2VsdCcgfHwgZW50cnkgPT09ICdlcXVhbE9yTGVzc1RoYW4nKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCBsZXNzIHRoYW4gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICd3aXRoaW4nKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCBpbiByYW5nZShzKTogJyArIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJncywgJywgJylcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ21hdGNoJykge1xuICAgIHJlYXNvbiA9ICdkb2VzIE5PVCBtYXRjaCByZWdleHA6ICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnc2FtZScpIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIHRoZSBzYW1lIG9iamVjdCB0byAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2VxJyB8fCBlbnRyeSA9PT0gJ2VxdWFsJykge1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgZXF1YWwgdG8gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdoYXMnIHx8IGVudHJ5ID09PSAnaGFzT3duJykge1xuICAgIHJlYXNvbiA9ICdoYXMgTk8gb3duIHByb3BlcnR5OiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2dvdCcpIHtcbiAgICByZWFzb24gPSAnaGFzIE5PVCBwcm9wZXJ0eTogJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdhbmQnKSB7XG4gICAgLy8gYXJnc1swXSDmmK/miafooYzlpLHotKXnmoTmo4Dmn6Xluo/lj7csYXJnc1sxXSDmmK/lhbfkvZPljp/lm6BcbiAgICB2YXIgbm8gPSBhcmdzWzBdXG4gICAgdmFyIGRldGFpbCA9IGFyZ3NbMV0gfHwgJ3Vua25vd24nXG5cbiAgICBpZiAoZGV0YWlsLmlzUG9saWN5KSB7XG4gICAgICBkZXRhaWwgPSBkZXRhaWwucGF0aCgpXG4gICAgfVxuXG4gICAgcmVhc29uID0gJ2RvZXMgTk9UIHBhc3MgdGhlIFsnICtcbiAgICAgIG5vICsgJ110aCBvZiBhbiBcIkFORFwiIGNoZWNrLCBkZXRhaWw6IHsnICsgZGV0YWlsICsgJ30nXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdvcicpIHtcbiAgICB2YXIgZGV0YWlscyA9IFtdXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyArK2kpIHtcbiAgICAgIGRldGFpbCA9IGFyZ3NbaV0gfHwgJ3Vua25vd24nXG5cbiAgICAgIGlmIChkZXRhaWwuaXNQb2xpY3kpIHtcbiAgICAgICAgZGV0YWlsID0gZGV0YWlsLnBhdGgoKVxuICAgICAgfVxuXG4gICAgICBkZXRhaWxzLnB1c2goZGV0YWlsKVxuICAgIH1cblxuICAgIHJlYXNvbiA9ICdkb2VzIE5PVCBwYXNzIGFuIFwiT1JcIiBjaGVjaywgZGV0YWlsOiB7JyArIGRldGFpbHMuam9pbignfXsnKSArICd9J1xuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnbWVldCcpIHtcbiAgICByZWFzb24gPSAnZG9lcyBOT1QgcGFzcyB0aGUgY2hlY2ssIGRldGFpbDogeycgKyBhcmdzWzBdICsgJ30nXG4gIH0gZWxzZSB7XG4gICAgcmVhc29uID0gJ2RvZXMgTk9UIHBhc3MgdGhlIGNoZWNrICcgKyBlbnRyeVxuICB9XG5cbiAgcmV0dXJuICdbUEFSQU0tQ0hFQ0tdIENoZWNrIEZhaWx1cmU6ICcgKyBuYW1lICsgJygnICsgcHJpbnRTdHJpbmcob2JqKSArICcpICcgKyByZWFzb24gKyAnLidcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvbWVzc2FnZS5qcyIsIi8qKlxyXG4gKiBAZmlsZSDlsIblh73mlbDovazljJbkuLrlvILmraXlh73mlbBcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4vKipcclxuICog5bCG5Ye95pWw6L2s5YyW5Li65byC5q2l5Ye95pWwXHJcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmbiDovpPlhaXlh73mlbBcclxuICogQHJldHVybiB7RnVuY3Rpb259IOi+k+WHuuWHveaVsFxyXG4gKiBAZXhwb3J0XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0FzeW5jIChmbikge1xyXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZuIGlzIE5PVCBhIGZ1bmN0aW9uLicpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhc3luY0ZuICgpIHtcclxuICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGZuLmFwcGx5KHRoaXMsIGFyZ3MpLCAwKVxyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGRlYnVnXHJcbiAgYXN5bmNGbi5vcmlnaW5hbEZ1bmN0aW9uID0gZm5cclxuXHJcbiAgcmV0dXJuIGFzeW5jRm5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm9kZV9tb2R1bGVzL3ktdXRpbHMvdG9Bc3luYy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBVUE7QUFVQTtBQVVBO0FBVUE7QUFXQTtBQVVBO0FBVUE7QUFVQTtBQVVBO0FBV0E7QUFVQTtBQVdBO0FBY0E7QUFnQkE7QUF5QkE7QUFDQTs7Ozs7OztBQTlMQTs7Ozs7QUFLQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7Ozs7Ozs7O0FDek1BOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7Ozs7OztBQ2hDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9yQkE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2JBOzs7OztBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOURBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFYQTs7Ozs7QUFLQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
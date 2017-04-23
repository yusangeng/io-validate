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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW0tY2hlY2suYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZmI0MzQ5ZTNlYzVkYjQ4NThhNWUiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy95LXV0aWxzL2lzLmpzIiwid2VicGFjazovLy9saWIvZGVmLmpzIiwid2VicGFjazovLy9saWIvY2hlY2suanMiLCJ3ZWJwYWNrOi8vL2xpYi9wb2xpY3kuanMiLCJ3ZWJwYWNrOi8vL2luZGV4LmpzIiwid2VicGFjazovLy9saWIvZXF1YWwuanMiLCJ3ZWJwYWNrOi8vL2xpYi9tZXNzYWdlLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMveS11dGlscy90b0FzeW5jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwicGFyYW0tY2hlY2tcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFyYW0tY2hlY2tcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmI0MzQ5ZTNlYzVkYjQ4NThhNWUiLCIvKipcbiAqIEBmaWxlIOaVsOaNruexu+Wei+WIpOaWrS5cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuLyoqXG4gKiDmmK/lkKbmnKrlrprkuYlcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZCAobykge1xuICByZXR1cm4gbyA9PT0gdm9pZCAwXG59XG5cbi8qKlxuICog5piv5ZCm5Li6bnVsbFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVsbCAobykge1xuICByZXR1cm4gbyA9PT0gbnVsbFxufVxuXG4vKipcbiAqIOaYr+WQpuS4uuaVsOWtl1xuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyIChvKSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBOdW1iZXJdJylcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLrlrZfnrKbkuLJcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyAobykge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpXG59XG5cbi8qKlxuICog5piv5ZCm5Li65biD5bCU5YC8XG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuIChvKSB7XG4gIHJldHVybiBvID09PSB0cnVlIHx8IG8gPT09IGZhbHNlIHx8XG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBCb29sZWFuXSdcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLrml6XmnJ9cbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUgKG8pIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IERhdGVdJylcbn1cblxuLyoqXG4gKiDmmK/lkKbkuLrmraPliJnooajovr7lvI9cbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1JlZ0V4cCAobykge1xuICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgUmVnRXhwXScpXG59XG5cbi8qKlxuICog5piv5ZCm5Li6RXJyb3JcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yIChvKSB7XG4gIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pID09PSAnW29iamVjdCBFcnJvcl0nKVxufVxuXG4vKipcbiAqIOaYr+WQpuS4uuWHveaVsFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24gKG8pIHtcbiAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXScpXG59XG5cbi8qKlxuICog5piv5ZCm5Li65a+56LGhXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QgKG8pIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2Ygb1xuICByZXR1cm4gISFvICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKVxufVxuXG4vKipcbiAqIOaYr+WQpuWtmOWcqFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXhpc3QgKG8pIHtcbiAgcmV0dXJuICFpc1VuZGVmaW5lZChvKSAmJiAhaXNOdWxsKG8pXG59XG5cbi8qKlxuICog5piv5ZCm5piv5Z+65pys57G75Z6LXG4gKiBAcGFyYW0gbyDnm67moIflr7nosaFcbiAqIEByZXR1cm4ge0Jvb2xlYW59IOWIpOaWree7k+aenFxuICogQGV4cG9ydFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltaXRpdmUgKG8pIHtcbiAgcmV0dXJuIGlzVW5kZWZpbmVkKG8pIHx8IGlzTnVsbChvKSB8fCB0eXBlb2YgbyA9PT0gJ251bWJlcicgfHxcbiAgICB0eXBlb2YgbyA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiBvID09PSAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIOaYr+WQpuS4uuaVsOe7hFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXkgKG8pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvKVxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKSA9PT0gJ1tvYmplY3QgQXJyYXldJ1xufVxuXG4vKipcbiAqIOaYr+WQpuS4uuS7v+aVsOe7hFxuICogQHBhcmFtIG8g55uu5qCH5a+56LGhXG4gKiBAcmV0dXJuIHtCb29sZWFufSDliKTmlq3nu5PmnpxcbiAqIEBleHBvcnRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXlMaWtlIChvKSB7XG4gIGlmICghaXNFeGlzdChvKSB8fCBpc0Z1bmN0aW9uKG8pKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBsZW4gPSBvLmxlbmd0aFxuXG4gIHJldHVybiBpc051bWJlcihsZW4pICYmIGxlbiA+PSAwXG59XG5cbi8qKlxuICog5piv5ZCm5Li6cGxhaW7lr7nosaFcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0IChvKSB7XG4gIGlmICghbyB8fCBvLnRvU3RyaW5nKCkgIT09ICdbb2JqZWN0IE9iamVjdF0nIHx8IG8ubm9kZVR5cGUgfHwgby5zZXRJbnRlcnZhbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gY29uc3RydWN0b3LmmK/lr7nliJvlu7rlr7nosaHnmoTlh73mlbDnmoTlvJXnlKjjgILlr7nkuo5PYmplY3Tlr7nosaHvvIzor6XmjIfpkojmjIflkJHljp/lp4vnmoRPYmplY3QoKeWHveaVsFxuICAvLyDliKTmlq1vYmrmmK/lkKblhbfmnIlpc1Byb3RvdHlwZU9m5bGe5oCn77yMaXNQcm90b3R5cGVPZuaYr+aMguWcqE9iamVjdC5wcm90b3R5cGXkuIrnmoRcbiAgLy8g6YCa6L+H5a2X6Z2i6YeP5oiW6Ieq5a6a5LmJ57G777yI5p6E6YCg5Zmo77yJ5Yib5bu655qE5a+56LGh6YO95Lya57un5om/6K+l5bGe5oCn5pa55rOVXG4gIGlmIChvLmNvbnN0cnVjdG9yICYmXG4gICAgIW8uaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykgJiZcbiAgICAhby5jb25zdHJ1Y3Rvci5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoJ2lzUHJvdG90eXBlT2YnKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG8pIHt9XG5cbiAgcmV0dXJuIGlzVW5kZWZpbmVkKGtleSkgfHwgby5oYXNPd25Qcm9wZXJ0eShrZXkpXG59XG5cbi8qKlxuICog5piv5ZCm5Li6SFRNTEVsZW1lbnRcbiAqIEBwYXJhbSBvIOebruagh+WvueixoVxuICogQHJldHVybiB7Qm9vbGVhbn0g5Yik5pat57uT5p6cXG4gKiBAZXhwb3J0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxFbGVtZW50IChvKSB7XG4gIC8qIGdsb2JhbCBIVE1MRWxlbWVudCAqL1xuICBpZiAoSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50XG4gIH1cblxuICByZXR1cm4gISFvICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWUgPT09ICdzdHJpbmcnXG59XG5cbi8qKlxuICog5o6l5Y+j6IGa5ZCIXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzQm9vbGVhbjogaXNCb29sZWFuLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNSZWdFeHA6IGlzUmVnRXhwLFxuICBpc0Vycm9yOiBpc0Vycm9yLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzRXhpc3Q6IGlzRXhpc3QsXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgaXNQbGFpbk9iamVjdDogaXNQbGFpbk9iamVjdCxcbiAgaXNIVE1MRWxlbWVudDogaXNIVE1MRWxlbWVudCxcbiAgaXNQcmltaXRpdmU6IGlzUHJpbWl0aXZlXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMveS11dGlscy9pcy5qcyIsIi8qKlxyXG4gKiBAZmlsZSDoh6rlrprkuYnlsZ7mgKdcclxuICogQGF1dGhvciBZM0dcclxuICovXHJcblxyXG4ndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmXHJcblxyXG4vKipcclxuICog5a6a5LmJ6Ieq5a6a5LmJ5bGe5oCnXHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGF0IOimgeWumuS5ieWxnuaAp+eahOWvueixoVxyXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXR0ZXIg6K+75Ye95pWwXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNldHRlciDlhpnlh73mlbBcclxuICogQHRocm93cyDlsZ7mgKfkuI3lj6/oh6rlrprkuYlcclxuICovXHJcbmZ1bmN0aW9uIGRlZiAodGhhdCwga2V5LCBnZXR0ZXIsIHNldHRlcikge1xyXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICB2YXIgcHJvcGVydHkgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoYXQsIGtleSlcclxuICAgIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnaXMgTk9UIGEgY29uZmlndXJhYmxlIHByb3BlcnR5LicpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhhdCwga2V5LCB7XHJcbiAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgZ2V0OiBnZXR0ZXIsXHJcbiAgICBzZXQ6IHNldHRlclxyXG4gIH0pXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9kZWYuanMiLCIvKipcclxuICogQGZpbGUg5Y+C5pWw5qOA5p+l5ZmoXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgaXMgPSByZXF1aXJlKCd5LXV0aWxzL2lzJylcclxudmFyIHRvQXN5bmMgPSByZXF1aXJlKCd5LXV0aWxzL3RvQXN5bmMnKVxyXG5cclxudmFyIG1lc3NhZ2UgPSByZXF1aXJlKCcuL21lc3NhZ2UnKVxyXG52YXIgZGVmID0gcmVxdWlyZSgnLi9kZWYnKVxyXG52YXIgZXF1YWwgPSByZXF1aXJlKCcuL2VxdWFsJylcclxuXHJcbnZhciBpc0Z1bmN0aW9uID0gaXMuaXNGdW5jdGlvblxyXG52YXIgaXNTdHJpbmcgPSBpcy5pc1N0cmluZ1xyXG52YXIgaXNOdW1iZXIgPSBpcy5pc051bWJlclxyXG52YXIgaXNVbmRlZmluZWQgPSBpcy5pc1VuZGVmaW5lZFxyXG52YXIgaXNFeGlzdCA9IGlzLmlzRXhpc3RcclxudmFyIGlzUmVnRXhwID0gaXMuaXNSZWdFeHBcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNoZWNrOiBjaGVjayxcclxuICBDaGVja2VyOiBDaGVja2VyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj4LmlbDmo4Dmn6Xmlrnms5VcclxuICpcclxuICogQHBhcmFtIHthbnl9IG9iaiDopoHmo4Dmn6XnmoTlj4LmlbBcclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg6KaB5qOA5p+l55qE5Y+C5pWw5ZCN77yI5Y+v6YCJ77yM5pyJ5Yqp5LqO57K+56Gu5omT5Y2w5L+h5oGv77yJXHJcbiAqIEByZXR1cm5zIOajgOafpeWZqFxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2sgKG9iaiwgbmFtZSkge1xyXG4gIHJldHVybiBuZXcgQ2hlY2tlcihvYmosIG5hbWUpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmipvlh7rlvILluLhcclxuICpcclxuICogQHBhcmFtIHtFcnJvcn0gZXJyIOW8guW4uOWvueixoVxyXG4gKi9cclxuZnVuY3Rpb24gdGhyb3dFcnIgKGVycikge1xyXG4gIGZ1bmN0aW9uIF90aHJvdyAoZXJyKSB7XHJcbiAgICB0aHJvdyBlcnJcclxuICB9XHJcblxyXG4gIGlmICghY2hlY2suX19VVF9fKSB7XHJcbiAgICAvLyDlnKjpnZ7ljZXlhYPmtYvor5Xnjq/looPvvIzkuLrkuobpmLLmraLmipvlh7rnmoTlvILluLjooqtjYXRjaO+8jOW8guatpeaKm+WHuuS4gOasoVxyXG4gICAgdG9Bc3luYyhfdGhyb3cpKGVycilcclxuICB9XHJcblxyXG4gIHRocm93IGVyclxyXG59XHJcblxyXG4vKipcclxuICog5pat6KiAXHJcbiAqXHJcbiAqIEBwYXJhbSB7YW55fSBleHByIOaWreiogOS4uuecn+eahOihqOi+vuW8j1xyXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gbWVzc2FnZSDplJnor6/mtojmga9cclxuICovXHJcbmZ1bmN0aW9uIHZlcmlmeSAoZXhwciwgbWVzc2FnZSkge1xyXG4gIGlmICghZXhwcikge1xyXG4gICAgdmFyIG1zZyA9IGlzRnVuY3Rpb24obWVzc2FnZSkgPyBtZXNzYWdlKCkgOiBtZXNzYWdlXHJcbiAgICB0aHJvd0VycihuZXcgRXJyb3IobXNnKSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlhoXpg6jkvb/nlKjnmoTmlq3oqIBcclxuICpcclxuICogQHBhcmFtIHthbnl9IGV4cHIg5pat6KiA5Li655yf55qE6KGo6L6+5byPXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIOmUmeivr+a2iOaBr++8iOS7heaJk+WNsOaXpeW/l++8iVxyXG4gKiBAcmV0dXJucyBleHBy5piv5ZCm5Li655yfXHJcbiAqL1xyXG5mdW5jdGlvbiB2ZXJpZnlJbnRlcm5hbCAoZXhwciwgbWVzc2FnZSkge1xyXG4gIGlmICghZXhwcikge1xyXG4gICAgY29uc29sZS53YXJuKCdbUEFSQU0tQ0hFQ0stSU5URVJOQUxdICcgKyBtZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICEhZXhwclxyXG59XHJcblxyXG4vKipcclxuICog6aaW5a2X5q+N5aSn5YaZXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIg6KaB5aSE55CG55qE5a2X56ym5LiyXHJcbiAqIEByZXR1cm4g6aaW5a2X5q+N5aSn5YaZ5a2X56ym5LiyXHJcbiAqL1xyXG5mdW5jdGlvbiBmaXJzdFVwcGVyQ2FzZSAoc3RyKSB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxTL2csIGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnRvVXBwZXJDYXNlKCkgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeWZqFxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQHBhcmFtIHthbnl9IG9iaiDopoHmo4Dmn6XnmoTlr7nosaFcclxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUg6KaB5qOA5p+l55qE5a+56LGh5ZCN5a2X77yI5Y+v6YCJ77yM5pyJ5Yqp5LqO57K+56Gu5omT5Y2w5L+h5oGv77yJXHJcbiAqIEBwYXJhbSB7Q2hlY2tlcn0gb3duZXIg5omA5bGe5a+56LGh77yI6ZO+5byP6LCD55SoaGFz5pe25L2/55So77yJXHJcbiAqL1xyXG5mdW5jdGlvbiBDaGVja2VyIChvYmosIG5hbWUsIG93bmVyKSB7XHJcbiAgdGhpcy5vYmpfID0gb2JqXHJcbiAgdGhpcy5uYW1lXyA9IG5hbWUgfHwgJ1tOYW1lbGVzc10nXHJcbiAgdGhpcy5vd25lciA9IG93bmVyXHJcblxyXG4gIC8vIOS9v+eUqG5vdOWxnuaAp+iOt+WPluWQpuWumuajgOafpeWZqFxyXG4gIHRyeSB7XHJcbiAgICBkZWYodGhpcywgJ25vdCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHJldCA9IHRoaXMubm90XyB8fCAodGhpcy5ub3RfID0gbmV3IE5vdENoZWNrZXIodGhpcykpXHJcbiAgICAgIHJldHVybiByZXRcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdGhpcy5ub3QgPSBuZXcgTm90Q2hlY2tlcih0aGlzKVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaVsOaNruexu+Wei1xyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUg57G75Z6L5ZCN56ew77yM5Y+v5Lul5Li65aSa5LiqXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuaXMgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIHZhciB5ZXMgPSBmYWxzZVxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICB2YXIga2V5ID0gYXJndW1lbnRzW2ldXHJcblxyXG4gICAgaWYgKCF2ZXJpZnlJbnRlcm5hbChpc1N0cmluZyhrZXkpLFxyXG4gICAgICAnQmFkIHBhcmFtOiBhcmd1bWVudHNbJyArIGkgKyAnXSBpcyBOT1Qgc3RyaW5nJykpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBrZXkgPSAnaXMnICsgZmlyc3RVcHBlckNhc2Uoa2V5KVxyXG5cclxuICAgIHZhciBmbiA9IGlzW2tleV1cclxuXHJcbiAgICBpZiAodmVyaWZ5SW50ZXJuYWwoaXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBpc0Z1bmN0aW9uKGZuKSxcclxuICAgICAgJ0JhZCBwYXJhbTogYXJndW1lbnRzWycgKyBpICsgJ10gaXMgTk9UIGEgbGVnYWwgdHlwZScpKSB7XHJcbiAgICAgIHllcyA9IGZuKG9iailcclxuICAgICAgaWYgKHllcykgYnJlYWtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcmlmeSh5ZXMsIG1lc3NhZ2UoJ2lzJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vLyBpc1hYWOaWueazlVxyXG5mb3IgKHZhciBlbnRyeSBpbiBpcykge1xyXG4gIHZhciBmbiA9IGlzW2VudHJ5XVxyXG5cclxuICBpZiAoIWlzLmhhc093blByb3BlcnR5KGVudHJ5KSB8fCAhaXNGdW5jdGlvbihmbikpIHtcclxuICAgIGNvbnRpbnVlXHJcbiAgfVxyXG5cclxuICAoZnVuY3Rpb24gKGVudHJ5LCBmbikge1xyXG4gICAgQ2hlY2tlci5wcm90b3R5cGVbZW50cnldID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgICAgIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gICAgICB2ZXJpZnkoZm4ob2JqKSwgbWVzc2FnZShlbnRyeSwgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG4gIH0pKGVudHJ5LCBmbilcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaJgOWxnueahOexu++8iOS9v+eUqGluc3RhbmNlb2blhbPplK7lrZfliKTmlq3vvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN0b3Ig57G7XHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuaW5zdGFuY2VPZiA9IGZ1bmN0aW9uIChjdG9yKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG5cclxuICBpZiAodmVyaWZ5SW50ZXJuYWwoaXNGdW5jdGlvbihjdG9yKSwgJ0JhZCBwYXJhbTogY3RvciBpcyBOT1QgYSBmdW5jdGlvbicpKSB7XHJcbiAgICB2ZXJpZnkob2JqIGluc3RhbmNlb2YgY3RvciwgbWVzc2FnZSgnaW5zdGFuY2VPZicsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlpKfkuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4i+eVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmd0ID0gZnVuY3Rpb24gKG4pIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIGlmICh2ZXJpZnlJbnRlcm5hbChpc051bWJlcihuKSwgJ0JhZCBwYXJhbTogbiBpcyBOT1QgYSBudW1iZXInKSkge1xyXG4gICAgdmVyaWZ5KGlzTnVtYmVyKG9iaiksIG1lc3NhZ2UoJ2lzTnVtYmVyJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gICAgdmVyaWZ5KG9iaiA+IG4sIG1lc3NhZ2UoJ2d0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+S6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZ3JlYXRlclRoYW4gPSBDaGVja2VyLnByb3RvdHlwZS5ndFxyXG5cclxuLyoqXHJcbiAqIOWkp+S6juetieS6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiL55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZWd0ID0gZnVuY3Rpb24gKG4pIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIGlmICh2ZXJpZnlJbnRlcm5hbChpc051bWJlcihuKSwgJ0JhZCBwYXJhbTogbiBpcyBOT1QgYSBudW1iZXInKSkge1xyXG4gICAgdmVyaWZ5KGlzTnVtYmVyKG9iaiksIG1lc3NhZ2UoJ2lzTnVtYmVyJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gICAgdmVyaWZ5KG9iaiA+PSBuLCBtZXNzYWdlKCdndCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlpKfkuo7nrYnkuo5cclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIOS4i+eVjFxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmVxdWFsT3JHcmVhdGVyVGhhbiA9IENoZWNrZXIucHJvdG90eXBlLmVndFxyXG5cclxuLyoqXHJcbiAqIOWwj+S6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiK55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUubHQgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqIDwgbiwgbWVzc2FnZSgnbHQnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5bCP5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5sZXNzVGhhbiA9IENoZWNrZXIucHJvdG90eXBlLmx0XHJcblxyXG4vKipcclxuICog5bCP5LqO562J5LqOXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gbiDkuIrnlYxcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5lbHQgPSBmdW5jdGlvbiAobikge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgaWYgKHZlcmlmeUludGVybmFsKGlzTnVtYmVyKG4pLCAnQmFkIHBhcmFtOiBuIGlzIE5PVCBhIG51bWJlcicpKSB7XHJcbiAgICB2ZXJpZnkoaXNOdW1iZXIob2JqKSwgbWVzc2FnZSgnaXNOdW1iZXInLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgICB2ZXJpZnkob2JqIDw9IG4sIG1lc3NhZ2UoJ2x0Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOWwj+S6juetieS6jlxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtOdW1iZXJ9IG4g5LiK55WMXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXF1YWxPckxlc3NUaGFuID0gQ2hlY2tlci5wcm90b3R5cGUuZWx0XHJcblxyXG52YXIgcmV4cFJhbmdlID0gL14oWyhbXSkoWy0rXT9bXFxkLl0rKSxcXHMqKFstK10/W1xcZC5dKykoW1xcXSldKSQvXHJcblxyXG4vLyDmoLnmja7mlbDlrabooajovr7lvI/nlJ/miJDliKTmlq3lh73mlbBcclxuZnVuY3Rpb24gZ2VuUmFuZ2VGbiAocmFuZ2UpIHtcclxuICBpZiAoIWdlblJhbmdlRm4uY2FjaGUpIHtcclxuICAgIGdlblJhbmdlRm4uY2FjaGUgPSB7fVxyXG4gIH1cclxuXHJcbiAgdmFyIGZuID0gZ2VuUmFuZ2VGbi5jYWNoZVtyYW5nZV1cclxuXHJcbiAgaWYgKGZuKSByZXR1cm4gZm5cclxuXHJcbiAgaWYgKCF2ZXJpZnlJbnRlcm5hbChpc1N0cmluZyhyYW5nZSksXHJcbiAgICAnQmFkIHBhcmFtOiByYW5nZSBpcyBOT1Qgc3RyaW5nJykpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICB2YXIgbWF0Y2ggPSByZXhwUmFuZ2UuZXhlYyhyYW5nZSlcclxuXHJcbiAgaWYgKCF2ZXJpZnlJbnRlcm5hbChtYXRjaCAmJiBtYXRjaC5sZW5ndGggPT09IDUsXHJcbiAgICAnQmFkIHBhcmFtOiBiYWQgcmFuZ2Ugc3RyaW5nOiAnICsgcmFuZ2UpKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHZhciBvcDEgPSAobWF0Y2hbMV0gPT09ICdbJykgPyAnPj0nIDogJz4nXHJcbiAgICB2YXIgb3AyID0gKG1hdGNoWzJdID09PSAnXScpID8gJzw9JyA6ICc8J1xyXG4gICAgdmFyIGxvd2VyQm91bmQgPSBwYXJzZUZsb2F0KG1hdGNoWzJdKVxyXG4gICAgdmFyIGhpZ2hlckJvdW5kID0gcGFyc2VGbG9hdChtYXRjaFszXSlcclxuXHJcbiAgICB2YXIgZm5Tb3VyY2UgPSAoJ3JldHVybiAobiAkb3AxICRsb3dlckJvdW5kKSAmJiAobiAkb3AyICRoaWdoZXJCb3VuZCk7JylcclxuICAgICAgLnJlcGxhY2UoJyRvcDEnLCBvcDEpXHJcbiAgICAgIC5yZXBsYWNlKCckbG93ZXJCb3VuZCcsIGxvd2VyQm91bmQpXHJcbiAgICAgIC5yZXBsYWNlKCckb3AyJywgb3AyKVxyXG4gICAgICAucmVwbGFjZSgnJGhpZ2hlckJvdW5kJywgaGlnaGVyQm91bmQpXHJcblxyXG4gICAgLyogZXNsaW50IG5vLW5ldy1mdW5jOiBcImlnbm9yZVwiICovXHJcbiAgICBmbiA9IGdlblJhbmdlRm4uY2FjaGVbcmFuZ2VdID0gbmV3IEZ1bmN0aW9uKFsnbiddLCBmblNvdXJjZSlcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm5cclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuWxnuS6juafkOS4quWMuumXtFxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtTdHJpbmd9IHJhbmdlIOWMuumXtOWtl+espuS4su+8jOW9ouWmguKAnFsxLDIp4oCd77yM5Y+v5Lul5Li65aSa5LiqXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUud2l0aGluID0gZnVuY3Rpb24gKHJhbmdlKSB7XHJcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuXHJcbiAgaWYgKGxlbiA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHRoaXNcclxuICB9XHJcblxyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgeWVzID0gZmFsc2VcclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgdmFyIHJhbmdlID0gYXJndW1lbnRzW2ldXHJcbiAgICB2YXIgZm4gPSBnZW5SYW5nZUZuKHJhbmdlKVxyXG5cclxuICAgIGlmIChmbikge1xyXG4gICAgICB5ZXMgPSAgZm4ob2JqKVxyXG4gICAgICBpZiAoeWVzKSBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmVyaWZ5KHllcywgbWVzc2FnZSgnd2l0aGluJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm56ym5ZCI5q2j5YiZ6KGo6L6+5byPXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge1JlZ1J4cH0gcmV4cCDmraPliJnooajovr7lvI9cclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5tYXRjaCA9IGZ1bmN0aW9uIChyZXhwKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqXyxcclxuICAgIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIGlmICh2ZXJpZnlJbnRlcm5hbChpc1JlZ0V4cChyZXhwKSxcclxuXHRcdFx0J0JhZCBwYXJhbTogbiBpcyBOT1QgYSByZWdleHAnKSkge1xyXG4gICAgdmVyaWZ5KGlzU3RyaW5nKG9iaiksIG1lc3NhZ2UoJ2lzU3RyaW5nJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG4gICAgdmVyaWZ5KHJleHAudGVzdChvYmopLCBtZXNzYWdlKCdtYXRjaCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbnm7jlkIzvvIjkvb/nlKg9PT3liKTmlq3vvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBvdGhlclxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLnNhbWUgPSBmdW5jdGlvbiAob3RoZXIpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfLFxyXG4gICAgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgdmVyaWZ5KChvYmogPT09IG90aGVyKSwgbWVzc2FnZSgnc2FtZScsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuXHJcbiAgcmV0dXJuIHRoaXNcclxufVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuebuOetie+8iOWNs2RlZXAgZXF1YWzvvIzkuI3mlK/mjIFhcmd1bWVudOavlOi+g++8jOWmguaenOmcgOimgeabtOaNomVxdWFs566X5rOV77yM6K+36LWL5YC8Y2hlY2suX2VxdWFsPXvkvaDnmoRlcXVhbOWHveaVsH3vvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEBwYXJhbSB7YW55fSBvdGhlclxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmVxID0gZnVuY3Rpb24gKG90aGVyKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBlcSA9IGNoZWNrLl9lcXVhbCB8fCBmdW5jdGlvbihsLCByKSB7cmV0dXJuIGVxdWFsKGwsIHIsIHRydWUpfVxyXG5cclxuICB2ZXJpZnkoZXEob2JqLCBvdGhlciksIG1lc3NhZ2UoJ2VxJywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm55u4562J77yI5Y2zZGVlcCBlcXVhbO+8jOS4jeaUr+aMgWFyZ3VtZW505q+U6L6D77yM5aaC5p6c6ZyA6KaB5pu05o2iZXF1YWznrpfms5XvvIzor7fotYvlgLxjaGVjay5fZXF1YWw9e+S9oOeahGVxdWFs5Ye95pWwfe+8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IG90aGVyXHJcbiAqIEByZXR1cm4gdGhpc1xyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZXF1YWwgPSBDaGVja2VyLnByb3RvdHlwZS5lcVxyXG5cclxuLyoqXHJcbiAqIOajgOafpeaYr+WQpuacieafkOS4quWxnuaAp++8iOS4jeWMheaLrOWOn+Wei+mTvuS4iueahOWxnuaAp++8iVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHthbnl9IGtleSDlsZ7mgKflkI1cclxuICogQHJldHVybiDkvb/nlKjnm7jlupTlsZ7mgKflgLzmnoTpgKDnmoRDaGVja2Vy5a+56LGh77yM5L2/55Sob3duZXLot7Plm57mnKzlr7nosaFcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcblxyXG4gIHZlcmlmeShpc0V4aXN0KG9iaiksIG1lc3NhZ2UoJ2lzRXhpc3QnLCBvYmosIG5hbWUsIGFyZ3VtZW50cykpXHJcbiAgdmVyaWZ5KG9iai5oYXNPd25Qcm9wZXJ0eSAmJiBvYmouaGFzT3duUHJvcGVydHkoa2V5KSxcclxuXHRcdG1lc3NhZ2UoJ2hhcycsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuXHJcbiAgcmV0dXJuIG5ldyBDaGVja2VyKG9ialtrZXldLCBuYW1lICsgJy4nICsga2V5LCB0aGlzKVxyXG59XHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pyJ5p+Q5Liq5bGe5oCn77yI5LiN5YyF5ous5Y6f5Z6L6ZO+5LiK55qE5bGe5oCn77yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcmV0dXJuIOS9v+eUqOebuOW6lOWxnuaAp+WAvOaehOmAoOeahENoZWNrZXLlr7nosaHvvIzkvb/nlKhvd25lcui3s+WbnuacrOWvueixoVxyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuaGFzT3duID0gQ2hlY2tlci5wcm90b3R5cGUuaGFzXHJcblxyXG4vKipcclxuICog5qOA5p+l5piv5ZCm5pyJ5p+Q5Liq5bGe5oCn77yI5YyF5ous5Y6f5Z6L6ZO+5LiK55qE5bGe5oCn77yJXHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge2FueX0ga2V5IOWxnuaAp+WQjVxyXG4gKiBAcmV0dXJuIOS9v+eUqOebuOW6lOWxnuaAp+WAvOaehOmAoOeahENoZWNrZXLlr7nosaHvvIzkvb/nlKhvd25lcui3s+WbnuacrOWvueixoVxyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUuZ290ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuXHJcbiAgdmVyaWZ5KGlzRXhpc3Qob2JqKSwgbWVzc2FnZSgnaXNFeGlzdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuICB2ZXJpZnkoIWlzVW5kZWZpbmVkKG9ialtrZXldKSwgbWVzc2FnZSgnZ290Jywgb2JqLCBuYW1lLCBhcmd1bWVudHMpKVxyXG5cclxuICByZXR1cm4gbmV3IENoZWNrZXIob2JqW2tleV0sIG5hbWUgKyAnLicgKyBrZXksIHRoaXMpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmo4Dmn6XmmK/lkKbmnIlsZW5ndGjlsZ7mgKfvvIjljIXmi6zljp/lnovpk77kuIrnmoTlsZ7mgKfvvIlcclxuICogXHJcbiAqIEBtZW1iZXJvZiBDaGVja2VyXHJcbiAqIEByZXR1cm4g5L2/55SobGVuZ3Ro5bGe5oCn5p6E6YCg55qEQ2hlY2tlcuWvueixoe+8jOS9v+eUqG93bmVy6Lez5Zue5pys5a+56LGhXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMuZ290KCdsZW5ndGgnKVxyXG59XHJcblxyXG4vKipcclxuICog5L2/55SobWFw5Ye95pWw6L2s5YyW5a+56LGh77yM5bm26L+U5Zue55So6L2s5YyW6L+H55qE5a+56LGh5p6E6YCg55qEQ2hlY2tlclxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IOi9rOWMluWHveaVsO+8jOWmguaenOS4uuWtl+espuS4su+8jOWImeiwg+eUqOW+heajgOafpeWvueixoeWQjOWQjeaWueazle+8jOWQjumdoueahOWPguaVsOS8muS8oOe7meebuOW6lOaWueazlVxyXG4gKiBAcmV0dXJuIOS9v+eUqOi9rOWMlui/h+eahOWvueixoeaehOmAoOeahENoZWNrZXLvvIzkvb/nlKhvd25lcui3s+WbnuacrOWvueixoVxyXG4gKi9cclxuQ2hlY2tlci5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gKGZuKSB7XHJcbiAgdmFyIG9iaiA9IHRoaXMub2JqX1xyXG4gIHZhciBuYW1lID0gdGhpcy5uYW1lX1xyXG4gIHZhciBtYXBPYmpcclxuXHJcbiAgdmVyaWZ5KGlzRXhpc3Qob2JqKSwgbWVzc2FnZSgnaXNFeGlzdCcsIG9iaiwgbmFtZSwgYXJndW1lbnRzKSlcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICBtYXBPYmogPSBmbihvYmopXHJcbiAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKGZuKSkge1xyXG4gICAgICB2YXIgZiA9IG9ialtmbl1cclxuICAgICAgaWYgKHZlcmlmeUludGVybmFsKGlzRnVuY3Rpb24oZiksXHJcblx0XHRcdFx0XHQnQmFkIHBhcmFtOiB0aGUgb2JqIGhhcyBOT1QgZ290IGEgbWV0aG9kIGNhbGxlZCcgKyBmbikpIHtcclxuICAgICAgICBtYXBPYmogPSBmLmFwcGx5KG9iaiwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSlcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmVyaWZ5SW50ZXJuYWwoZmFsc2UsICdCYWQgcGFyYW06IGZuIGlzIGlsbGVnYWwnKVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgdmVyaWZ5KGZhbHNlLCBlcnIubWVzc2FnZSlcclxuICB9XHJcblxyXG4gIHZhciBzdHIgPSBuYW1lICsgJz0+JyArIChpc1N0cmluZyhmbikgPyBmbiA6IChmbi5uYW1lIHx8ICdbQW5vbnltb3VzIEZ1bmN0aW9uXScpKVxyXG4gIHJldHVybiBuZXcgQ2hlY2tlcihtYXBPYmosIHN0ciwgdGhpcylcclxufVxyXG5cclxuZnVuY3Rpb24gZXJyb3JNZXNzYWdlIChmbikge1xyXG4gIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG5cclxuICB0cnkge1xyXG4gICAgaWYgKCFmbi5hcHBseSh0aGlzLCBhcmdzKSkge1xyXG4gICAgICB2YXIgbWVzc2FnZSA9IGZuLm5hbWUgfHwgZm4udG9TdHJpbmcoKVxyXG5cclxuICAgICAgcmV0dXJuIG1lc3NhZ2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBlcnIubWVzc2FnZVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOS9v+eUqOiHquWumuS5ieWHveaVsOaIlnBvbGljeeajgOafpVxyXG4gKiBcclxuICogQG1lbWJlcm9mIENoZWNrZXJcclxuICogQHBhcmFtIHtGdW5jdGlvbnxQb2xpY3l9IGZuIOajgOafpeWHveaVsOaIlnBvbGljee+8jOWPguaVsOS4uuW+heajgOafpeWvueixoVxyXG4gKiBAcmV0dXJuIHRoaXNcclxuICovXHJcbkNoZWNrZXIucHJvdG90eXBlLm1lZXQgPSBmdW5jdGlvbiAoZm4pIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIGVycm9yTXNnXHJcblxyXG4gIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgZXJyb3JNc2cgPSBlcnJvck1lc3NhZ2UoZm4sIG9iailcclxuICB9IGVsc2UgaWYgKGZuLmlzUG9saWN5KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBmbi5fX2V4ZWModGhpcylcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgZXJyb3JNc2cgPSBmbi5fX3BhdGgoKVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB2ZXJpZnlJbnRlcm5hbChmYWxzZSwgJ0JhZCBwYXJhbTogZm4gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcG9saWN5JylcclxuICB9XHJcblxyXG4gIHZlcmlmeSghZXJyb3JNc2csIG1lc3NhZ2UoJ21lZXQnLCBvYmosIG5hbWUsIFtlcnJvck1zZ10pKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5L2/55So4oCc5LiU4oCd5YWz57O757uE5ZCI5qOA5p+l5Ye95pWw5oiWcG9saWN5XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBvbGljeX0geCDlh73mlbDmiJZQb2xpY3nlrp7kvovvvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAoeCkge1xyXG4gIHZhciBvYmogPSB0aGlzLm9ial9cclxuICB2YXIgbmFtZSA9IHRoaXMubmFtZV9cclxuICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxyXG4gIHZhciBlcnJvck1zZ1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICB2YXIgZm4gPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgZXJyb3JNc2cgPSBlcnJvck1lc3NhZ2UoZm4sIG9iailcclxuICAgICAgaWYgKGVycm9yTXNnKSB7XHJcbiAgICAgICAgZXJyb3JNc2cgPSBtZXNzYWdlKCdhbmQnLCBvYmosIG5hbWUsIFtpLCBlcnJvck1zZ10pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChmbi5pc1BvbGljeSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGZuLl9fZXhlYyh0aGlzKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgZXJyb3JNc2cgPSBtZXNzYWdlKCdhbmQnLCBvYmosIG5hbWUsIFtpLCBmbi5fX3BhdGgoKV0pXHJcbiAgICAgICAgYnJlYWtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmVyaWZ5SW50ZXJuYWwoZmFsc2UsICdCYWQgcGFyYW06IGFyZ3VtZW50WycgKyBpICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcG9saWN5JylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcmlmeSghZXJyb3JNc2csIGVycm9yTXNnKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5L2/55So4oCc5oiW4oCd5YWz57O757uE5ZCI5qOA5p+l5Ye95pWw5oiWcG9saWN5XHJcbiAqIFxyXG4gKiBAbWVtYmVyb2YgQ2hlY2tlclxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFBvbGljeX0geCDlh73mlbDmiJZQb2xpY3nlrp7kvovvvIzlj6/ku6XkuLrlpJrkuKpcclxuICogQHJldHVybiB0aGlzXHJcbiAqL1xyXG5DaGVja2VyLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uICgpIHtcclxuICB2YXIgb2JqID0gdGhpcy5vYmpfXHJcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGhcclxuICB2YXIgZXJyb3JEZXRhaWwgPSBbXVxyXG4gIHZhciBlcnJvckNvdW50ID0gMFxyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICB2YXIgZm4gPSBhcmd1bWVudHNbaV1cclxuXHJcbiAgICBpZiAoaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgdmFyIGVycm9yTXNnID0gZXJyb3JNZXNzYWdlKGZuLCBvYmopXHJcbiAgICAgIGlmIChlcnJvck1zZykge1xyXG4gICAgICAgIGVycm9yRGV0YWlsLnB1c2goZXJyb3JNc2cpXHJcbiAgICAgICAgZXJyb3JDb3VudCsrXHJcbiAgICAgICAgY29udGludWVcclxuICAgICAgfVxyXG5cclxuICAgICAgYnJlYWtcclxuICAgIH0gZWxzZSBpZiAoZm4uaXNQb2xpY3kpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBmbi5fX2V4ZWModGhpcylcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZXJyb3JEZXRhaWwucHVzaChmbi5fX3BhdGgoKSlcclxuICAgICAgICBlcnJvckNvdW50KytcclxuICAgICAgICBjb250aW51ZVxyXG4gICAgICB9XHJcblxyXG4gICAgICBicmVha1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmVyaWZ5SW50ZXJuYWwoZmFsc2UsICdCYWQgcGFyYW06IGFyZ3VtZW50WycgKyBpICsgJ10gaXMgTk9UIGEgZnVuY3Rpb24gb3IgcG9saWN5JylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZlcmlmeShlcnJvckNvdW50IDwgbGVuLCBtZXNzYWdlKCdvcicsIG9iaiwgbmFtZSwgZXJyb3JEZXRhaWwpKVxyXG5cclxuICByZXR1cm4gdGhpc1xyXG59XHJcblxyXG4vKipcclxuICog5ZCm5a6a5qOA5p+l5Zmo77yI5a+5Q2hlY2tlcueahOavj+S4quajgOafpeaWueazleWPluKAnOmdnuKAne+8iVxyXG4gKiBcclxuICogQGNsYXNzXHJcbiAqIEBwYXJhbSB7Q2hlY2tlcn0gY2hlY2tlciBcclxuICovXHJcbmZ1bmN0aW9uIE5vdENoZWNrZXIgKGNoZWNrZXIpIHtcclxuICB0aGlzLmNoZWNrZXJfID0gY2hlY2tlclxyXG59XHJcblxyXG5mb3IgKHZhciBtZXRob2ROYW1lIGluIENoZWNrZXIucHJvdG90eXBlKSB7XHJcbiAgdmFyIG1ldGhvZCA9IENoZWNrZXIucHJvdG90eXBlW21ldGhvZE5hbWVdXHJcblxyXG4gIGlmICghQ2hlY2tlci5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkobWV0aG9kTmFtZSkgfHxcclxuXHRcdCFpc0Z1bmN0aW9uKG1ldGhvZCkpIHtcclxuICAgIGNvbnRpbnVlXHJcbiAgfVxyXG5cclxuICBOb3RDaGVja2VyLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IChmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLmNoZWNrZXJfXHJcbiAgICAgIHZhciBvYmogPSB0aGF0Lm9ial9cclxuICAgICAgdmFyIG9iak5hbWUgPSB0aGF0Lm5hbWVfXHJcbiAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKVxyXG4gICAgICB2YXIgeWVzID0gZmFsc2VcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhhdFtuYW1lXS5hcHBseSh0aGF0LCBhcmdzKVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBpZiAoZXJyLm1lc3NhZ2UuaW5kZXhPZignW1BBUkFNLUNIRUNLXScpID09PSAwKSB7XHJcbiAgICAgICAgICB5ZXMgPSB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRocm93IGVyciAvLyDlhoXpg6jplJnor6/vvIzpnZ7mo4Dmn6XlpLHotKVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZlcmlmeSh5ZXMsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbWVzc2FnZShuYW1lLCBvYmosIG9iak5hbWUsIGFyZ3MpKClcclxuXHRcdFx0XHRcdC5yZXBsYWNlKCdbUEFSQU0tQ0hFQ0tdJywgJ1tQQVJBTS1DSEVDS11bTk9UXScpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gdGhhdFxyXG4gICAgfVxyXG4gIH0pKG1ldGhvZE5hbWUpXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9jaGVjay5qcyIsIi8qKlxyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKiBAZmlsZW92ZXJ2aWV3XHJcbiAqIOagueaNruS4gOS4quaWueazleaUr+aMgemTvuW8j+iwg+eUqOeahOexuyBB77yM55Sf5oiQ5LiA5Liq5o+Q5Y+W5YW25pa55rOV55qE4oCccG9saWN54oCd57G744CCXHJcbiAqIOmTvuW8j+iwg+eUqCBwb2xpY3kg55qE5pa55rOV77yM6L+U5Zue5LiA5Liq5Ye95pWw77yM5omn6KGM5Ye95pWw5Y2z5Y+v6ZO+5byP5omn6KGMIEEg55qE55u45bqU5pa55rOV44CCXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnXHJcblxyXG52YXIgaXMgPSByZXF1aXJlKCd5LXV0aWxzL2lzJylcclxudmFyIGRlZiA9IHJlcXVpcmUoJy4vZGVmJylcclxuXHJcbnZhciBpc0Z1bmN0aW9uID0gaXMuaXNGdW5jdGlvblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtYWtlUG9saWN5XHJcblxyXG4vKipcclxuICog55Sf5oiQIHBvbGljeVxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdG8g6KaB55Sf5oiQIHBvbGljeSDnmoTnsbvljp/lnotcclxuICogQHBhcmFtIGNoYWluaW5nUHJvcHMg5pSv5oyB6ZO+5byP6LCD55So55qE6Ieq5a6a5LmJ5bGe5oCn5ZCN5YiX6KGoXHJcbiAqIEBwYXJhbSBjaGFpbmluZ01ldGhvZHMg5pSv5oyB6ZO+5byP6LCD55So55qE5pa55rOV5ZCN5YiX6KGo77yM5aaC5p6c5LiN5aGr77yM6buY6K6k5omA5pyJ5pa55rOV6YO95pSv5oyB6ZO+5byP6LCD55SoXHJcbiAqIEByZXR1cm4g55Sf5oiQ55qEIHBvbGljeSDlrp7kvotcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VQb2xpY3kgKHByb3RvLCBjaGFpbmluZ1Byb3BzLCBjaGFpbmluZ01ldGhvZHMpIHtcclxuICBmdW5jdGlvbiBQb2xpY3kgKGZuLCBwcmV2LCBuYW1lKSB7XHJcbiAgICB0aGlzLmZuXyA9IGZuXHJcbiAgICB0aGlzLnByZXZfID0gcHJldlxyXG4gICAgdGhpcy5uYW1lXyA9IG5hbWVcclxuICAgIHRoaXMuX19pbml0Q3VzdG9tUHJvcHMoY2hhaW5pbmdQcm9wcylcclxuICB9XHJcblxyXG4gIFBvbGljeS5wcm90b3R5cGUuaXNQb2xpY3kgPSB0cnVlXHJcblxyXG4gIC8vIOWboOS4uiBQb2xpY3kucHJvdG90eXBlIOS4iuS8mua3u+WKoOiuuOWkmuWQjeWtl+acquefpeeahOaWueazle+8jOaJgOS7peiHquW3seeahOaWueazleWKoFwiX19cIuS7peinhOmBv+mHjeWQjVxyXG4gIFBvbGljeS5wcm90b3R5cGUuX19pbml0Q3VzdG9tUHJvcHMgPSBmdW5jdGlvbiAoY2hhaW5pbmdQcm9wcykge1xyXG4gICAgaWYgKGNoYWluaW5nUHJvcHMgJiYgY2hhaW5pbmdQcm9wcy5sZW5ndGgpIHtcclxuICAgICAgdmFyIGxlbiA9IGNoYWluaW5nUHJvcHMubGVuZ3RoXHJcbiAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICAgIHZhciBwcm9wTmFtZSA9IGNoYWluaW5nUHJvcHNbaV1cclxuICAgICAgICB2YXIgZm4gPSAoZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9saWN5KGZ1bmN0aW9uICh0aGF0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoYXRbcHJvcF1cclxuICAgICAgICAgICAgfSwgc2VsZiwgcHJvcClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KShwcm9wTmFtZSlcclxuXHJcbiAgICAgICAgZGVmKHRoaXMsIHByb3BOYW1lLCBmbilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgUG9saWN5LnByb3RvdHlwZS5fX2V4ZWMgPSBmdW5jdGlvbiAodGhhdCkge1xyXG4gICAgdmFyIG15VGhhdCA9IHRoYXRcclxuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2X1xyXG4gICAgdmFyIGZuID0gdGhpcy5mbl9cclxuXHJcbiAgICBpZiAocHJldikge1xyXG4gICAgICBteVRoYXQgPSBwcmV2Ll9fZXhlYyh0aGF0KVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICByZXR1cm4gZm4obXlUaGF0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGF0XHJcbiAgfVxyXG5cclxuICBQb2xpY3kucHJvdG90eXBlLl9fcGF0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2X1xyXG4gICAgdmFyIG5hbWUgPSB0aGlzLm5hbWVfXHJcbiAgICB2YXIgcmV0ID0gcHJldiA/IHByZXYuX19wYXRoKCkgOiAnJ1xyXG5cclxuICAgIHJldCArPSAnLicgKyBuYW1lXHJcblxyXG4gICAgcmV0dXJuIHJldFxyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIga2V5IGluIHByb3RvKSB7XHJcbiAgICBpZiAoIXByb3RvLmhhc093blByb3BlcnR5KGtleSkgfHwgIWlzRnVuY3Rpb24ocHJvdG9ba2V5XSkpIHtcclxuICAgICAgY29udGludWVcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhaW5pbmdNZXRob2RzICYmIGNoYWluaW5nTWV0aG9kcy5pbmRleE9mKGtleSkgPT09IC0xKSB7XHJcbiAgICAgIGNvbnRpbnVlXHJcbiAgICB9XHJcblxyXG4gICAgUG9saWN5LnByb3RvdHlwZVtrZXldID0gKGZ1bmN0aW9uIChmbk5hbWUpIHtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMClcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb2xpY3koZnVuY3Rpb24gKHRoYXQpIHtcclxuICAgICAgICAgIHJldHVybiB0aGF0W2ZuTmFtZV0uYXBwbHkodGhhdCwgYXJncylcclxuICAgICAgICB9LCBzZWxmLCBmbk5hbWUpXHJcbiAgICAgIH1cclxuICAgIH0pKGtleSlcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgUG9saWN5KG51bGwsIG51bGwsICdwb2xpY3knKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcG9saWN5LmpzIiwiLyoqXHJcbiAqIEBmaWxlIOWvvOWHuuaOpeWPo1xyXG4gKiBAYXV0aG9yIFkzR1xyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0J1xyXG5cclxudmFyIGNoZWNrID0gcmVxdWlyZSgnLi9saWIvY2hlY2snKVxyXG52YXIgbWFrZVBvbGljeSA9IHJlcXVpcmUoJy4vbGliL3BvbGljeScpXHJcblxyXG52YXIgZXhwbyA9IGNoZWNrLmNoZWNrXHJcbmV4cG8ucG9saWN5ID0gbWFrZVBvbGljeShjaGVjay5DaGVja2VyLnByb3RvdHlwZSwgWydub3QnLCAnb3duZXInXSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZXhwb1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gaW5kZXguanMiLCIvKipcbiAqIEBmaWxlIGRlZXAgZXF1YWzlrp7njrBcbiAqIEBhdXRob3IgWTNHXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogZGVlcCBlcXVhbFxuICpcbiAqIEBwYXJhbSAge2FueX0gbGVmdCDlj4LmlbAxXG4gKiBAcGFyYW0gIHthbnl9IHJpZ2h0IOWPguaVsDJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IHN0cmljdCDlpoLmnpzkuLpmYWxzZe+8jOWImT095oiQ56uL5pe25Y2z6L+U5ZuedHJ1ZVxuICogQHJldHVybiB7Qm9vbGVhbn0g5q+U6L6D57uT5p6cXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwgKGxlZnQsIHJpZ2h0LCBzdHJpY3QpIHtcbiAgaWYgKGxlZnQgPT09IHJpZ2h0KSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICghbGVmdCB8fCAhcmlnaHQgfHwgLy8g6ZKI5a+55YW25Lit5LiA5Liq5pivbnVsbOeahOaDheWGtVxuICAgIHR5cGVvZiBsZWZ0ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgcmlnaHQgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHN0cmljdCA/IChsZWZ0ID09PSByaWdodCkgOiAobGVmdCA9PSByaWdodClcbiAgfVxuXG4gIGlmIChsZWZ0IGluc3RhbmNlb2YgRGF0ZSAmJiByaWdodCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbGVmdC5nZXRUaW1lKCkgPT09IHJpZ2h0LmdldFRpbWUoKVxuICB9XG5cbiAgLy8g55Sf5oiQ5q2j5YiZ6KGo6L6+5byP5qCH5rOoXG4gIHZhciBnZW5GbGFncyA9IGZ1bmN0aW9uIChyZXhwKSB7XG4gICAgcmV0dXJuIChyZXhwLmdsb2JhbCA/ICdnJyA6ICcnKSArIChyZXhwLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgKHJleHAubXVsdGlsaW5lID8gJ20nIDogJycpICsgKHJleHAuc3RpY2t5ID8gJ3knIDogJycpXG4gIH1cblxuICBpZiAobGVmdCBpbnN0YW5jZW9mIFJlZ0V4cCAmJiByaWdodCBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgIHJldHVybiBsZWZ0LnRvU3RyaW5nKCkgPT09IHJpZ2h0LnRvU3RyaW5nKCkgJiYgZ2VuRmxhZ3MobGVmdCkgPT09IGdlbkZsYWdzKHJpZ2h0KVxuICB9XG5cbiAgaWYgKGxlZnQuY29uc3RydWN0b3IucHJvdG90eXBlICE9PSByaWdodC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciBrTGVmdCA9IE9iamVjdC5rZXlzKGxlZnQpXG4gIHZhciBrUmlnaHQgPSBPYmplY3Qua2V5cyhyaWdodClcblxuICBpZiAoa0xlZnQubGVuZ3RoICE9PSBrUmlnaHQubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBrTGVmdC5zb3J0KClcbiAga1JpZ2h0LnNvcnQoKVxuXG4gIGlmICgha0xlZnQuZXZlcnkoZnVuY3Rpb24gKGVsLCBpbmRleCkgeyByZXR1cm4gZWwgPT09IGtSaWdodFtpbmRleF0gfSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciByZXQgPSBrTGVmdC5ldmVyeShmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGVxdWFsKGxlZnRba2V5XSwgcmlnaHRba2V5XSlcbiAgfSlcblxuICByZXR1cm4gcmV0XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL2VxdWFsLmpzIiwiLyoqXG4gKiBAZmlsZSDplJnor6/mtojmga9cbiAqIEBhdXRob3IgWTNHXG4gKi9cblxudmFyIGlzID0gcmVxdWlyZSgneS11dGlscy9pcycpXG52YXIgaXNTdHJpbmcgPSBpcy5pc1N0cmluZ1xuXG4vLyBleHBvcnTkuIDkuKrnlJ/miJDlh73mlbDnmoTlh73mlbDvvIzmmK/lm6DkuLrlpKflpJrmlbDml7blgJltZXNzYWdl5LiN6ZyA6KaB5omT5Y2w77yM5q2k5pe25bm25LiN6ZyA6KaB55yf55qE6K6h566XbWVzc2FnZeaYr+S7gOS5iFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZW50cnksIG9iaiwgbmFtZSwgYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXNzYWdlKGVudHJ5LCBvYmosIG5hbWUsIGFyZ3MpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRTdHJpbmcgKG9iaikge1xuICByZXR1cm4gaXNTdHJpbmcob2JqKSA/ICgnXCInICsgb2JqICsgJ1wiJykgOiAoJycgKyBvYmopXG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2UgKGVudHJ5LCBvYmosIG5hbWUsIGFyZ3MpIHtcbiAgdmFyIHJlYXNvblxuXG4gIGlmIChlbnRyeSA9PT0gJ2lzJykge1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgJyArIEFycmF5LnByb3RvdHlwZS5qb2luLmNhbGwoYXJncywgJywgJylcbiAgfSBlbHNlIGlmIChlbnRyeS5pbmRleE9mKCdpcycpID09PSAwKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCBhKG4pICcgKyBlbnRyeS5yZXBsYWNlKC9eaXMvLCAnJykudG9Mb3dlckNhc2UoKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnaW5zdGFuY2VPZicpIHtcbiAgICB2YXIgY3Rvck5hbWUgPSAoYXJnc1swXSB8fCB7fSkubmFtZSB8fCAnW3Vua25vd25dJ1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgYW4gaW5zdGFuY2Ugb2YgZ2l2ZW4gY29uc3RydWN0b3I6ICcgKyBjdG9yTmFtZVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnZ3QnIHx8IGVudHJ5ID09PSAnZ3JlYXRlclRoYW4nKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCBncmVhdGVyIHRoYW4gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdsdCcgfHwgZW50cnkgPT09ICdsZXNzVGhhbicpIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIGxlc3MgdGhhbiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ2VndCcgfHwgZW50cnkgPT09ICdlcXVhbE9yR3JlYXRlclRoYW4nKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCBncmVhdGVyIHRoYW4gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdlbHQnIHx8IGVudHJ5ID09PSAnZXF1YWxPckxlc3NUaGFuJykge1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgbGVzcyB0aGFuICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnd2l0aGluJykge1xuICAgIHJlYXNvbiA9ICdpcyBOT1QgaW4gcmFuZ2Uocyk6ICcgKyBBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKGFyZ3MsICcsICcpXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdtYXRjaCcpIHtcbiAgICByZWFzb24gPSAnZG9lcyBOT1QgbWF0Y2ggcmVnZXhwOiAnICsgcHJpbnRTdHJpbmcoYXJnc1swXSlcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ3NhbWUnKSB7XG4gICAgcmVhc29uID0gJ2lzIE5PVCB0aGUgc2FtZSBvYmplY3QgdG8gJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdlcScgfHwgZW50cnkgPT09ICdlcXVhbCcpIHtcbiAgICByZWFzb24gPSAnaXMgTk9UIGVxdWFsIHRvICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnaGFzJyB8fCBlbnRyeSA9PT0gJ2hhc093bicpIHtcbiAgICByZWFzb24gPSAnaGFzIE5PIG93biBwcm9wZXJ0eTogJyArIHByaW50U3RyaW5nKGFyZ3NbMF0pXG4gIH0gZWxzZSBpZiAoZW50cnkgPT09ICdnb3QnKSB7XG4gICAgcmVhc29uID0gJ2hhcyBOT1QgcHJvcGVydHk6ICcgKyBwcmludFN0cmluZyhhcmdzWzBdKVxuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnYW5kJykge1xuICAgIC8vIGFyZ3NbMF0g5piv5omn6KGM5aSx6LSl55qE5qOA5p+l5bqP5Y+3LGFyZ3NbMV0g5piv5YW35L2T5Y6f5ZugXG4gICAgdmFyIG5vID0gYXJnc1swXVxuICAgIHZhciBkZXRhaWwgPSBhcmdzWzFdIHx8ICd1bmtub3duJ1xuXG4gICAgaWYgKGRldGFpbC5pc1BvbGljeSkge1xuICAgICAgZGV0YWlsID0gZGV0YWlsLnBhdGgoKVxuICAgIH1cblxuICAgIHJlYXNvbiA9ICdkb2VzIE5PVCBwYXNzIHRoZSBbJyArXG4gICAgICBubyArICdddGggb2YgYW4gXCJBTkRcIiBjaGVjaywgZGV0YWlsOiB7JyArIGRldGFpbCArICd9J1xuICB9IGVsc2UgaWYgKGVudHJ5ID09PSAnb3InKSB7XG4gICAgdmFyIGRldGFpbHMgPSBbXVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgKytpKSB7XG4gICAgICBkZXRhaWwgPSBhcmdzW2ldIHx8ICd1bmtub3duJ1xuXG4gICAgICBpZiAoZGV0YWlsLmlzUG9saWN5KSB7XG4gICAgICAgIGRldGFpbCA9IGRldGFpbC5wYXRoKClcbiAgICAgIH1cblxuICAgICAgZGV0YWlscy5wdXNoKGRldGFpbClcbiAgICB9XG5cbiAgICByZWFzb24gPSAnZG9lcyBOT1QgcGFzcyBhbiBcIk9SXCIgY2hlY2ssIGRldGFpbDogeycgKyBkZXRhaWxzLmpvaW4oJ317JykgKyAnfSdcbiAgfSBlbHNlIGlmIChlbnRyeSA9PT0gJ21lZXQnKSB7XG4gICAgcmVhc29uID0gJ2RvZXMgTk9UIHBhc3MgdGhlIGNoZWNrLCBkZXRhaWw6IHsnICsgYXJnc1swXSArICd9J1xuICB9IGVsc2Uge1xuICAgIHJlYXNvbiA9ICdkb2VzIE5PVCBwYXNzIHRoZSBjaGVjayAnICsgZW50cnlcbiAgfVxuXG4gIHJldHVybiAnW1BBUkFNLUNIRUNLXSBDaGVjayBGYWlsdXJlOiAnICsgbmFtZSArICcoJyArIHByaW50U3RyaW5nKG9iaikgKyAnKSAnICsgcmVhc29uICsgJy4nXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL21lc3NhZ2UuanMiLCIvKipcclxuICogQGZpbGUg5bCG5Ye95pWw6L2s5YyW5Li65byC5q2l5Ye95pWwXHJcbiAqIEBhdXRob3IgWTNHXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIOWwhuWHveaVsOi9rOWMluS4uuW8guatpeWHveaVsFxyXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm4g6L6T5YWl5Ye95pWwXHJcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSDovpPlh7rlh73mlbBcclxuICogQGV4cG9ydFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9Bc3luYyAoZm4pIHtcclxuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmbiBpcyBOT1QgYSBmdW5jdGlvbi4nKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXN5bmNGbiAoKSB7XHJcbiAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiBmbi5hcHBseSh0aGlzLCBhcmdzKSwgMClcclxuICB9XHJcblxyXG4gIC8vIGZvciBkZWJ1Z1xyXG4gIGFzeW5jRm4ub3JpZ2luYWxGdW5jdGlvbiA9IGZuXHJcblxyXG4gIHJldHVybiBhc3luY0ZuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIG5vZGVfbW9kdWxlcy95LXV0aWxzL3RvQXN5bmMuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQVVBO0FBVUE7QUFVQTtBQVVBO0FBV0E7QUFVQTtBQVVBO0FBVUE7QUFVQTtBQVdBO0FBVUE7QUFXQTtBQWNBO0FBZ0JBO0FBeUJBO0FBQ0E7Ozs7Ozs7QUE5TEE7Ozs7O0FBS0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBOzs7Ozs7OztBQ3pNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7QUNoQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOXJCQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2R0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5REE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQVhBOzs7OztBQUtBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
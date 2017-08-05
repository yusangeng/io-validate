/**
 * @file 参数检查器
 * @author Y3G
 */

'use strict'

var isArguments = require('lodash/isArguments')
var isArrayBuffer = require('lodash/isArrayBuffer')
var isArrayLike = require('lodash/isArrayLike')
var isArrayLikeObject = require('lodash/isArrayLikeObject')
var isBoolean = require('lodash/isBoolean')
var isBuffer = require('lodash/isBuffer')
var isDate = require('lodash/isDate')
var isElement = require('lodash/isElement')
var isEmpty = require('lodash/isEmpty')
var isError = require('lodash/isError')
var isFunction = require('lodash/isFunction')
var isLength = require('lodash/isLength')
var isMap = require('lodash/isMap')
var isNative = require('lodash/isNative')
var isNil = require('lodash/isNil')
var isNull = require('lodash/isNull')
var isNumber = require('lodash/isNumber')
var isObject = require('lodash/isObject')
var isObjectLike = require('lodash/isObjectLike')
var isPlainObject = require('lodash/isPlainObject')
var isRegExp = require('lodash/isRegExp')
var isSet = require('lodash/isSet')
var isString = require('lodash/isString')
var isSymbol = require('lodash/isSymbol')
var isTypedArray = require('lodash/isTypedArray')
var isUndefined = require('lodash/isUndefined')
var isWeakMap = require('lodash/isWeakMap')
var isWeakSet = require('lodash/isWeakSet')

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

var message = require('./message')
var def = require('./def')
var equal = require('./equal')

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

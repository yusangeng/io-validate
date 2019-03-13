/**
 * 参数类型检查器
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var firstUpperCase = require('../utils/firstUpperCase')
var printString = require('../utils/printString')

var isArguments = require('lodash/isArguments')
var isArray = require('lodash/isArray')
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

var isExist = function isExist (o) {
  return !(isUndefined(o) || isNull(o))
}

var { isInteger, isSafeInteger } = Number

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
  isExist: isExist,
  isInteger: isInteger,
  isSafeInteger: isSafeInteger
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

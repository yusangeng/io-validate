/**
 * 是否是元素为特定类型的数组
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var printString = require('../utils/printString')
var isArray = require('lodash/isArray')
var isFunction = require('lodash/isFunction')
var Checker = require('../Validator')

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

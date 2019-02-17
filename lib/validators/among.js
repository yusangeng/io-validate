/**
 * 检查是否与参数中的某一个相等
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')
var equal = require('../utils/equal')

var isFunction = require('../utils/equal')

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

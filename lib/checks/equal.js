/**
 * 检查是否相等
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')
var defaultEqual = require('../utils/equal')

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

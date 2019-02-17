/**
 * 检查是否包含属性(包括原型链)
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')
var isExist = require('../utils/isExist')

var isUndefined = require('lodash/isUndefined')

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

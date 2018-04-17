/**
 * 使用hasOwnProperty检查对象是否包含属性
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')
var isExist = require('../utils/isExist')

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

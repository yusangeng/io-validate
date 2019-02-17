/**
 * 判断数组长度(也包括仿数组)
 * @author Y3G
 */

'use strict'

var gotCheck = require('./got')

module.exports = {
  length: length
}

function length (target, name) {
  return gotCheck.got(target, name, 'length')
}

length.next = function (target, name) {
  return gotCheck.got.next(target, name, 'length')
}

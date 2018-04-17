/**
 * 生成用来打印的字符串
 * @author Y3G
 */

'use strict'

var isString = require('lodash/isString')
var isArray = require('lodash/isArray')

module.exports = printString

function printString (obj) {
  if (isString(obj)) {
    return '"' + obj + '"'
  } else if (isArray(obj)) {
    return '[' + obj.join(', ') + ']'
  }

  return '' + obj
}

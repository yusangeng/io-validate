/**
 * 小于
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')

var isNumber = require('lodash/isNumber')

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + ' is NOT less than ' + n
}

function lessThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target < n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.lessThan = lessThan
entries.lt = lessThan

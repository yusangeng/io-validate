/**
 * 小于等于
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var printString = require('../utils/printString')

var isNumber = require('lodash/isNumber')

var entries = {}

module.exports = entries

function message (target, name, n) {
  return name + '(' + printString(target) + ')' + ' is NOT equal or less than ' + n
}

function equalOrLessThan (target, name, n) {
  if (_v(isNumber(n), 'Bad param: n is NOT a number.')) {
    return target <= n ? undefined : message(target, name || 'parameter', n)
  }
}

entries.equalOrLessThan = equalOrLessThan
entries.elt = equalOrLessThan

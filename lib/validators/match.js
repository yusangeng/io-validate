/**
 * 检查是否符合正则表达式
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')

var isRegExp = require('lodash/isRegExp')

module.exports = {
  match: match
}

function message (target, name, rexp) {
  return name + ' does NOT match regexp: /' + rexp.source + '/'
}

function match (target, name, rexp) {
  if (_v(isRegExp(rexp), 'Bad param: n is NOT a regexp.')) {
    return rexp.test(target) ? undefined : message(target, name || 'parameter', rexp)
  }
}

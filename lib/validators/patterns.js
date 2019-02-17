/**
 * 常用正则表达式检查
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')

module.exports = {}

var rexps = {
  Email: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  IP: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  // TODO: bugfix
  // HTMLTag: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/
}

function message (target, name, patternName) {
  return name + '(' + printString(target) + ') does NOT match pattern ' + patternName
}

function patternCheck (target, name, pattern, patternName) {
  var match = pattern.test(target)
  return match ? undefined : message(target, name, patternName)
}

for (var key in rexps) {
  if (!rexps.hasOwnProperty(key)) {
    continue
  }

  module.exports['match' + key] = (function (key) {
    return function (target, name) {
      return patternCheck(target, name, rexps[key], key)
    }
  })(key)
}

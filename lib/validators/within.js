/**
 * 判断是否在区间内
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var printString = require('../utils/printString')

// var isArray = require('lodash/isArray')
var isString = require('lodash/isString')

module.exports = {
  within: within
}

var rexpRange = /^([([])([-+]?[\d.]+),\s*([-+]?[\d.]+)([\])])$/
var cache = {}

// 根据数学表达式生成判断函数
function genRangeFn (range) {
  var fn = cache[range]

  if (fn) return fn

  if (!_v(isString(range),
    'Bad param: range is NOT string.')) {
    return null
  }

  var match = rexpRange.exec(range)

  if (!_v(match && match.length === 5,
    'Bad param: bad range string: ' + range + '.')) {
    return null
  }

  try {
    var op1 = (match[1] === '[') ? '>=' : '>'
    var op2 = (match[2] === ']') ? '<=' : '<'
    var lowerBound = parseFloat(match[2])
    var higherBound = parseFloat(match[3])

    var fnSource = ('return (n $op1 $lowerBound) && (n $op2 $higherBound);')
      .replace('$op1', op1)
      .replace('$lowerBound', lowerBound)
      .replace('$op2', op2)
      .replace('$higherBound', higherBound)

    /* eslint no-new-func: 0 */
    fn = cache[range] = new Function(['n'], fnSource)
  } catch (err) {
    return null
  }

  return fn
}

function message (target, name, ranges) {
  return name + ' is NOT in range(s): ' + printString(ranges)
}

/**
 * 检查是否属于某个区间
 *
 * @param {String|Array<String>} ...ranges 区间字符串，形如[1,2), 可以为多个
 * @return {undefined|String} 错误消息
 */
function within (target, name) {
  var ranges = Array.prototype.slice.call(arguments, 2)
  var len = ranges.length

  if (len === 0) {
    return
  }

  var yes = false

  for (var i = 0; i < len; ++i) {
    var range = ranges[i]
    var fn = genRangeFn(range)

    if (fn) {
      yes = fn(target)
      if (yes) break
    }
  }

  return yes ? undefined : message(target, name || 'parameter', ranges)
}

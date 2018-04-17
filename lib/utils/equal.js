/**
 * deep equal简单实现
 * @author Y3G
 */

'use strict'

/**
 * deep equal
 *
 * @param  {any} left 参数1
 * @param  {any} right 参数2
 * @param  {Boolean} strict 如果为false，则==成立时即返回true
 * @return {Boolean} 比较结果
 */
module.exports = function equal (left, right, strict) {
  if (left === right) {
    return true
  }

  if (!left || !right || // 针对其中一个是null的情况
    typeof left !== 'object' || typeof right !== 'object') {
    /* eslint eqeqeq: "ignore" */
    return strict ? (left === right) : (left == right)
  }

  if (left instanceof Date && right instanceof Date) {
    return left.getTime() === right.getTime()
  }

  // 生成正则表达式标注
  var genFlags = function (rexp) {
    return (rexp.global ? 'g' : '') + (rexp.ignoreCase ? 'i' : '') +
      (rexp.multiline ? 'm' : '') + (rexp.sticky ? 'y' : '')
  }

  if (left instanceof RegExp && right instanceof RegExp) {
    return left.toString() === right.toString() && genFlags(left) === genFlags(right)
  }

  if (left.constructor.prototype !== right.constructor.prototype) {
    return false
  }

  var kLeft = Object.keys(left)
  var kRight = Object.keys(right)

  if (kLeft.length !== kRight.length) {
    return false
  }

  kLeft.sort()
  kRight.sort()

  if (!kLeft.every(function (el, index) { return el === kRight[index] })) {
    return false
  }

  var ret = kLeft.every(function (key) {
    return equal(left[key], right[key])
  })

  return ret
}

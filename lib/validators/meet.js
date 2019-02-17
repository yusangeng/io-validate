/**
 * 使用自定义函数或plan检查
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var getErrorMessage = require('../utils/getErrorMessage')

var isFunction = require('lodash/isFunction')

module.exports = {
  meet: meet
}

function message (target, name, errorMsg) {
  return name + ' does NOT pass the check, detail: {' + errorMsg + '}'
}

/**
 * 使用自定义函数或plan检查
 *
 * @param {Function|Plan} fn 检查函数或plan，参数为待检查对象
 * @return {undefined|String} 错误消息
 */
function meet (target, name, fn) {
  var errorMsg

  if (isFunction(fn)) {
    errorMsg = getErrorMessage(fn, target)
  } else if (fn.__isPlan) {
    try {
      fn.__exec(this)
    } catch (e) {
      errorMsg = fn.__path()
    }
  } else {
    _v(false, 'Bad param: fn is NOT a function or plan.')
  }

  return !errorMsg ? null : message(target, name || 'parameter', errorMsg)
}

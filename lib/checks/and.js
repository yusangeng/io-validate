/**
 * and检查
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var getErrorMessage = require('../utils/getErrorMessage')

var isFunction = require('lodash/isFunction')

module.exports = {
  and: and
}

function message (target, name, no, errorMsg) {
  return name + ' does NOT pass the ' + no + 'st/rd/th of an "AND" check, detail: [' + errorMsg + ']'
}

/**
 * 使用“且”关系组合检查函数或plan
 *
 * @param {Function|Plan} ...x 函数或Plan实例，可以为多个
 * @return {null|String} 错误消息
 */
function and (target, name, x) {
  var fns = Array.prototype.slice.call(arguments, 2)
  var len = fns.length
  var errorMsg = null

  for (var i = 0; i < len; ++i) {
    var fn = fns[i]

    if (isFunction(fn)) {
      errorMsg = getErrorMessage(fn, target)
      if (errorMsg) {
        errorMsg = message(target, name || 'parameter', i, errorMsg)
        break
      }
    } else if (fn.__isPlan) {
      try {
        fn.__exec(this)
      } catch (e) {
        errorMsg = message(target, name || 'parameter', i, fn.__path())
        break
      }
    } else {
      _v(false, 'Bad param: argument[' + i + '] is NOT a function or plan.')
    }
  }

  return errorMsg
}

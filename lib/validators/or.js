/**
 * or检查
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')
var getErrorMessage = require('../utils/getErrorMessage')

var isFunction = require('lodash/isFunction')

module.exports = {
  or: or
}

function message (target, name, no, errorDetail) {
  return name + ' does NOT pass the ' +
    no + 'st/rd/th of an "OR" check, detail: [' +
    errorDetail.map(function (el, index) { return index + ': ' + el }).join('; ') + ']'
}

/**
 * 使用“或”关系组合检查函数或plan
 *
 * @param {Function|Plan} ...x 函数或Plan实例，可以为多个
 * @return {undefined|String} 错误消息
 */
function or (target, name, x) {
  var fns = Array.prototype.slice.call(arguments, 2)
  var len = fns.length
  var errorDetail = []
  var errorCount = 0

  for (var i = 0; i < len; ++i) {
    var fn = fns[i]

    if (isFunction(fn)) {
      var errorMsg = getErrorMessage(fn, target)
      if (errorMsg) {
        errorDetail.push(errorMsg)
        errorCount++
        continue
      }

      break
    } else if (fn.__isPlan) {
      try {
        fn.__exec(this)
      } catch (err) {
        errorDetail.push(fn.__path())
        errorCount++
        continue
      }

      break
    } else {
      _v(false, 'Bad param: argument[' + i + '] is NOT a function or plan.')
    }
  }

  return errorCount < len ? null : message(target, name || 'parameter', errorDetail)
}

/**
 * 否定检查器
 * @author Y3G
 */

'use strict'

var verify = require('./utils/verify')
var printString = require('./utils/printString')

module.exports = NotChecker

/**
 * 否定检查器(对Checker的每个检查方法取“非”)
 *
 * @class
 * @param {Checker} checker
 */
function NotChecker (checker) {
  this.checker_ = checker
}

NotChecker.register = function (checks) {
  for (var key in checks) {
    if (!checks.hasOwnProperty(key)) continue

    NotChecker.prototype[key] = (function (checkName) {
      return function () {
        var that = this.checker_
        var args = Array.prototype.slice.call(arguments)
        var errMsg = null

        try {
          that[checkName].apply(that, args)
        } catch (err) {
          // console.log(err)
          if (err.isParamCheckError) {
            errMsg = err.message
          } else {
            throw err // 内部错误，非检查失败
          }
        }

        var realMsg = null

        if (errMsg) {
          realMsg = errMsg.replace('[VALIDATE-IO]', '[VALIDATE-IO][NOT]')
        } else {
          realMsg = '[VALIDATE-IO][NOT] ' + checkName + ' check error, target: ' + printString(this.checker_.target_)
        }

        verify(errMsg, realMsg)

        return that
      }
    })(key)
  }
}

/**
 * 断言
 * @author Y3G
 */

'use strict'

var isFunction = require('lodash/isFunction')

module.exports = verify

var prefix = '[PARAM-CHECK] Error: '

function verify (expr, message) {
  if (!expr) {
    var msg = prefix + (isFunction(message) ? message() : message) + '.'
    var err = new TypeError(msg)

    err.isParamCheckError = true

    throw err
  }
}

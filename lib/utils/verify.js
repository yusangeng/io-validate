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

    var stack = err.stack
    var lines = stack.replace(/^TypeError.+\n {4}/, '').split('\n').map(function (el) {
      return el.trim()
    })

    /*
    lines.forEach(function (line) {
      console.log(line)
    })
    */

    err.position = lines[2]
    throw err
  }
}

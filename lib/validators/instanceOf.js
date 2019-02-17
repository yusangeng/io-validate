/**
 * 检查所属的类(使用instanceof关键字判断)
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')

var isFunction = require('lodash/isFunction')

module.exports = {
  instanceOf: instanceOf
}

function message (target, name, ctor) {
  var ctorName = ctor.name || '[unknown]'
  return name + ' is NOT an instance of given constructor: ' + ctorName
}

function instanceOf (target, name, ctor) {
  if (_v(isFunction(ctor), 'Bad param: ctor is NOT a function.')) {
    return (target instanceof ctor) ? undefined : message(target, name || 'parameter', ctor)
  }
}

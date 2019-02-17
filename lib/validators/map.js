/**
 * map函数
 * @author Y3G
 */

'use strict'

var _v = require('../utils/_v')

var isFunction = require('lodash/isFunction')
var isString = require('lodash/isString')

module.exports = {
  map: map
}

/**
 * 使用map函数转化对象，并返回用转化过的对象构造的Checker
 *
 * @param {Function|String} 转化函数，如果为字符串，则调用待检查对象同名方法，后面的参数会传给相应方法
 * @return {undefined}
 */
function map (target, name, fn) {
  return void 0
}

map.next = function (target, name, fn) {
  var mapTarget

  try {
    if (isFunction(fn)) {
      mapTarget = fn(target)
    } else if (isString(fn)) {
      var f = target[fn]
      if (_v(isFunction(f), 'Bad param: the obj has NOT got a method called' + fn + '.')) {
        mapTarget = f.apply(target, Array.prototype.slice.call(arguments, 3))
      }
    } else {
      _v(false, 'Bad param: fn is illegal.')
    }
  } catch (err) {
    _v(false, err.message)
  }

  var mapName = name + '=>' + (isString(fn) ? fn : (fn.name || '[Anonymous Function]'))

  return {
    target: mapTarget,
    name: mapName
  }
}

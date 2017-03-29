/**
 * @author Y3G
 * @fileoverview
 * 根据一个方法支持链式调用的类 A，生成一个提取其方法的“policy”类。
 * 链式调用 policy 的方法，返回一个函数，执行函数即可链式执行 A 的相应方法。
 */

'use strict'

var is = require('y-utils/is')
var def = require('./def')

var isFunction = is.isFunction

module.exports = makePolicy

/**
 * 生成 policy
 *
 * @param proto 要生成 policy 的类原型
 * @param chainingProps 支持链式调用的自定义属性名列表
 * @param chainingMethods 支持链式调用的方法名列表，如果不填，默认所有方法都支持链式调用
 * @return 生成的 policy 实例
 */
function makePolicy (proto, chainingProps, chainingMethods) {
  function Policy (fn, prev, name) {
    this.fn_ = fn
    this.prev_ = prev
    this.name_ = name
    this.__initCustomProps(chainingProps)
  }

  Policy.prototype.isPolicy = true

  // 因为 Policy.prototype 上会添加许多名字未知的方法，所以自己的方法加"__"以规避重名
  Policy.prototype.__initCustomProps = function (chainingProps) {
    if (chainingProps && chainingProps.length) {
      var len = chainingProps.length
      var self = this

      for (var i = 0; i < len; ++i) {
        var propName = chainingProps[i]
        var fn = (function (prop) {
          return function () {
            return new Policy(function (that) {
              return that[prop]
            }, self, prop)
          }
        })(propName)

        def(this, propName, fn)
      }
    }
  }

  Policy.prototype.__exec = function (that) {
    var myThat = that
    var prev = this.prev_
    var fn = this.fn_

    if (prev) {
      myThat = prev.__exec(that)
    }

    if (isFunction(fn)) {
      return fn(myThat)
    }

    return that
  }

  Policy.prototype.__path = function () {
    var prev = this.prev_
    var name = this.name_
    var ret = prev ? prev.__path() : ''

    ret += '.' + name

    return ret
  }

  for (var key in proto) {
    if (!proto.hasOwnProperty(key) || !isFunction(proto[key])) {
      continue
    }

    if (chainingMethods && chainingMethods.indexOf(key) === -1) {
      continue
    }

    Policy.prototype[key] = (function (fnName) {
      return function () {
        var self = this
        var args = Array.prototype.slice.call(arguments, 0)

        return new Policy(function (that) {
          return that[fnName].apply(that, args)
        }, self, fnName)
      }
    })(key)
  }

  return new Policy(null, null, 'policy')
}

/**
 * @author Y3G
 * @fileoverview
 * 根据类A(其方法支持链式调用), 生成一个相应的“plan”类, 链式调用plan的方法, 返回一个函数, 执行函数即可链式执行A的相应方法.
 */

'use strict'

var isFunction = require('lodash/isFunction')
var def = require('./utils/def')

module.exports = createPlan

/**
 * 生成 plan
 *
 * @param proto 要生成 plan 的类原型
 * @param chainingProps 支持链式调用的自定义属性名列表
 * @param chainingMethods 支持链式调用的方法名列表，如果不填，默认所有方法都支持链式调用
 * @return 生成的 plan 实例
 */
function createPlan (proto, chainingProps, chainingMethods) {
  function Plan (fn, prev, name) {
    this.fn_ = fn
    this.prev_ = prev
    this.name_ = name
    this.__initCustomProps(chainingProps)
  }

  Plan.prototype.__isPlan = true

  // 因为 Plan.prototype 上会添加许多名字未知的方法，所以自己的方法加"__"以规避重名
  Plan.prototype.__initCustomProps = function (chainingProps) {
    if (chainingProps && chainingProps.length) {
      var len = chainingProps.length
      var self = this

      for (var i = 0; i < len; ++i) {
        var propName = chainingProps[i]
        var fn = (function (prop) {
          return function () {
            return new Plan(function (that) {
              return that[prop]
            }, self, prop)
          }
        })(propName)

        def(this, propName, fn)
      }
    }
  }

  Plan.prototype.__exec = function (that) {
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

  Plan.prototype.__path = function () {
    var prev = this.prev_
    var name = this.name_
    var ret = prev ? prev.__path() : ''

    ret += '.' + name

    return ret
  }

  Plan.__registerCheck = function (checks) {
    for (var key in checks) {
      if (!checks.hasOwnProperty(key) || !isFunction(checks[key])) {
        continue
      }

      if (chainingMethods && chainingMethods.indexOf(key) === -1) {
        continue
      }

      if (Plan.prototype[key]) {
        continue
      }

      Plan.prototype[key] = (function (fnName) {
        return function () {
          var self = this
          var args = Array.prototype.slice.call(arguments)

          return new Plan(function (that) {
            return that[fnName].apply(that, args)
          }, self, fnName)
        }
      })(key)
    }
  }

  Plan.__registerCheck(proto)

  return Plan
}

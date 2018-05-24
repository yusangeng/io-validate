/**
 * 检查器
 * @author Y3G
 */

'use strict'

var _v = require('./utils/_v')
var def = require('./utils/def')
var verify = require('./utils/verify')
var NotChecker = require('./NotChecker')
var createPlan = require('./plan')

var isFunction = require('lodash/isFunction')

module.exports = Checker

/**
 * 检查器
 *
 * @class
 * @param {any} target 要检查的对象
 * @param {String} name 要检查的对象名字(可选，有助于精确打印信息)
 * @param {Checker} owner 所属的Checker对象
 */
function Checker (target, name, owner) {
  this.target_ = target
  this.name_ = name || '[Nameless]'

  try {
    def(this, 'owner', function () {
      return owner
    })

    def(this, '_', function () {
      return owner
    })
  } catch (e) {
    this.owner = this._ = owner
  }

  // 使用not属性获取否定检查器
  try {
    def(this, 'not', function () {
      var ret = this.not_ || (this.not_ = new NotChecker(this))
      return ret
    })
  } catch (e) {
    this.not = new NotChecker(this)
  }
}

Checker.prototype = {}

var Plan = createPlan(Checker.prototype, ['not', 'owner'])
Checker.policy = Checker.plan = new Plan(null, null, 'plan')
Checker.Policy = Checker.Plan = Plan

/**
 * 安装检查方法
 * @param {Object} checks 检查方法列表
 */
Checker.registerCheck = function (checks) {
  if (arguments.length === 2) {
    var obj = {}
    obj[arguments[0]] = arguments[1]

    return Checker.registerCheck(obj)
  } else if (arguments.length === 3) {
    obj = {}
    obj[arguments[0]] = arguments[1]
    arguments[1].next = arguments[2]

    return Checker.registerCheck(obj)
  }

  for (var key in checks) {
    if (!checks.hasOwnProperty(key)) continue

    var checkFn = checks[key]
    var proto = Checker.prototype

    if (!_v(isFunction(checkFn), 'checks[' + key + '] is NOT a function.')) {
      continue
    }

    if (!_v(!proto[key], 'check name "' + key + '" is duplicated.')) {
      continue
    }

    proto[key] = (function (checkFn) {
      return function () {
        var args = [this.target_, this.name_].concat(Array.prototype.slice.call(arguments))
        var msg = checkFn.apply(this, args)

        verify(!msg, msg)

        if (checkFn.next) {
          var next = checkFn.next.apply(this, args)
          return new Checker(next.target, next.name, this)
        }

        return this
      }
    })(checkFn)
  }

  NotChecker.registerCheck(checks)
  Plan.__registerCheck(checks)
}

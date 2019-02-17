/**
 * 检查器
 * @author Y3G
 */

'use strict'

var _v = require('./utils/_v')
var def = require('./utils/def')
var verify = require('./utils/verify')
var Not = require('./NotValidator')
var createPlan = require('./plan')

var isFunction = require('lodash/isFunction')

module.exports = Validator

/**
 * 检查器
 *
 * @class
 * @param {any} target 要检查的对象
 * @param {String} name 要检查的对象名字(可选，有助于精确打印信息)
 * @param {Validator} owner 所属的Validator对象
 */
function Validator (target, name, owner) {
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
      var ret = this.not_ || (this.not_ = new Not(this))
      return ret
    })
  } catch (e) {
    this.not = new Not(this)
  }
}

Validator.prototype = {}

var Plan = createPlan(Validator.prototype, ['not', 'owner'])
Validator.Policy = Validator.Plan = Validator.V = Plan
Validator.policy = Validator.plan = Validator.v = new Plan(null, null, 'plan')

/**
 * 安装检查方法
 * @param {Object} checks 检查方法列表
 */
Validator.register = function (checks) {
  if (arguments.length === 2) {
    var obj = {}
    obj[arguments[0]] = arguments[1]

    return Validator.register(obj)
  } else if (arguments.length === 3) {
    obj = {}
    obj[arguments[0]] = arguments[1]
    arguments[1].next = arguments[2]

    return Validator.register(obj)
  }

  for (var key in checks) {
    if (!checks.hasOwnProperty(key)) continue

    var checkFn = checks[key]
    var proto = Validator.prototype

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
          return new Validator(next.target, next.name, this)
        }

        return this
      }
    })(checkFn)
  }

  Not.register(checks)
  Plan.__register(checks)
}

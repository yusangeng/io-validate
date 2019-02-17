/**
 * 入口函数
 * @author Y3G
 */

'use strict'

var Validator = require('./Validator')

module.exports = validate

function validate (target, name) {
  return new Validator(target, name)
}

validate.Validator = Validator
validate.register = Validator.register.bind(Validator)
validate.plan = Validator.plan

// 兼容老版本
validate.Checker = Validator
validate.registerCheck = Validator.register.bind(Validator)

/**
 * 入口函数
 * @author Y3G
 */

'use strict'

var Checker = require('./Checker')

module.exports = check

function check (target, name) {
  return new Checker(target, name)
}

check.Validator = Checker
check.register = Checker.register.bind(Checker)
check.plan = Checker.plan
check.v = Checker.v

// 兼容老版本
check.Checker = Checker
check.registerCheck = Checker.register.bind(Checker)

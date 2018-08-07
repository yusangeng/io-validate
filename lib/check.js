/**
 * @file 入口函数
 * @author Y3G
 */

'use strict'

var Checker = require('./Checker')

module.exports = check

function check (target, name) {
  return new Checker(target, name)
}

check.Checker = Checker
check.registerCheck = Checker.registerCheck.bind(Checker)
check.plan = Checker.plan
check.v = Checker.v

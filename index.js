/**
 * @file 导出接口
 * @author Y3G
 */

'use strict'

var check = require('./lib/check')
var makePolicy = require('./lib/policy')

var expo = check.check
expo.policy = makePolicy(check.Checker.prototype, ['not', 'owner'])

module.exports = expo

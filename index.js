/**
 * 导出入口
 * @author Y3G
 */

'use strict'

var check = require('./lib/check')
var Checker = require('./lib/Checker')

Checker.registerCheck(require('./lib/checks/among'))
Checker.registerCheck(require('./lib/checks/and'))
Checker.registerCheck(require('./lib/checks/equal'))
Checker.registerCheck(require('./lib/checks/equalOrGreaterThan'))
Checker.registerCheck(require('./lib/checks/equalOrLessThan'))
Checker.registerCheck(require('./lib/checks/got'))
Checker.registerCheck(require('./lib/checks/greaterThan'))
Checker.registerCheck(require('./lib/checks/has'))
Checker.registerCheck(require('./lib/checks/instanceOf'))
Checker.registerCheck(require('./lib/checks/is'))
Checker.registerCheck(require('./lib/checks/isArrayOf'))
Checker.registerCheck(require('./lib/checks/length'))
Checker.registerCheck(require('./lib/checks/lessThan'))
Checker.registerCheck(require('./lib/checks/map'))
Checker.registerCheck(require('./lib/checks/match'))
Checker.registerCheck(require('./lib/checks/meet'))
Checker.registerCheck(require('./lib/checks/or'))
Checker.registerCheck(require('./lib/checks/patterns'))
Checker.registerCheck(require('./lib/checks/same'))
Checker.registerCheck(require('./lib/checks/within'))

module.exports = check

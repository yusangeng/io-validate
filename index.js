/**
 * 导出入口
 * @author Y3G
 */

'use strict'

var check = require('./lib/check')
var Checker = require('./lib/Checker')

Checker.register(require('./lib/validators/among'))
Checker.register(require('./lib/validators/and'))
Checker.register(require('./lib/validators/equal'))
Checker.register(require('./lib/validators/equalOrGreaterThan'))
Checker.register(require('./lib/validators/equalOrLessThan'))
Checker.register(require('./lib/validators/got'))
Checker.register(require('./lib/validators/greaterThan'))
Checker.register(require('./lib/validators/has'))
Checker.register(require('./lib/validators/instanceOf'))
Checker.register(require('./lib/validators/is'))
Checker.register(require('./lib/validators/isArrayOf'))
Checker.register(require('./lib/validators/length'))
Checker.register(require('./lib/validators/lessThan'))
Checker.register(require('./lib/validators/map'))
Checker.register(require('./lib/validators/match'))
Checker.register(require('./lib/validators/meet'))
Checker.register(require('./lib/validators/or'))
Checker.register(require('./lib/validators/patterns'))
Checker.register(require('./lib/validators/same'))
Checker.register(require('./lib/validators/within'))

module.exports = check

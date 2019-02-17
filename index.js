/**
 * 导出入口
 * @author Y3G
 */

'use strict'

var validate = require('./lib/validate')
var Validator = require('./lib/Validator')

Validator.register(require('./lib/validators/among'))
Validator.register(require('./lib/validators/and'))
Validator.register(require('./lib/validators/equal'))
Validator.register(require('./lib/validators/equalOrGreaterThan'))
Validator.register(require('./lib/validators/equalOrLessThan'))
Validator.register(require('./lib/validators/got'))
Validator.register(require('./lib/validators/greaterThan'))
Validator.register(require('./lib/validators/has'))
Validator.register(require('./lib/validators/instanceOf'))
Validator.register(require('./lib/validators/is'))
Validator.register(require('./lib/validators/isArrayOf'))
Validator.register(require('./lib/validators/length'))
Validator.register(require('./lib/validators/lessThan'))
Validator.register(require('./lib/validators/map'))
Validator.register(require('./lib/validators/match'))
Validator.register(require('./lib/validators/meet'))
Validator.register(require('./lib/validators/or'))
Validator.register(require('./lib/validators/patterns'))
Validator.register(require('./lib/validators/same'))
Validator.register(require('./lib/validators/within'))

module.exports = validate

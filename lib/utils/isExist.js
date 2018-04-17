/**
 * 对象是否存在
 * @author Y3G
 */

var isNull = require('lodash/isNull')
var isUndefined = require('lodash/isUndefined')

module.exports = isExist

function isExist (o) {
  return !(isUndefined(o) || isNull(o))
}

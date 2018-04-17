/**
 * 首字母大写
 * @author Y3G
 */

'use strict'

module.exports = function firstUpperCase (str) {
  return str.replace(/^\S/g, function (s) { return s.toUpperCase() })
}

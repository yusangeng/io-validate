/**
 * 检查是否相同
 * @author Y3G
 */

'use strict'

var printString = require('../utils/printString')

module.exports = {
  same: same
}

function message (target, name, other) {
  return name + ' is NOT the same as ' + printString(other)
}

/**
 * 检查是否相同(使用===判断)
 *
 * @param {any} other 比较的对象
 * @returns {undefined|String} 错误消息
 */
function same (target, name, other) {
  return (target === other) ? undefined : message(target, name || 'parameter', other)
}

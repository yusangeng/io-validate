/**
 * @file 自定义属性
 * @author Y3G
 */

'use strict'

module.exports = def

/**
 * 定义自定义属性
 *
 * @param {Object} that 要定义属性的对象
 * @param {String} key 属性名
 * @param {Function} getter 读函数
 * @param {Function} setter 写函数
 * @throws 属性不可自定义
 */
function def (that, key, getter, setter) {
  if (Object.getOwnPropertyDescriptor) {
    var property = Object.getOwnPropertyDescriptor(that, key)
    if (property && property.configurable === false) {
      throw new Error(key + 'is NOT a configurable property.')
    }
  }

  Object.defineProperty(that, key, {
    configurable: true,
    enumerable: true,
    get: getter,
    set: setter
  })
}

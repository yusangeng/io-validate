/**
 * @file defineProperty.js
 * @author Y3G
 * @fileoverview
 * 自定义属性
 */

'use strict';

module.exports = defineProperty;

/**
 * 定义自定义属性
 * @param that 要定义属性的对象
 * @param key 属性名
 * @param getter
 * @param setter
 * @throw Error 浏览器不支持自定义属性
 */
function defineProperty(that, key, getter, setter) {
	if (Object.getOwnPropertyDescriptor) {
		var property = Object.getOwnPropertyDescriptor(that, key);
		if (property && property.configurable === false) {
			throw new Error(key + 'is NOT a configurable property');
		}
	}

	if (Object.defineProperty) {
		Object.defineProperty(that, key, {
			configurable : true,
			enumerable : true,
			get : getter,
			set : setter
		});
	} else if (Object.prototype.__defineGetter__) {
		Object.prototype.__defineGetter__.call(that, key, getter);
		Object.prototype.__defineSetter__.call(that, key, setter);
	} else {
		throw new Error('No API to define custom property');
	}
}
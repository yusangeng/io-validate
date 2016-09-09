/**
 * @file is.js
 * @author Y3G
 * @fileoverview
 * 检测数据类型
 */

'use strict';

module.exports = {
	'isArray': isArray,
	'isArrayLike': isArrayLike,
	'isExist': isExist,
	'isEmpty': isEmpty,
	'isUndefined': isUndefined,
	'isNull': isNull,
	'isNaN': isNaN,
	'isNumber': isNumber,
	'isString': isString,
	'isBoolean': isBoolean,
	'isDate': isDate,
	'isRegExp': isRegExp,
	'isError': isError,
	'isFunction': isFunction,
	'isObject': isObject,
	'isPlainObject': isPlainObject,
	'isObjectLike': isObjectLike,
	'isElement': isElement,
	'isArguments': isArguments,
	'isBasic': isBasic,
};

/**
 * 是否为数组
 * @param o 目标对象
 * @return
 */
function isArray(o) {
	if (o instanceof Array ||
		(o && o.constructor === Array) ||
		(typeof o === 'object' &&
			Object.prototype.toString.call(o) === '[object Array]')) {
		return true;
	}

	return false;
}

/**
 * 是否为仿数组
 * @param o 目标对象
 * @return
 */
function isArrayLike(o) {
	if (!isExist(o) || isFunction(o)) {
		return false;
	}

	var len = o.length;
	return (isNumber(len) && len >= 0);
}

/**
 * 是否存在
 * @param o 目标对象
 * @return
 */
function isExist(o) {
	return (typeof o !== 'undefined' && o !== null);
}

/**
 * 是否为空（undefined，null，空字符串，空数组，空对象）
 * @param o 目标对象
 * @return
 */
function isEmpty(o) {
	if (!isExist(o)) {
		return true;
	}

	if (o === '') {
		// 空字符串
		return true;
	} else if (isArrayLike(o) && o.length === 0) {
		// 空数组
		return true;
	} else if (isPlainObject(o)) {
		// 空对象，只有 PlainObject 可以为空
		for (var key in o) {
			if (o.hasOwnProperty(key)) {
				return false;
			}
		}

		// 空对象
		return true;
	}

	return false;
}

/**
 * 是否未定义
 * @param o 目标对象
 * @return
 */
function isUndefined(o) {
	return o === void 0;
}

/**
 * 是否为null
 * @param o 目标对象
 * @return
 */
function isNull(o) {
	return o === null;
}

/**
 * 是否为NaN
 * @param o 目标对象
 * @return
 */
function isNaN(o) {
	return isNumber(o) && o !== +o;
}

/**
 * 是否为数字
 * @param o 目标对象
 * @return
 */
function isNumber(o) {
	return (Object.prototype.toString.call(o) === '[object Number]');
}

/**
 * 是否为字符串
 * @param o 目标对象
 * @return
 */
function isString(o) {
	return (Object.prototype.toString.call(o) === '[object String]');
}

/**
 * 是否为布尔值
 * @param o 目标对象
 * @return
 */
function isBoolean(o) {
	return o === true || o === false ||
		Object.prototype.toString.call(o) === '[object Boolean]';
}

/**
 * 是否为日期
 * @param o 目标对象
 * @return
 */
function isDate(o) {
	return (Object.prototype.toString.call(o) === '[object Date]');
}

/**
 * 是否为正则表达式
 * @param o 目标对象
 * @return
 */
function isRegExp(o) {
	return (Object.prototype.toString.call(o) === '[object RegExp]');
}

/**
 * 是否为Error
 * @param o 目标对象
 * @return
 */
function isError(o) {
	return (Object.prototype.toString.call(o) === '[object Error]');
}

/**
 * 是否为函数
 * @param o 目标对象
 * @return
 */
function isFunction(o) {
	return (Object.prototype.toString.call(o) === '[object Function]');
}

/**
 * 是否为对象
 * @param o 目标对象
 * @return
 */
function isObject(o) {
	var type = typeof o;
	return !!o && (type == 'object' || type == 'function');
}

/**
 * 是否为字面量对象
 * @param obj 目标对象
 * @return
 */
function isPlainObject(obj) {
	// from jQuery
	// 判断是否非window和DOM对象的对象，
	if (!obj || obj.toString() !== "[object Object]" || obj.nodeType || obj.setInterval) {
		return false;
	}

	// constructor是对创建对象的函数的引用（指针）。对于 Object 对象，该指针指向原始的 Object() 函数
	// 判断obj是否具有isPrototypeOf属性，isPrototypeOf是挂在Object.prototype上的。
	// 通过字面量或自定义类（构造器）创建的对象都会继承该属性方法
	if (obj.constructor &&
		!obj.hasOwnProperty("constructor") &&
		!obj.constructor.prototype.hasOwnProperty("isPrototypeOf")) {
		return false;
	}

	var key;
	for (key in obj) {}

	return key === undefined || obj.hasOwnProperty(key);
}

/**
 * 是否为DOM Element
 * @param o 目标对象
 * @return
 */
function isElement(o) {
	return (!!o && o.nodeType === 1);
}

/**
 * 是否为参数表
 * @param o 目标对象
 * @return o为参数返回true，否则返回false
 */
function isArguments(o) {
	var op = Object.prototype;
	var argsTag = '[object Arguments]';

	return isArrayLike(o) && op.hasOwnProperty.call(o, 'callee') &&
		(!op.propertyIsEnumerable.call(o, 'callee') || op.toString.call(o) == argsTag);
}

/**
 * 是否是基本类型
 * @param o 目标对象
 * @return o为基本类型返回true，否则返回false
 */
function isBasic(o) {
	return isUndefined(o) || isNull(o) ||
		isNumber(o) || isBoolean(o) || isString(o);
}
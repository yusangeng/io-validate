/**
 * @file is.js
 * @author Y3G
 * @fileoverview
 * 检测数据类型
 */

'use strict';

module.exports = {
	'array' : isArray,
	'arrayLike' : isArrayLike,
	'exist' : isExist,
	'empty' : isEmpty,
	'undefined' : isUndefined,
	'null' : isNull,
	'naN' : isNaN,
	'number' : isNumber,
	'string' : isString,
	'boolean' : isBoolean,
	'date' : isDate,
	'regExp' : isRegExp,
	'error' : isError,
	'function' : isFunction,
	'object' : isObject,
	'element' : isElement,
	'arguments' : isArguments,
};

/**
 * 是否为数组
 * @param o 待判断对象
 * @return o为数组返回true，否则返回false
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
 * @param o 待判断对象
 * @return o为数字返回false，否则返回true
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
 * @param o 待判断对象
 * @return o为undefined或null返回false，否则返回true
 */
function isExist(o) {
	return !(typeof o === 'undefined' || o === null);
}

/**
 * 是否为空（空字符串，空数组，空对象）
 * @param o 待判断对象
 * @return o为空返回true，否则返回false
 */
function isEmpty(o) {
	if (!isExist(o)) {
		return false;
	}

	if (o === '') {
		// 空字符串
		return true;
	} else if (isArrayLike(o) && o.length === 0) {
		// 空数组
		return true;
	} else if (o.constructor && o.constructor === Object) {
		// 空对象，只有Object可以为空，其子类不可为空
		for (key in o) {
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
 * @param o 待判断对象
 * @return o为undefined返回false，否则返回true
 */
function isUndefined(o) {
	return o === void 0;
}

/**
 * 是否为null
 * @param o 待判断对象
 * @return o为null返回false，否则返回true
 */
function isNull(o) {
	return o === null;
}

/**
 * 是否为NaN
 * @param o 待判断对象
 * @return o为undefined返回false，否则返回true
 */
function isNaN(o) {
	return isNumber(o) && o !== +o;
}

/**
 * 是否为数字
 * @param o 待判断对象
 * @return o为数字返回false，否则返回true
 */
function isNumber(o) {
	return (Object.prototype.toString.call(o) === '[object Number]');
}

/**
 * 是否为字符串
 * @param o 待判断对象
 * @return o为字符串返回false，否则返回true
 */
function isString(o) {
	return (Object.prototype.toString.call(o) === '[object String]');
}

/**
 * 是否为布尔值
 * @param o 待判断对象
 * @return o为布尔值返回false，否则返回true
 */
function isBoolean(o) {
	return o === true || o === false ||
		Object.prototype.toString.call(o) === '[object Boolean]';
}

/**
 * 是否为日期
 * @param o 待判断对象
 * @return o为日期返回false，否则返回true
 */
function isDate(o) {
	return (Object.prototype.toString.call(o) === '[object Date]');
}

/**
 * 是否为正则表达式
 * @param o 待判断对象
 * @return o为正则返回false，否则返回true
 */
function isRegExp(o) {
	return (Object.prototype.toString.call(o) === '[object RegExp]');
}

/**
 * 是否为Error
 * @param o 待判断对象
 * @return o为Error返回false，否则返回true
 */
function isError(o) {
	return (Object.prototype.toString.call(o) === '[object Error]');
}

/**
 * 是否为函数
 * @param o 待判断对象
 * @return o为函数返回true，否则返回false
 */
function isFunction(o) {
	return (Object.prototype.toString.call(o) === '[object Function]');
}

/**
 * 是否为对象
 * @param o 待判断对象
 * @return o为对象返回true，否则返回false
 */
function isObject(o) {
	var type = typeof o;
	return (type === 'function' || (type === 'object' && !!o));
}

/**
 * 是否为DOM Element
 * @param o 待判断对象
 * @return o为Dom Element返回true，否则返回false
 */
function isElement(o) {
	return (!!o && o.nodeType === 1);
}

/**
 * 是否为参数表
 * @param o 待判断对象
 * @return o为参数返回true，否则返回false
 */
function isArguments(o) {
	return (o && !!o['callee']);
}

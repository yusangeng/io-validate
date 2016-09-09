/**
 * @file message.js
 * @author Y3G
 * @fileoverview
 * 错误消息
 */

var is = require('./is');
var isString = is.isString;

module.exports = {
	message: message,
	makeMessage: function(entry, obj, name, args) {
		return function() {
			message(entry, obj, name, args);
		}
	},
};

function toString(obj) {
	return isString(obj) ? ('"' + obj + '"') : ('' + obj);
}

function message(entry, obj, name, args) {
	var reason;

	if (entry === 'is') {
		reason = 'is NOT ' + Array.prototype.join.call(args, ', ');
	} else if (entry === 'gt') {
		reason = 'is NOT greater than ' + toString(args[0]);
	} else if (entry === 'lt') {
		reason = 'is NOT less than ' + toString(args[0]);
	} else if (entry === 'within') {
		reason = 'is NOT in ranges: ' + Array.prototype.join.call(args, ', ');
	} else if (entry === 'match') {
		reason = 'does NOT match regexp: ' + toString(args[0]);
	} else if (entry === 'same') {
		reason = 'is NOT the same object to ' + toString(args[0]);
	} else if (entry === 'eq') {
		reason = 'is NOT equal to ' + toString(args[0]);
	} else if (entry === 'has') {
		reason = 'has NO own property: ' + toString(args[0]);
	} else if (entry === 'got') {
		reason = 'has NOT got property: ' + toString(args[0]);
	} else if (entry === 'length') {
		reason = 'has NO length';
	} else if (entry == 'and') {
		// args[0] 是执行失败的检查序号,args[1] 是具体原因
		var no = args[0];
		var detail = args[1] || 'unknown';

		if (detail.isPolicy) {
			detail = detail.path();
		}

		reason = 'FAILED when executing check[' +
			no + '] of an "AND" check, detail: {' + detail + '}';
	} else if (entry == 'or') {
		var mapArgs = [];

		for (var i = 0; i < args.length; ++i) {
			var detail = args[i] || 'unknown';

			if (detail.isPolicy) {
				detail = detail.path();
			}

			mapArgs.push(detail);
		}

		reason = 'FAILED when executing an "OR" check, detail: {' + mapArgs.join('}{') + '}';
	} else {
		reason = 'for unknown reason';
	}

	return '[PARAM-CHECK] Check failure: ' + name + '(' + toString(obj) + ') ' + reason + '.';
}
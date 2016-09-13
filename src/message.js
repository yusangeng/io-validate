/**
 * @file message.js
 * @author Y3G
 * @fileoverview
 * 错误消息
 */

var is = require('./is');
var isString = is.isString;

module.exports = function(entry, obj, name, args) {
	return function() {
		message(entry, obj, name, args);
	}
};

function toString(obj) {
	return isString(obj) ? ('"' + obj + '"') : ('' + obj);
}

function message(entry, obj, name, args) {
	var reason;

	if (entry === 'is') {
		reason = 'is NOT ' + Array.prototype.join.call(args, ', ');
	} else if (entry.indexOf('is') === 0) {
		reason = 'is NOT a(n) ' + entry.replace(/^is/, '').toLowerCase();
	} else if (entry === 'instanceOf') {
		reason = 'is NOT an instance of given constructor';
	} else if (entry === 'gt' || entry === 'greaterThan') {
		reason = 'is NOT greater than ' + toString(args[0]);
	} else if (entry === 'lt' || entry === 'lessThan') {
		reason = 'is NOT less than ' + toString(args[0]);
	} else if (entry === 'egt' || entry === 'equalOrGreaterThan') {
		reason = 'is NOT greater than ' + toString(args[0]);
	} else if (entry === 'elt' || entry === 'equalOrLessThan') {
		reason = 'is NOT less than ' + toString(args[0]);
	} else if (entry === 'within') {
		reason = 'is NOT in range(s): ' + Array.prototype.join.call(args, ', ');
	} else if (entry === 'match') {
		reason = 'does NOT match regexp: ' + toString(args[0]);
	} else if (entry === 'same') {
		reason = 'is NOT the same object to ' + toString(args[0]);
	} else if (entry === 'eq' || entry === 'equal') {
		reason = 'is NOT equal to ' + toString(args[0]);
	} else if (entry === 'has' || entry === 'hasOwn') {
		reason = 'has NO own property: ' + toString(args[0]);
	} else if (entry === 'got') {
		reason = 'has NOT property: ' + toString(args[0]);
	} else if (entry === 'and') {
		// args[0] 是执行失败的检查序号,args[1] 是具体原因
		var no = args[0];
		var detail = args[1] || 'unknown';

		if (detail.isPolicy) {
			detail = detail.path();
		}

		reason = 'does NOT pass the [' +
			no + ']th of an "AND" check, detail: {' + detail + '}';
	} else if (entry === 'or') {
		var details = [];

		for (var i = 0; i < args.length; ++i) {
			var detail = args[i] || 'unknown';

			if (detail.isPolicy) {
				detail = detail.path();
			}

			details.push(detail);
		}

		reason = 'does NOT pass an "OR" check, detail: {' + details.join('}{') + '}';
	} else if (entry === 'meet') {
		reason = 'does NOT pass the check, detail: {' + args[0] + '}';
	} else {
		reason = 'does NOT pass for unknown reason';
	}

	return '[PARAM-CHECK] Check Failure: ' + name + '(' + toString(obj) + ') ' + reason + '.';
}
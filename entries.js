/**
 * @file entries.js
 * @author Y3G
 * @fileoverview
 * 接口文件
 */

'use strict';

var checkEntries = require('./src/check');
var check = checkEntries.check;

check.Checker = checkEntries.Checker;
check.setCheckFailedCallback = checkEntries.setCheckFailedCallback;

module.exports = check;
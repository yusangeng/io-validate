/**
 * @file entries.js
 * @author Y3G
 * @fileoverview
 * 接口文件
 */

'use strict';

var check = require('./src/check');
var makePolicy = require('./policy');

var exportModule = check.check;

exportModule.Checker = check.Checker;
exportModule.NotChecker = check.NotChecker;
exportModule.policy = makePolicy(check.Checker.prototype, ['not', 'owner']);

module.exports = exportModule;
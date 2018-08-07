# param-check

[![Build Status](https://travis-ci.org/yusangeng/param-check.svg?branch=master)](https://travis-ci.org/yusangeng/param-check) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Npm Info](https://nodei.co/npm/param-check.png?compact=true)](https://www.npmjs.com/package/param-check)

运行时数据校验工具 | a javascript run-time data verification tool.

## Install

```
npm install param-check --save
```

## Usage

### Basic usage

``` js
import check from 'param-check'

function fn (arg1, arg2) {
	check(arg1).isString()
	check(arg2, 'arg2').greaterThan(1).lessThan(2)
}
```

### Import of specific check

``` js
import check from 'param-check/naked'
import isStringCheck from 'param-check/lib/checks/isString'

check.registerCheck(isStringCheck)

function fn (arg) {
	check(arg, 'arg').isString()
}
```

### Custom check

``` js
import check from 'param-check'
import isNumber from 'lodash/isNumber'

function isEven (target, name) {
  return isNumber(target) && !(target % 2)
}

check.registerCheck('isEven', isEven)

function fn (arg) {
	check(arg, 'arg').isEven()
}
```

### Custom linkable check

``` js
import check from 'param-check'
import isNumber from 'lodash/isNumber'

function isEven (target, name) {
  return isNumber(target) && !(target % 2)
}

function isEventNext (target) {
  return return target + 1
}

check.registerCheck('isEven', isEven, isEventNext)

function fn (arg) {
	check(arg, 'arg').isEven().isEven() // error occurred
}
```

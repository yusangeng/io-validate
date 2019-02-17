# validate-io

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.org/yusangeng/param-check.svg?branch=master)](https://travis-ci.org/yusangeng/param-check) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/param-check/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/param-check?branch=master) [![Npm Package Info](https://badge.fury.io/js/validate-io.svg)](https://www.npmjs.com/package/validate-io) [![Downloads](https://img.shields.io/npm/dw/validate-io.svg?style=flat)](https://www.npmjs.com/package/validate-io)

Runtime data validator.

## Note
* This package used to be named param-check.

## Install

```
npm install validate-io --save
```

## Usage

### Basic usage

``` js
import v from 'validate-io'

function fn (arg1, arg2) {
	v(arg1).isString()

	// If you want to print variable name, pass name as the 2nd parameter.
	v(arg2, 'arg2').greaterThan(1).lessThan(2)
}
```

### `not` operator

``` js
import v from 'validate-io'

function fn (arg) {
	v(arg).not.isString()
}
```

### Chain call

All validators of validate-io support chain calls. A chain call means an "and" expression.

``` js
import v from 'validate-io'

function fn (arg) {
	v(arg).gt(1).lt(2) // arg > 1 && arg < 2
}
```

### Specific validator

If you want smaller dependence size, just import specific validators.

``` js
import v from 'validate-io/naked'
import isString from 'validate-io/lib/validators/isString'

v.register(isString)

function fn (arg) {
	v(arg).isString()
}
```

### Custom validator

``` js
import v from 'validate-io'
import isNumber from 'lodash/isNumber'

function isEven (target, name) {
  return isNumber(target) && !(target % 2)
}

check.register('isEven', isEven)

function fn (arg) {
	v(arg).isEven()
}
```

### Custom chain

``` js
import v from 'validate-io'

function isEven (target, name) {
  return !(target % 2)
}

function isOdd (target, name) {
  return target % 2
}

function next (target) {
  return return target + 1
}

v.register('isEven', isEven, next)
v.register('isOdd', isOdd, next)

function fn (arg) {
	v(arg).isEven().isOdd()
}
```

### Plan

__plan__ is used to generate combinable validators.

By contrast, `v('').isString()` executes the validator `isString` immediatly, `v.plan.isString()` doesn't execute any validator, just return a combinable `isString` validator.

``` js
import v from 'validate-io'

v('').isString()

v('').or(v.plan.isString, v.plan.isNumber)
```

## Validators

#### same

Validate that the input value is the same to ('===') the reference value.

``` js
v(1).same(1)

v({ a: 1 }).same({ a: 1 }) // Bang!
```

#### among

Validate that the input value is among the reference options.

``` js
v(1).among(1, 2, 3, 4)
```

#### equal | eq

Validate that the input value is equal to the reference value.

You may pass in a custom equal function instead of the default equal algorithm which is a simplified implemention of deep-equal.

``` js
v(1).equal(1)
v(1).eq(1)

v('foobar').equal('Foobar', (left, right) => left.toLowerCase() === right.toLowerCase())
```

#### equalOrGreaterThan | egt

Validate that the input number is equal to or greater than the reference number.

``` js
v(1).equalOrGreaterThan(0)
v(1).egt(1)
```

#### equalOrLessThan | elt

Validate that the input number is equal to or less than the reference number.

``` js
v(1).equalOrLessThan(2)
v(1).elt(1)
```

#### greaterThan | gt

Validate that the input number is greater than the reference number.

``` js
v(1).greaterThan(0)
v(1).gt(0)
```

#### lessThan | lt

Validate that the input number is less than the reference number.

``` js
v(1).lessThan(2)
v(1).lt(2)
```

#### within

Validate that the input number is whthin the reference range(s).

Syntax:
 * Open range is denoted in parentheses.
 * Closed range is denoted by square brackets.

``` js
v(1).within('(0, 2)', '[-1, 3.5]')

v(0).within('[0, 1)', '(-1, 0]')
```

#### is | isXXX

Runtime type checking based on lodash.

```
v(1).is('number', 'string') // number or string

v(1).isNumber()
```

##### Available type checkers:

``` js
var isArguments = require('lodash/isArguments')
var isArray = require('lodash/isArray')
var isArrayBuffer = require('lodash/isArrayBuffer')
var isArrayLike = require('lodash/isArrayLike')
var isArrayLikeObject = require('lodash/isArrayLikeObject')
var isBoolean = require('lodash/isBoolean')
var isBuffer = require('lodash/isBuffer')
var isDate = require('lodash/isDate')
var isElement = require('lodash/isElement')
var isEmpty = require('lodash/isEmpty')
var isError = require('lodash/isError')
var isFunction = require('lodash/isFunction')
var isLength = require('lodash/isLength')
var isMap = require('lodash/isMap')
var isNative = require('lodash/isNative')
var isNil = require('lodash/isNil')
var isNull = require('lodash/isNull')
var isNumber = require('lodash/isNumber')
var isObject = require('lodash/isObject')
var isObjectLike = require('lodash/isObjectLike')
var isPlainObject = require('lodash/isPlainObject')
var isRegExp = require('lodash/isRegExp')
var isSet = require('lodash/isSet')
var isString = require('lodash/isString')
var isSymbol = require('lodash/isSymbol')
var isTypedArray = require('lodash/isTypedArray')
var isUndefined = require('lodash/isUndefined')
var isWeakMap = require('lodash/isWeakMap')
var isWeakSet = require('lodash/isWeakSet')

var isExist = function isExist (o) {
  return !(isUndefined(o) || isNull(o))
}
```

#### instanceOf

Validate that the input value is an instance of the reference class.

We use the keyword 'instanceof' to implement this validator.

``` js
class Foobar {}
const fb = new Foobar()

v(fb).instanceOf(fb)
```

#### isArrayOf

Validate that the input value is an array of valid values.

``` js
v(fb).isArrayOf(fb, (el) => el % 2)
```

#### match

Regular expression validator.

``` js
v('foobar42').match(/\w+\d+/)
```

#### patterns

Common regular expression validators.

##### Available validators:

* matchEmail
* matchURL
* matchIP

``` js
v('yusangeng@github.com').matchEmail()
```

#### has | hasOwn

Validate that the input value has an OWN property of the reference name.

has() returns a validatable object that encapsulates the validated property if it exists.

If you want the validatable object that encapsulates the origin input value, use "owner" or "_" operator.

``` js
const obj = {
	a: {
		b: {
			c: 'foobar'
		}
	}
}

v(obj).has('a').has('b').has('c')
v(obj).has('a').owner.has('a').owner.has('c')
v(obj).has('a')._.has('a')._.has('a')
```

#### got

Validate that the input value has a property (maybe NOT own property) of the reference name.

``` js
const obj = {
	a: {
		b: {
			c: 'foobar'
		}
	}
}

v(obj).got('a').got('b').got('c')
v(obj).got('a').got('__proto__').got('constructor')
```

#### length

Equivalent of validator `got('length')`.

``` js
const arr = [1, 2, 3]

v(arr).length().eq(3)
```

#### and

Validator of "and" expression.

It is often better to express "and" relationships using chain calls, but this API combines functions and plans.

``` js
v('Foobar').and(v.plan.isString, (target) => {
	return target.toLowerCase() === 'foobar'
})
```

#### or

Validator of "or" expression.

``` js
v(1).or(v.plan.isString, v.plan.and(
	v.plan.isNumber(),
	(target) =>  target % 2
))
```

#### meet

Single parameter version of validator `and()`.

``` js
v('Foobar').meet(v.plan.isString)
```

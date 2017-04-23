# param-check

[![Build Status](https://travis-ci.org/yusangeng/param-check.svg?branch=dev)](https://travis-ci.org/yusangeng/param-check) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Npm Info](https://nodei.co/npm/param-check.png?compact=true)](https://www.npmjs.com/package/param-check)

A js library for checking parameters.

## Install

```
npm install param-check --save
```

## Usage

### HTML

```
<html>
<body>
<script src="param-check.js"></script>
<script>
	var foobar = 2;
	
	// window['param-check'] is the global variable exposed by param-check.js
	var check = window['param-check'];

	check(foobar).gt(1).lt(3);
</script>
</body>
</html>
```

### CommonJS

```
var check = require('param-check');

var foo = 2;
check(foo, 'foo').gt(1).lt(3);
```

## Example

```javascript

var something = {};

function SomeFn () {
}

function foobar(a) {
	// a should be a string
	check(a, 'a').isString();

	// a should be a string or number
	check(a, 'a').is('string', 'number');

	// a should be an instance of SomeFn
	check(a, 'a').instanceOf(SomeFn);

	// a should be > 1, and < 3
	check(a, 'a').gt(1).lt(3);
	
	// a should be >= 1, and <= 3
	check(a, 'a').egt(1).elt(3);

	// a should be >= 1, and <= 3
	check(a, 'a').not.lt(1).not.gt(3);

	// a should be in range [0,1) or (1,2]
	check(a, 'a').within('[0,1)', '(1,2]');

	// a should match regexp /\w\d+/
	check(a, 'a').match(/\w\d+/);

	// a should be the same object to something;
	check(a, 'a').same(something);
	
	// a should be deep-equal to something;
	check(a, 'a').eq(something);
	
	// a should have a owned property named 'count'
	check(a, 'a').has('count');
	
	// a should have a property named 'count'
	check(a, 'a').got('count');

	// a should have a property named 'count', and a['count']
	// should be > 1, and < 3
	check(a, 'a').has('count').gt(1).lt(3);

	// a should have a property named 'count' and a property named 'count2',
	// and a['count'] should be > 1, and < 3
	check(a, 'a').has('count').gt(1).lt(3).owner.has('count2');
	
	// a should be in (1,3)∩(2,4)
	check(a, 'a').and(check.policy.gt(1).lt(3), check.policy.gt(2).lt(4));

	// // a should be in (1,3)∪(2,4)
	check(a, 'a').or(check.policy.gt(1).lt(2), check.policy.gt(3).lt(4));

	function myCheck(obj) {
		return obj.length > 4;
	}

	// a should be an array and a.length > 4
	check(a, 'a').and(check.policy.is('array'), myCheck);

	// a should NOT be an even number in range [1,3]
	check(a, 'a').not.and(
		check.policy.is('number').not.lt(1).not.gt(3),
		function (obj) {
			return obj % 2 === 0;
		});

	// a should be a number or a.length > 4
	check(a, 'a').or(check.policy.is('number'), myCheck);

	// a should be an odd number or NOT in range [1,3]
	check(a, 'a').not.or(
		check.policy.is('number').not.lt(1).not.gt(3),
		function (obj) {
			return obj % 2 === 0;
		});

	// a should be a number
	check(a, 'a').meet(check.policy.is('number'));
}
```



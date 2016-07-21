
var expect = require('chai').expect;
var shouldThrow = require('./shouldThrow');

check.setCheckFailureCallback(function (e) {
	//console.log(e.stack);
	console.log(e.message);
});

describe('call check', function () {
	it('should NOT throw', function () {
		+function (a) {
			check(a, 'a');
			check(a);
			check();
		}(1);
	});
});
	
describe('is', function () {
	it('good param', function () {
		+function (a) {
			check(a, 'a').is('array');
		}([]);
		
		+function (a) {
			check(a, 'a').is('arrayLike');
		}({length:1});
		
		+function (a) {
			check(a, 'a').is('exist');
		}({});
		
		+function (a) {
			check(a, 'a').is('empty');
		}([]);
		
		+function (a) {
			check(a, 'a').is('undefined');
		}();
		
		+function (a) {
			check(a, 'a').is('null');
		}(null);
		
		+function (a) {
			check(a, 'a').is('number');
		}(1);
		
		+function (a) {
			check(a, 'a').is('string');
		}('1');
		
		+function (a) {
			check(a, 'a').is('boolean');
		}(true);
		
		+function (a) {
			check(a, 'a').is('date');
		}(new Date());
		
		+function (a) {
			check(a, 'a').is('regExp');
		}(/.*/);
		
		+function (a) {
			check(a, 'a').is('error');
		}(new Error);
		
		+function (a) {
			check(a, 'a').is('function');
		}(function () {});
		
		+function (a) {
			check(a, 'a').is('object');
		}({});
		
		+function (a) {
			check(a, 'a').is('element');
		}(document.querySelector('div'));
		
		+function (a) {
			check(a, 'a').is('arguments');
		}(arguments);
		
		+function (a) {
			check(a, 'a').is('string', 'number');
		}(1);
	});

	it('bad param', function () {
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('array');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('arrayLike');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('exist');
			}();
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('empty');
			}([1,2,3]);
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('undefined');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('null');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('number');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('string');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('boolean');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('date');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('regExp');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('error');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('function');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('object');
			}("");
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('element');
			}({});
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('arguments');
			}({});
		});

		shouldThrow(function () {
			+function (a) {
				check(a, 'a').is('string', 'number');
			}({});
		});
	});
});

describe('lt, gt', function () {
	it ('good param', function () {
		+function (a) {
			check(a, 'a').gt(1).lt(2);
		}(1.234);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').gt(1).lt(2);
			}();
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').gt(1).lt(2);
			}('');
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').gt(1).lt(2);
			}(1);
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').gt(1).lt(2);
			}(2);
		});
		
		shouldThrow(function () {
			+function (a) {
				check(a, 'a').gt(1).lt(2);
			}(0);
		});
	});
});

describe('within', function () {
	var testFn = function (a) {
		check(a, 'a').within('[0, 1)', '(1, 2]', '(-9.567, -8.567]');
	};

	it ('good param', function () {
		testFn(0.5);
		testFn(1.5);
		testFn(-9);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn(1);
		});
		
		shouldThrow(function () {
			testFn(3);
		});
		
		shouldThrow(function () {
			testFn(-9.567);
		});
	});
});

describe('match', function () {
	var testFn = function (a) {
		check(a, 'a').match(/^\w\d\w\d$/);
	};

	it ('good param', function () {
		testFn('a1b2');
		testFn('A9B0');
		testFn('x1y2');
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn(1);
		});
		
		shouldThrow(function () {
			testFn('dasfsdfsddfewrweqwe');
		});
		
		shouldThrow(function () {
			testFn('a1b2shgfjhagfsfgjhsd');
		});
	});
});

describe('same', function () {
	var other = {a:1};
	var testFn = function (a) {
		check(a, 'a').same(other);
	};

	it ('good param', function () {
		testFn(other);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn({a:1});
		});
		
		shouldThrow(function () {
			testFn({});
		});
	});
});

describe('eq', function () {
	var other = {
		a : 1,
		b : '2',
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, f:2, g:3, h:4},
	};
	
	var other2 = {
		a : 1,
		b : '2',
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, f:2, g:3, h:4}
	};

	var testFn = function (a) {
		check(a, 'a').eq(other);
	};

	it ('good param', function () {
		testFn(other);
		testFn(other2);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			var other3 = {
				a : 1,
				b : '2',
				c : [1, 2, 3, {x:1, y:2}],
				d : {e:1, f:2, g:-3, h:4}
			};

			testFn(other3);
		});
	});
});

describe('has', function () {
	var other = {
		a : 1,
		b : '2',
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, f:2, g:3, h:4},
	};

	var other2 = {
		a : 1,
		b : '2',
		c : [1, 2, 3, {x:1, y:2}],
	};
	
	var other3 = {
		a : 1,
		b : '2',
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, g:3, h:4},
	};
	
	var other4 = {
		a : 1,
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, f:2, g:3, h:4},
	};
	
	var other5 = {
		a : 1,
		b : '-2',
		c : [1, 2, 3, {x:1, y:2}],
		d : {e:1, f:2, g:3, h:4},
	};

	var testFn = function (a) {
		check(a, 'a').has('d').has('f').owner.owner.has('b').eq('2');
	};

	it ('good param', function () {
		testFn(other);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn(other2);
		});

		shouldThrow(function () {
			testFn(other3);
		});

		shouldThrow(function () {
			testFn(other4);
		});

		shouldThrow(function () {
			testFn(other5);
		});
		
	});
});

describe('has, owner', function () {
	var testFn = function (a) {
		check(a, 'a').length().gt(3).lt(5);
	};

	it ('good param', function () {
		testFn([1,2,3,4]);
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn({});
		});

		shouldThrow(function () {
			testFn([1,2,3]);
		});		
	});
});

describe('map', function () {
	var testFn = function (a) {
		check(a, 'a').map(function (o) {
			return o.length;
		}).gt(3).lt(5);
	};

	it ('good param', function () {
		testFn([1,2,3,4]);
		testFn('1234');
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn('');
		});

		shouldThrow(function () {
			testFn([1,2,3,4,5]);
		});		
	});
});

describe('not', function () {
	var testFn = function (a) {
		check(a, 'a').not.is('string').not.gt(5).not.lt(3);
	};
	
	var testFn2 = function (a) {
		check(a, 'a').not.has('a').not.length();
	};
	
	it ('good param', function () {
		testFn(3);
		testFn(4);
		testFn(5);
		testFn2();
		testFn2(null);
		testFn2({});
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn('');
		});

		shouldThrow(function () {
			testFn(10);
		});

		shouldThrow(function () {
			testFn2({a:1});
		});		
		
		shouldThrow(function () {
			testFn2([]);
		});	
		
		shouldThrow(function () {
			testFn2([1,2,3]);
		});	
	});
});

describe('or', function () {
	var testFn = function (a) {
		check(a, 'a').or(check.policy.gt(1).lt(2), check.policy.gt(5).lt(6));
	};
	
	var testFn2 = function (a) {
		check(a, 'a').or(check.policy.gt(1).lt(2), function(obj) {
			return Object.prototype.toString.call(obj) === '[object String]';
		});
	};
	
	it ('good param', function () {
		testFn(1.5);
		testFn(5.5);
		testFn2(1.5);
		testFn2("123");
	});
	
	it ('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn("");
		});
		
		shouldThrow(function () {
			testFn(3);
		});

		shouldThrow(function () {
			testFn2();
		});	

		shouldThrow(function () {
			testFn2(3);
		});			
		
		shouldThrow(function () {
			testFn2({});
		});
	});
});

describe('and', function () {
	var testFn = function (a) {
		check(a, 'a').and(check.policy.gt(1).lt(3), check.policy.gt(2).lt(4));
	};
	
	it('good param', function () {
		testFn(2.5);
	});
	
	it('bad param', function () {
		shouldThrow(function () {
			testFn();
		});

		shouldThrow(function () {
			testFn(1.5);
		});

		shouldThrow(function () {
			testFn("");
		});
	});
});

describe('policy.not', function () {
	var testFn = function (a) {
		check(a, 'a').and(check.policy.is('number'), check.policy.gt(1).not.gt(3), function (obj) {
			return obj % 2;
		});
	};
	
	it('good param', function () {
		testFn(2.5);
		testFn(3);
	});
	
	it('bad param', function () {
		shouldThrow(function () {
			testFn();
		});
		
		shouldThrow(function () {
			testFn(2);
		});

		shouldThrow(function () {
			testFn(4);
		});

		shouldThrow(function () {
			testFn("");
		});
	});
});

describe('not.or', function () {
	var testFn = function (a) {
		check(a, 'a').not.or(check.policy.is('string'), check.policy.is('number').not.lt(1).not.gt(3), function (obj) {
			return obj % 2;
		});
	};
	
	it('good param', function () {
		testFn();
		testFn(0);
		testFn(4);
	});
	
	it('bad param', function () {
		shouldThrow(function () {
			testFn("");
		});
		
		shouldThrow(function () {
			testFn(2);
		});
		
		shouldThrow(function () {
			testFn(9);
		});
	});
});


describe('not.and', function () {
	var testFn = function (a) {
		check(a, 'a').not.and(check.policy.is('number').not.lt(1).not.gt(3), function (obj) {
			return obj % 2 === 0;
		});
	};
	
	it('good param', function () {
		testFn();
		testFn(0);
		testFn(4);
		testFn("");
	});
	
	it('bad param', function () {
		shouldThrow(function () {
			testFn(2);
		});
	});
});
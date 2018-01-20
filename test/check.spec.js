var path = require('path')

var shouldThrow = require(path.resolve(__dirname, './shouldThrow'))
var check = require(path.resolve(__dirname, '../index'))

check.__UT__ = true // 标记正在进行单元测试

/* global describe it */

describe('call check', function () {
  it('should NOT throw', function () {
    (function (a) {
      check(a, 'a')
      check(a)
      check()
    }(1))
  })
})

describe('is', function () {
  it('good param', function () {
    (function (a) {
      check(a, 'a').isArray()
    }([]));

    (function (a) {
      check(a, 'a').isArrayLike()
    }({length: 1}));

    (function (a) {
      check(a, 'a').isExist()
    }({}));

    /*
    (function (a) {
      check(a, 'a').isEmpty()
    }([]));
    */

    (function (a) {
      check(a, 'a').isUndefined()
    }());

    (function (a) {
      check(a, 'a').isNull()
    }(null));

    (function (a) {
      check(a, 'a').isNumber()
    }(1));

    (function (a) {
      check(a, 'a').isString()
    }('1'));

    (function (a) {
      check(a, 'a').isBoolean()
    }(true));

    (function (a) {
      check(a, 'a').isDate()
    }(new Date()));

    (function (a) {
      check(a, 'a').isRegExp()
    }(/.*/));

    (function (a) {
      check(a, 'a').isError()
    }(new Error()));

    (function (a) {
      check(a, 'a').isFunction()
    }(function () {}));

    (function (a) {
      check(a, 'a').isObject()
    }({}));

    /* 暂时没有使用浏览器跑单测
    (function (a) {
      check(a, 'a').isElement()
    }(document.querySelector('div')));
    */

    /*
    (function (a) {
      check(a, 'a').isArguments()
    }(arguments));
    */

    (function (a) {
      check(a, 'a').is('array')
    }([]));

    (function (a) {
      check(a, 'a').is('arrayLike')
    }({length: 1}));

    (function (a) {
      check(a, 'a').is('exist')
    }({}));

    /*
    (function (a) {
      check(a, 'a').is('empty')
    }([]));
    */

    (function (a) {
      check(a, 'a').is('undefined')
    }());

    (function (a) {
      check(a, 'a').is('null')
    }(null));

    (function (a) {
      check(a, 'a').is('number')
    }(1));

    (function (a) {
      check(a, 'a').is('string')
    }('1'));

    (function (a) {
      check(a, 'a').is('boolean')
    }(true));

    (function (a) {
      check(a, 'a').is('date')
    }(new Date()));

    (function (a) {
      check(a, 'a').is('regExp')
    }(/.*/));

    (function (a) {
      check(a, 'a').is('error')
    }(new Error()));

    (function (a) {
      check(a, 'a').is('function')
    }(function () {}));

    (function (a) {
      check(a, 'a').is('object')
    }({}));

    /*
    (function (a) {
      check(a, 'a').is('element')
    }(document.querySelector('div')));

    (function (a) {
      check(a, 'a').is('arguments')
    }(arguments));
    */

    (function (a) {
      check(a, 'a').is('string', 'number')
    }(1))
  })

  it('bad param', function () {
    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('array')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('arrayLike')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('exist')
      }())
    })

    /*
    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('empty')
      }([1, 2, 3]))
    })
    */

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('undefined')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('null')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('number')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('string')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('boolean')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('date')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('regExp')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('error')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('function')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('object')
      }(1))
    })

    /*
    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('element')
      }({}))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('arguments')
      }({}))
    })
    */

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').is('string', 'number')
      }({}))
    })
  })
})

describe('instanceOf', function () {
  function F () {}
  function G () {}
  function H () {}

  it('good param', function () {
    var f = new F()
    var g = new G()

    check(f, 'f').instanceOf(F)
    check(f, 'f').instanceOf(F, G)
    check(g, 'g').instanceOf(G)
    check(g, 'g').instanceOf(G, F)
  })

  it('bad param', function () {
    shouldThrow(function () {
      check().instanceOf(G)
    })

    shouldThrow(function () {
      check(1).instanceOf(G)
    })

    shouldThrow(function () {
      check('').instanceOf(G)
    })

    var f = new F()
    var g = new G()

    shouldThrow(function () {
      check(f, 'f').instanceOf(G)
    })

    shouldThrow(function () {
      check(g, 'g').instanceOf(F)
    })

    shouldThrow(function () {
      check(g, 'g').instanceOf(F, H)
    })
  })
})

describe('lt, gt', function () {
  it('good param', function () {
    (function (a) {
      check(a, 'a').gt(1).lt(2)
    }(1.234))
  })

  it('bad param', function () {
    shouldThrow(function () {
      (function (a) {
        check(a, 'a').gt(1).lt(2)
      }())
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').gt(1).lt(2)
      }(''))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').gt(1).lt(2)
      }(1))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').gt(1).lt(2)
      }(2))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').gt(1).lt(2)
      }(0))
    })
  })
})

describe('elt, egt', function () {
  it('good param', function () {
    (function (a) {
      check(a, 'a').egt(1).elt(2)
    }(1.234));

    (function (a) {
      check(a, 'a').egt(1).elt(2)
    }(1));

    (function (a) {
      check(a, 'a').egt(1).elt(2)
    }(2))
  })

  it('bad param', function () {
    shouldThrow(function () {
      (function (a) {
        check(a, 'a').egt(1).elt(2)
      }())
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').egt(1).elt(2)
      }(''))
    })

    shouldThrow(function () {
      (function (a) {
        check(a, 'a').egt(1).elt(2)
      }(0))
    })
  })
})

describe('within', function () {
  var testFn = function (a) {
    check(a, 'a').within('[0, 1)', '(1, 2]', '(-9.567, -8.567]')
  }

  it('good param', function () {
    testFn(0.5)
    testFn(1.5)
    testFn(-9)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(1)
    })

    shouldThrow(function () {
      testFn(3)
    })

    shouldThrow(function () {
      testFn(-9.567)
    })
  })
})

describe('match', function () {
  var testFn = function (a) {
    check(a, 'a').match(/^\w\d\w\d$/)
  }

  it('good param', function () {
    testFn('a1b2')
    testFn('A9B0')
    testFn('x1y2')
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(1)
    })

    shouldThrow(function () {
      testFn('dasfsdfsddfewrweqwe')
    })

    shouldThrow(function () {
      testFn('a1b2shgfjhagfsfgjhsd')
    })
  })
})

describe('same', function () {
  var other = {a: 1}
  var testFn = function (a) {
    check(a, 'a').same(other)
  }

  it('good param', function () {
    testFn(other)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn({a: 1})
    })

    shouldThrow(function () {
      testFn({})
    })
  })
})

describe('eq', function () {
  var other = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other2 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var testFn = function (a) {
    check(a, 'a').eq(other)
  }

  it('good param', function () {
    testFn(other)
    testFn(other2)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      var other3 = {
        a: 1,
        b: '2',
        c: [1, 2, 3, {x: 1, y: 2}],
        d: {e: 1, f: 2, g: -3, h: 4}
      }

      testFn(other3)
    })
  })
})

describe('has', function () {
  var other = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other2 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}]
  }

  var other3 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, g: 3, h: 4}
  }

  var other4 = {
    a: 1,
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other5 = {
    a: 1,
    b: '-2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var testFn = function (a) {
    check(a, 'a').has('d').has('f').owner.owner.has('b').eq('2')
  }

  it('good param', function () {
    testFn(other)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(other2)
    })

    shouldThrow(function () {
      testFn(other3)
    })

    shouldThrow(function () {
      testFn(other4)
    })

    shouldThrow(function () {
      testFn(other5)
    })
  })
})

describe('has, owner', function () {
  var testFn = function (a) {
    check(a, 'a').length().gt(3).lt(5)
  }

  it('good param', function () {
    testFn([1, 2, 3, 4])
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn({})
    })

    shouldThrow(function () {
      testFn([1, 2, 3])
    })
  })
})

describe('got', function () {
  function Base () {
    this.a = 1
  }

  function Sub () {
    this.b = 2
  }

  Sub.prototype = new Base()

  var obj = new Sub()

  it('good param', function () {
    check(obj, 'obj').got('a')
    check(obj, 'obj').got('b')
  })

  it('bad param', function () {
    shouldThrow(function () {
      check(obj, 'obj').got('c')
    })
  })
})

describe('map', function () {
  var testFn = function (a) {
    check(a, 'a').map(function (o) {
      return o.length
    }).gt(3).lt(5)
  }

  it('good param', function () {
    testFn([1, 2, 3, 4])
    testFn('1234')
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn('')
    })

    shouldThrow(function () {
      testFn([1, 2, 3, 4, 5])
    })
  })
})

describe('not', function () {
  var testFn = function (a) {
    check(a, 'a').not.is('string').not.gt(5).not.lt(3)
  }

  var testFn2 = function (a) {
    check(a, 'a').not.has('a').not.length()
  }

  it('good param', function () {
    testFn(3)
    testFn(4)
    testFn(5)
    testFn2()
    testFn2(null)
    testFn2({})
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn('')
    })

    shouldThrow(function () {
      testFn(10)
    })

    shouldThrow(function () {
      testFn2({a: 1})
    })

    shouldThrow(function () {
      testFn2([])
    })

    shouldThrow(function () {
      testFn2([1, 2, 3])
    })
  })
})

describe('or', function () {
  var testFn = function (a) {
    check(a, 'a').or(check.policy.gt(1).lt(2), check.policy.gt(5).lt(6))
  }

  var testFn2 = function (a) {
    check(a, 'a').or(check.policy.gt(1).lt(2), function (obj) {
      return Object.prototype.toString.call(obj) === '[object String]'
    })
  }

  it('good param', function () {
    testFn(1.5)
    testFn(5.5)
    testFn2(1.5)
    testFn2('123')
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn('')
    })

    shouldThrow(function () {
      testFn(3)
    })

    shouldThrow(function () {
      testFn2()
    })

    shouldThrow(function () {
      testFn2(3)
    })

    shouldThrow(function () {
      testFn2({})
    })
  })
})

describe('not.or', function () {
  var testFn = function (a) {
    check(a, 'a').not.or(check.policy.is('string'), check.policy.is('number').not.lt(1).not.gt(3), function (obj) {
      return obj % 2
    })
  }

  it('good param', function () {
    testFn()
    testFn(0)
    testFn(8)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn('')
    })

    shouldThrow(function () {
      testFn(2.5)
    })

    shouldThrow(function () {
      testFn(9)
    })
  })
})

describe('and', function () {
  var testFn = function (a) {
    check(a, 'a').and(check.policy.gt(1).lt(3), check.policy.gt(2).lt(4))
  }

  it('good param', function () {
    testFn(2.5)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(1.5)
    })

    shouldThrow(function () {
      testFn('')
    })
  })
})

describe('not.and', function () {
  var testFn = function (a) {
    check(a, 'a').not.and(check.policy.is('number').not.lt(1).not.gt(3), function (obj) {
      return obj % 2 === 0
    })
  }

  it('good param', function () {
    testFn()
    testFn(0)
    testFn(4)
    testFn('')
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn(2)
    })
  })
})

describe('policy.not', function () {
  var testFn = function (a) {
    check(a, 'a').and(check.policy.is('number'), check.policy.gt(1).not.gt(3), function (obj) {
      return obj % 2
    })
  }

  it('good param', function () {
    testFn(2.5)
    testFn(3)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(2)
    })

    shouldThrow(function () {
      testFn(4)
    })

    shouldThrow(function () {
      testFn('')
    })
  })
})

describe('meet', function () {
  var testFn = function (a) {
    check(a, 'a').meet(check.policy.gt(1).lt(2))
  }

  it('good param', function () {
    testFn(1.5)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn()
    })

    shouldThrow(function () {
      testFn(2.5)
    })

    shouldThrow(function () {
      testFn('')
    })
  })
})

describe('among', function () {
  var testFn = function (a) {
    check(a, 'a').among(1, 2, 3, 4)
  }

  it('good param', function () {
    testFn(1)
  })

  it('bad param', function () {
    shouldThrow(function () {
      testFn(6)
    })

    shouldThrow(function () {
      testFn(2.5)
    })

    shouldThrow(function () {
      testFn()
    })
  })
})

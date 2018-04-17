/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

function shouldThrow (fn) {
  fn.should.throw()
}

describe('#is', function () {
  it('should NOT throw', function () {
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

  it('should throw', function () {
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

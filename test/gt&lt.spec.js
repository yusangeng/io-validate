/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#gt&lt', function () {
  it('in range', function () {
    const testFn = a => check(a, 'a').gt(1).lt(2)

    testFn(1.234)
    testFn(1.1)
    testFn(1.9)
  })

  it('out of range', function () {
    const testFn = a => check(a, 'a').gt(1).lt(2);

    (_ => testFn(0)).should.throw();
    (_ => testFn(3)).should.throw();
    (_ => testFn(1)).should.throw();
    (_ => testFn(2)).should.throw();
    (_ => testFn({})).should.throw();
    (_ => testFn('xxx')).should.throw()
  })
})

/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#egt&elt', function () {
  it('in range', function () {
    const testFn = a => check(a, 'a').egt(1).elt(2)

    testFn(1.234)
    testFn(1)
    testFn(2)
  })

  it('out of range', function () {
    const testFn = a => check(a, 'a').egt(1).elt(2);

    (_ => testFn(3)).should.throw();
    (_ => testFn({})).should.throw();
    (_ => testFn('xxx')).should.throw()
  })
})

/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#length', function () {
  var testFn = function (a) {
    check(a, 'a').length().gt(3).lt(5)
  }

  it('good', function () {
    testFn([1, 2, 3, 4])
  })

  it('bad', function () {
    (() => testFn()).should.throw();
    (() => testFn({})).should.throw();
    (() => testFn([1, 2, 3])).should.throw()
  })
})

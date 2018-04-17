/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#within', function () {
  var testFn = function (a) {
    check(a, 'a').within('[0, 1)', '(1, 2]', '(-9.567, -8.567]')
  }

  it('good param', function () {
    testFn(0.5)
    testFn(1.5)
    testFn(-9)
  })

  it('bad param', function () {
    (function () {
      testFn()
    }).should.throw();

    (function () {
      testFn(1)
    }).should.throw();

    (function () {
      testFn(3)
    }).should.throw();

    (function () {
      testFn(-9.567)
    }).should.throw()
  })
})

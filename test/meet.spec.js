/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#meet', function () {
  var testFn = function (a) {
    check(a, 'a').meet(check.plan.gt(1).lt(2))
  }

  it('good param', function () {
    testFn(1.5)
  })

  it('bad param', function () {
    (function () {
      testFn()
    }).should.throw();

    (function () {
      testFn(2.5)
    }).should.throw();

    (function () {
      testFn('')
    }).should.throw()
  })
})

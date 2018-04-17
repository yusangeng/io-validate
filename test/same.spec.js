/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#same', function () {
  var other = {a: 1}
  var testFn = function (a) {
    check(a, 'a').same(other)
  }

  it('good param', function () {
    testFn(other)
  })

  it('bad param', function () {
    (function () {
      testFn()
    }).should.throw();

    (function () {
      testFn({a: 1})
    }).should.throw();

    (function () {
      testFn({})
    }).should.throw()
  })
})

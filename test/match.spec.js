/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#match', function () {
  var testFn = function (a) {
    check(a, 'a').match(/^\w\d\w\d$/)
  }

  it('good param', function () {
    testFn('a1b2')
    testFn('A9B0')
    testFn('x1y2')
  })

  it('bad param', function () {
    (function () {
      testFn()
    }).should.throw();

    (function () {
      testFn(1)
    }).should.throw();

    (function () {
      testFn('dasfsdfsddfewrweqwe')
    }).should.throw();

    (function () {
      testFn('a1b2shgfjhagfsfgjhsd')
    }).should.throw()
  })
})

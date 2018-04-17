/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#map', function () {
  var testFn = function (a) {
    check(a, 'a').map(function (o) {
      return o.length
    }).gt(3).lt(5)
  }

  it('map function & good param', function () {
    testFn([1, 2, 3, 4])
    testFn('1234')
  })

  it('map function & bad param', function () {
    (function () {
      testFn()
    }).should.throw();

    (function () {
      testFn('')
    }).should.throw();

    (function () {
      testFn([1, 2, 3, 4, 5])
    }).should.throw()
  })

  var testFn2 = function (a) {
    check(a, 'a').map('plus1', 1).eq(2)
  }

  it('map string & good param', function () {
    const obj = {
      plus1 (n) {
        return n + 1
      }
    }

    testFn2(obj)
  })
})

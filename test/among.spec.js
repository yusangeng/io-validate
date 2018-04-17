/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#among', _ => {
  var testFn = function (a) {
    check(a, 'a').among(1, 2, 3, 4)
  }

  it('good param: 1', done => {
    testFn(1)
    done()
  })

  it('bad param: 6', done => {
    (function () {
      testFn(6)
    }).should.throw()

    done()
  })

  it('bad param: {}', done => {
    (function () {
      testFn({})
    }).should.throw()

    done()
  })

  it('bad param: undefined', done => {
    (function () {
      testFn(undefined)
    }).should.throw()

    done()
  })
})

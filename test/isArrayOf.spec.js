/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#isArrayOf', function () {
  var testFn = function (a) {
    check(a, 'a').isArrayOf(check.plan.isNumber())
  }

  it('good', function () {
    testFn([1, 2, 3, 4])
  })

  it('bad', function () {
    (() => testFn()).should.throw();
    (() => testFn({})).should.throw();
    (() => testFn(123)).should.throw()
  })
})

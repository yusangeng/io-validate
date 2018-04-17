/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#equal', function () {
  var other = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other2 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other3 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: -3, h: 4}
  }

  var testFn = function (a) {
    check(a, 'a').eq(other)
  }

  it('equal', function () {
    testFn(other)
    testFn(other2)
  })

  it('NOT equal', function () {
    (_ => testFn()).should.throw();
    (_ => testFn(other3)).should.throw()
  })
})

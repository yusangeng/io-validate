/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#has', function () {
  var other = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other2 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}]
  }

  var other3 = {
    a: 1,
    b: '2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, g: 3, h: 4}
  }

  var other4 = {
    a: 1,
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var other5 = {
    a: 1,
    b: '-2',
    c: [1, 2, 3, {x: 1, y: 2}],
    d: {e: 1, f: 2, g: 3, h: 4}
  }

  var testFn = function (a) {
    check(a, 'a').has('d').has('f').owner.owner.has('b').eq('2')
  }

  it('has', function () {
    testFn(other)
  })

  it('NOT has', function () {
    (() => testFn()).should.throw();
    (() => testFn(other2)).should.throw();
    (() => testFn(other3)).should.throw();
    (() => testFn(other4)).should.throw();
    (() => testFn(other5)).should.throw()
  })
})

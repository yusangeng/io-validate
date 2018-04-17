/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('got', function () {
  function Base () {
    this.a = 1
  }

  function Sub () {
    this.b = 2
  }

  Sub.prototype = new Base()

  var obj = new Sub()

  it('got', function () {
    check(obj, 'obj').got('a').eq(1)
    check(obj, 'obj').got('b').eq(2)
  })

  it('NOT got', function () {
    (_ => check(obj, 'obj').got('c')).should.throw()
  })
})

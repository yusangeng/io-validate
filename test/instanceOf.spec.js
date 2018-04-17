/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('instanceOf', function () {
  function F () {}
  function G () {}
  function H () {}

  it('good param', function () {
    var f = new F()
    var g = new G()

    check(f, 'f').instanceOf(F)
    check(f, 'f').instanceOf(F, G)
    check(g, 'g').instanceOf(G)
    check(g, 'g').instanceOf(G, F)
  })

  it('bad param', function () {
    (function () {
      check().instanceOf(G)
    }).should.throw();

    (function () {
      check(1).instanceOf(G)
    }).should.throw();

    (function () {
      check('').instanceOf(G)
    }).should.throw

    var f = new F()
    var g = new G();

    (function () {
      check(f, 'f').instanceOf(G)
    }).should.throw();

    (function () {
      check(g, 'g').instanceOf(F)
    }).should.throw();

    (function () {
      check(g, 'g').instanceOf(F, H)
    }).should.throw()
  })
})

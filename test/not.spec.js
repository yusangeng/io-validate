/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#not', function () {
  it('3 is not string, not > 5, not < 3', done => {
    function fn (a) {
      check(a, 'a').not.is('string').not.gt(5).not.lt(3)
    }

    fn(4)
    done()
  })

  it('"1" is string', done => {
    function fn (a) {
      check(a, 'a').not.isString()
    }

    (_ => fn('1')).should.throw()
    done()
  })
})

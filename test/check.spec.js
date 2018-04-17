/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#check', _ => {
  it('should NOT throw', done => {
    const a = 1
    check(a, 'a')
    check(a)
    check()
    done()
  })
})

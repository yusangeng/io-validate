/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#and', _ => {
  it('1 good function', done => {
    const f1 = a => a > 0

    check(1, 'a').and(f1)

    done()
  })

  it('1 bad function', done => {
    const f1 = a => a < 0;

    (_ => check(1, 'a').and(f1)).should.throw()

    done()
  })

  it('2 good functions', done => {
    const f1 = a => a > 0
    const f2 = a => a < 2

    check(1, 'a').and(f1, f2)

    done()
  })

  it('1 good function and 1 bad function', done => {
    const f1 = a => a > 0
    const f2 = a => a < 2;

    (_ => check(3, 'a').and(f1, f2)).should.throw()

    done()
  })

  it('2 bad functions', done => {
    const f1 = a => a > 0
    const f2 = a => a % 2;

    (_ => check(-4, 'a').and(f1, f2)).should.throw()

    done()
  })

  it('1 good plan', done => {
    // console.log(check.plan)
    const f1 = check.plan.gt(0).lt(2)

    check(1, 'a').and(f1)

    done()
  })

  it('1 bad plan', done => {
    const f1 = check.plan.lt(0);

    (_ => check(1, 'a').and(f1)).should.throw()

    done()
  })

  it('2 good plan', done => {
    const f1 = check.plan.gt(0)
    const f2 = check.plan.lt(2)

    check(1, 'a').and(f1, f2)

    done()
  })

  it('1 good plan and 1 bad plan', done => {
    const f1 = check.plan.gt(0)
    const f2 = check.plan.lt(2);

    (_ => check(3, 'a').and(f1, f2)).should.throw()

    done()
  })

  it('2 bad plan', done => {
    const f1 = check.plan.gt(0)
    const f2 = check.plan.lt(2);

    (_ => check(-4, 'a').and(f1, f2)).should.throw()

    done()
  })
})

/* global describe it */

var path = require('path')
var chai = require('chai')
var check = require(path.resolve(__dirname, '../index'))

chai.should()
chai.config.includeStack = true

describe('#Email', function () {
  it('abc@gmail.com', function () {
    check('abc@gmail.com', 'input').matchEmail()
  })

  it('abc_xyz@gmail.com', function () {
    check('abc_xyz@gmail.com', 'input').matchEmail()
  })

  it('', function () {
    check('', 'input').matchEmail.should.throw()
  })

  it('ABC@gmail.com', function () {
    check('abc@gmail.com', 'input').matchEmail()
  })

  it('张三@gmail.com', function () {
    check('张三@gmail.com', 'input').matchEmail.should.throw()
  })

  it('abc@', function () {
    check('abc@xyz', 'input').matchEmail.should.throw()
  })

  it('@xyz', function () {
    check('abc@xyz', 'input').matchEmail.should.throw()
  })

  it('@xyz.com', function () {
    check('abc@xyz', 'input').matchEmail.should.throw()
  })

  it('abc@xyz', function () {
    check('abc@xyz', 'input').matchEmail.should.throw()
  })

  it('a,b,c@gmail.com', function () {
    check('a,b,c@gmail.com', 'input').matchEmail.should.throw()
  })

  it('abc@gmail.com ', function () {
    check('abc@gmail.com ', 'input').matchEmail.should.throw()
  })

  it(' abc@gmail.com', function () {
    check(' abc@gmail.com', 'input').matchEmail.should.throw()
  })

  it('abc#gmail.com', function () {
    check('abc#gmail.com', 'input').matchEmail.should.throw()
  })

  it('abc@gmail.com', function () {
    check('abc@gmail.com', 'input').matchEmail.should.throw()
  })
})

function good (input, name) {
  it(input, function () {
    check(input, 'input')['match' + name]()
  })
}

function bad (input, name) {
  it(input, function () {
    check(input, 'input')['match' + name].should.throw()
  })
}

describe('#URL', function () {
  good('http://abc.com/a/b/c', 'URL')
  good('https://abc.com/a/b/c', 'URL')
  good('http://abc.com/a/b/c/', 'URL')
  good('https://abc.com', 'URL')
  good('http://abc.com/', 'URL')
  good('abc.com', 'URL')
  good('abc.com/a/b/c', 'URL')

  // it should be bad.
  bad('//abc.com', 'URL')
  bad('//abc.com/', 'URL')
  bad('', 'URL')
  bad('dsffdsfdsfsdfs', 'URL')
  bad('a.b.c', 'URL')
})

describe('#IP', function () {
  good('1.2.3.4', 'IP')

  bad('1', 'IP')
  bad('1.2', 'IP')
  bad('1.2.3', 'IP')

  bad('1.2.3.400', 'IP')
})

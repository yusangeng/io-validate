var expect = require('chai').expect

module.exports = shouldThrow

/**
 * 保证fn执行抛出异常
 * @param {any} fn
 */
function shouldThrow (fn) {
  var err = null

  try {
    fn()
  } catch (e) {
    err = e
  }

  expect(err).to.be.not.a('null')
}

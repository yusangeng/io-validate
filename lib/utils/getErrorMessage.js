/**
 * 执行函数返回错误消息
 * @author Y3G
 */

module.exports = function getErrorMessage (fn) {
  var args = Array.prototype.slice.call(arguments, 1)

  try {
    if (!fn.apply(this, args)) {
      var message = fn.name || fn.toString()
      return message
    }
  } catch (err) {
    return err.message
  }
}

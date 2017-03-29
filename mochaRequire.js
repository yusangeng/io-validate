require('babel-core/register')({
  // This will override `node_modules` ignoring - you can alternatively pass
  // an array of strings to be explicitly matched or a regex / glob
  ignore: function (filename) {
    // console.log(filename)
    var match = /\/node_modules\/y-utils\/.*\.js/.test(filename)

    if (match) {
      return false
    }

    return !/es\.js$/.test(filename)
  }
})

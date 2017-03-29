require('babel-polyfill')

var path = require('path')
var chai = require('chai')

chai.should()
chai.config.includeStack = true

var eq = require(path.resolve(__dirname, '../lib/equal'))

var data = {
  undefined: undefined,
  null: null,
  1: 1,
  2: 2,
  a: 'a',
  b: 'b',
  false: false,
  true: true,
  obj: {},
  now_1: new Date(),
  now_2: new Date(),
  ago_1: new Date(0),
  ago_2: new Date(0),
  regexp1_1: /^1/g,
  regexp1_2: /^1/g,
  regexp2: /^1/igm,
  regexp3: /^2/,
  func1: function () {},
  func2: function () {},
  array1_1: [1, 2, 3, 4],
  array1_2: [1, 2, 3, 4],
  array2: [2, 3, 4, 5],

  obj1_1: {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      e: 1,
      f: 2,
      g: [2, 3, 4],
      h: {
        i: 'i',
        j: 'j'
      }
    }
  },

  obj1_2: {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      e: 1,
      f: 2,
      g: [2, 3, 4],
      h: {
        i: 'i',
        j: 'j'
      }
    }
  },

  obj2: {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      e: 1,
      f: 2,
      g: [2, 3, 4],
      h: {
        i: 'i',
        j: 'j'
      }
    },
    x: 'x'
  },

  obj3: {
    a: 1,
    b: 2,
    c: [1, 2, 3],
    d: {
      e: 1,
      f: 2,
      g: [2, 3, 4],
      h: {
        i: 'i',
        j: 'k'
      }
    }
  }
}

/* global describe it */

describe('equal', function () {
  var keys = Object.keys(data)

  keys.forEach(function (key) {
    keys.forEach(function (key2) {
      var comp = ''
      var shouldResult = false
      if (key === key2) {
        shouldResult = true
        comp = ' should be the same to '
      } else if (key.replace(/_\d$/, '') === key2.replace(/_\d$/, '')) {
        shouldResult = true
        comp = ' should be equal to '
      } else {
        comp = ' should NOT be equal to '
      }

      it(key + comp + key2, function () {
        var result = eq(data[key], data[key2], true)
        if (result !== shouldResult) {
          console.log('Wrong! ', data[key], data[key2])
          eq(data[key], data[key2], true) // for debug
        }

        result.should.to.be.equal(shouldResult)
      })
    })
  })
})

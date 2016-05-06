
var test = require('./')
var co = require('co')

function timer() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(123)
    }, 1500)
  })
}

test('bing bing foops', function*() {
  this.equals(100, 100)
  var res1 = yield Promise.resolve(true);
  this.ok(true, 'bad new')
})

test('kafoo blam', function*() {
  this.equals(100, 100)
  var res1 = yield timer()
  this.equals(12312, res1)
})


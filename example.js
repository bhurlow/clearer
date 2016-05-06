
var test = require('./')

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
  this.ok('', 'thats bad')
})

test('kafoo blam', function*() {
  this.equals(100, 100)
  var res1 = yield timer()
  this.equals(12312, res1)
})


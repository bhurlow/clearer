# Clearer

an ultrasimple test runner that let's you yield promises inside your test cases

```
npm install -g clearer
```

restults in:

```
clearer -w example.js:

✓ bing bing foops
✓ kafoo blam
x kafoo blam : thats bad
x kafoo blam

--- completed 2 tests : 2 passed : 2 failed  ---
```

an example test file:

```javascript
var test = require('clearer')

function timer() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(123)
    }, 1500)
  })
}

test('bing bong', function*() {
  // yield as many promises as you need to:
  var res1 = yield timer()
  this.equals(123, res1)
  
  var res2 = yield timer()
  this.equals(123, res2)
})
```

### Assertations

`this.equals`

`this.ok`
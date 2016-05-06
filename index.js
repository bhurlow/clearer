
var chalk = require('chalk')
var co = require('co')

var running = 0
var total = 0
var fails = 0
var passes = 0

function pass(desc, msg) {
  var log = chalk.green('\u2713 ')
  log += desc
  if (msg) log += ' : ' + msg
  console.log(log)
  passes++
}

function fail(desc, msg) {
  var log = chalk.red('x ')
  log += desc
  if (msg) log += ' : ' + msg
  console.log(log)
  fails++
}

function finalize() {
  console.log()
  console.log(` --- completed ${total} tests : ${passes} passed : ${fails} failed  ---`)
  console.log()
}

module.exports = function(desc, gen) {

  total++
  running++

  this.equals = function(a, b) {
    if (a === b) pass(desc)
    else fail(desc)
  }

  this.ok = function(val, msg) {
    if (val) pass(desc, msg)
    else fail(desc, msg)
  }

  co(gen).then(function(ret) {
    running--
    if (running <= 0) finalize()
  })

}

var assert = require('chai').assert
  , util = require('util')
  , Console = require('../lib/console').Console
  , colors = require('../lib/colors')

var red = colors.red('red')
var blue = colors.blue('blue')

var long = 'Roses are red, Violets are blue, this string is long, and should be trimmed, too!'
var colorLong = long.replace('red', red).replace('blue', blue);

assert.lengthOf(long, 81)
assert.lengthOf(colorLong, 99)
assert.equal(Console.trim(colorLong, 50), Console.trim(long, 50))

var test = require('tape');
var MemDB = require('..');

test('string path', function (t) {
  t.plan(1);
  var db = MemDB('ofoo');
  t.ok(true);
});

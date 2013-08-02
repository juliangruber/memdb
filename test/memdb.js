var test = require('tape');
var MemDB = require('..');

test('MemDB', function (t) {
  t.plan(3);
  var db = MemDB();
  db.put('foo', 'bar', function (err) {
    t.error(err);
    db.get('foo', function (err, value) {
      t.error(err);
      t.equal(value, 'bar');
    });
  });
});

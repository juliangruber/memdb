var levelup = require('levelup');
var memdown = require('memdown');

module.exports = MemDB;

function MemDB (opts, fn) {
  if (typeof opts == 'function') {
    fn = opts;
    opts = {};
  }
  opts = opts || {};
  opts.db = function (l) { return new memdown(l) };
  return levelup('mem', opts, fn);
}


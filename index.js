var levelup = require('levelup');
var memdown = require('memdown');

module.exports = MemDB;

function MemDB (opts, fn) {
  if (typeof opts == 'function') {
    fn = opts;
    opts = {};
  }
  if (typeof opts == 'string') opts = {};
  opts = opts || {};
  opts.db = function (l) { return new memdown(l) };
  return levelup('', opts, fn);
}


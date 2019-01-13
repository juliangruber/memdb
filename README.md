
# MemDB

[LevelUp](https://npmjs.org/package/levelup) +
[MemDown](https://npmjs.org/package/memdown). Superseded by [level-mem](https://github.com/Level/mem).

[![build status](https://secure.travis-ci.org/juliangruber/memdb.png)](http://travis-ci.org/juliangruber/memdb)

[![testling badge](https://ci.testling.com/juliangruber/memdb.png)](https://ci.testling.com/juliangruber/memdb)

## Usage

```js
var MemDB = require('memdb');
var db = MemDB();
```

## API

### MemDB([opts, ][fn])

Initialize the `db` with `opts` and either return a `db` or call `fn` with it.

### MemDB#{get,put,del,...}

See [LevelUp](https://npmjs.org/package/levelup).

## Installation

With [npm](https://npmjs.org) do:

```bash
npm install memdb
```

Then bundle for the browser with
[browserify](https://github.com/substack/node-browserify).

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

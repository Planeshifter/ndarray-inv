# ndarray-inv

calculates matrix inverses via Gauss-Jordan elimination. The algorithm has a computational complexity of O(n^3). It handles singular matrices
by throwing an error when no non-zero pivot can be chosen during the algorithm.

[![Build Status](https://travis-ci.org/Planeshifter/ndarray-inv.svg?branch=master)](https://travis-ci.org/Planeshifter/ndarray-inv)

## Install

```
npm install ndarray-inv
```

## Load

Load function via
```JS
const inv = require("ndarray-inv");
```

Example usage:

```JS
const ndarray = require("ndarray");
const show = require("ndarray-show");
const ops = require("ndarray-ops");

const M = ndarray(new Float64Array( [2.3, 4.1, 1.8, 1.4] ), [2, 2] )

console.log( show( inv(M) ) );
```

Output:
```
-0.337    0.433
0.986   -0.553
```

## Tests

Run tests via command `npm test`.

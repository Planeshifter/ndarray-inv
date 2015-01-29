# ndarray-inv

calculates matrix inverses via Gauss-Jordan elimination. The algorithm has a computational complexity of O(n^3). It handles singular matrices
by throwing an error when no non-zero pivot can be chosen during the algorithm.

## Load

Load function via
```
var inv = require("./inv.js");
```

Example usage:

```
var ndarray = require("ndarray");
var show = require("ndarray-show");
var ops = require("ndarray-ops");

var M = ndarray(new Float64Array( [2.3, 4.1, 1.8, 1.4] ), [2, 2] )

console.log( show( inv(M) ) );
```

Output:
```
-0.337    0.433
0.986   -0.553
```

## Tests

Run tests via command `npm test`.

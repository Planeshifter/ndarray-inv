const ndarray = require('ndarray')
const zeros = require('ndarray-scratch').zeros

const inv = function inv (M) {
  // Gauss-Jordan elimination to invert 2d matrix

  if (M.dimension !== 2) {
    throw new TypeError('Only matrices can be inverted, dimension has to be two.')
  } else if (M.shape[0] !== M.shape[1]) {
    throw new TypeError('Matrix must be square')
  }

  let i = 0
  let ii = 0
  let j = 0
  const dim = M.shape[0]
  let e = 0
  let t = 0
  const I = zeros([dim, dim])
  const C = ndarray(new Float64Array(dim * dim), [dim, dim])

  for (i = 0; i < dim; i += 1) {
    for (j = 0; j < dim; j += 1) {
      if (i === j) {
        I.set(i, j, 1)
      }
      C.set(i, j, M.get(i, j))
    }
  }

  for (i = 0; i < dim; i += 1) {
    e = C.get(i, i)

    if (e === 0) {
      for (ii = i + 1; ii < dim; ii += 1) {
        if (C.get(ii, i) !== 0) {
          for (j = 0; j < dim; j++) {
            e = C.get(i, j)
            C.set(i, j, C.get(ii, j))
            C.set(ii, j, e)
            e = I.get(i, j)
            I.set(i, j, I.get(ii, j))
            I.set(ii, j, e)
          }
          break
        }
      }
      e = C.get(i, i)
      if (e === 0) {
        throw new Error('Matrix is not invertible')
      }
    }

    for (j = 0; j < dim; j++) {
      C.set(i, j, C.get(i, j) / e)
      I.set(i, j, I.get(i, j) / e)
    }

    for (ii = 0; ii < dim; ii++) {
      if (ii == i) {
        continue
      }
      e = C.get(ii, i)
      for (j = 0; j < dim; j++) {
        C.set(ii, j, C.get(ii, j) - e * C.get(i, j))
        I.set(ii, j, I.get(ii, j) - e * I.get(i, j))
      }
    }
  }
  // I is now the inverse, return it
  return I
}

module.exports = inv

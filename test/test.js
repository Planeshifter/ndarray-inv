var chai = require('chai')
var ndarray = require('ndarray')
var inv = require('../inv.js')
var expect = chai.expect

describe('inv handles square matrices', function () {
  it('returns identity for identity', function () {
    var I = ndarray(new Float64Array([1, 0, 0, 1]), [2, 2])
    var I_inv = inv(I)
    var I_arr = Array.prototype.slice.call(I)
    var I_inv_arr = Array.prototype.slice.call(I_inv)
    expect(I_inv_arr).to.eql(I_arr)
  })
  it('handles general 2x2 matrix', function () {
    var I = ndarray(new Float64Array([2, 1, 3, 4]), [2, 2])
    var I_inv = inv(I)
    expect(I_inv.get(0, 0)).to.be.closeTo(0.8, 0.0001)
    expect(I_inv.get(0, 1)).to.be.closeTo(-0.2, 0.0001)
    expect(I_inv.get(1, 0)).to.be.closeTo(-0.6, 0.0001)
    expect(I_inv.get(1, 1)).to.be.closeTo(0.4, 0.0001)
  })
  it('throws error for singular matrices', function () {
    var I = ndarray(new Float32Array([1, 0, 1, 0]), [2, 2])
    expect(function () {
      inv(I)
    }).to.throw(Error)
  })
})

describe('other cases (non-square arrays, dim>2)', function () {
  it('inv throws when dim>2', function () {
    var I = ndarray(new Float64Array([1, 2, 3, 4, 5, 6, 7, 8]), [2, 2, 2])
    expect(function () {
      inv(I)
    }).to.throw(TypeError)
  })
  it('inv throws when m != n', function () {
    var I = ndarray(new Float64Array([1, 2, 3, 4, 5, 6]), [2, 3])
    expect(function () {
      inv(I)
    }).to.throw(TypeError)
  })
})

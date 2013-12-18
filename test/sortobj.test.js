var sortobj = require('../');
var should = require('chai').should();

describe('sortobj.test.js', function () {
  it('should be equal', function () {
    var obj = {b: 2, c: 3, a: 1};
    var arr = [['a', 1], ['b', 2], ['c', 3]];
    sortobj(obj).should.eql(arr);

    obj = {b: {z: 1, y: 2}, c: 3, a: 1};
    arr = [['a', 1], ['b', [['y', 2], ['z', 1]]], ['c', 3]];
    sortobj(obj).should.eql(arr);
  });

});
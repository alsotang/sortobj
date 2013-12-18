# sortobj

[![Build Status](https://travis-ci.org/alsotang/sortobj.png?branch=master)](https://travis-ci.org/alsotang/sortobj)

Convert Object to corresponding sorted-key Array.

## Installation

```shell
$ npm install sortobj
```

## Examples

```js
var sortobj = require('sortobj');

obj = {b: {z: 1, y: 2}, c: 3, a: 1};
arr = [['a', 1], ['b', [['y', 2], ['z', 1]]], ['c', 3]];
sortobj(obj).should.eql(arr);
```
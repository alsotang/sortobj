// copy from npm: utility
var sortobj = function (o) {
  if (!o || Array.isArray(o) || typeof o !== 'object') {
    return o;
  }
  var keys = Object.keys(o);
  keys.sort();
  var values = [];
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    values.push([k, sortobj(o[k])]);
  }
  return values;
};

module.exports = sortobj;
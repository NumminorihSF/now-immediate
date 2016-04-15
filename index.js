'use strict';
var store;

function NowImmediate () {
  if (store) {
    return store;
  }
  store = Date.now();
  setImmediate(function () {
    store = 0;
  });
  return store;
}

module.exports = NowImmediate;
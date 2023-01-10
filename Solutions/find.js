// Find key by value

// This one works by returning array of result keys,
// so tests don't work as expected

'use strict';

const find = (object, ...values) => {
  const keys = Object.keys(object);
  const result = [];
  for (const key of keys) {
    for (const value of values) {
      if (object[key] === value) result.push(key);
    }
  }
  return result;
};

require('../Tests/find.js')(find);

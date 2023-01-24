// Find key by value

'use strict';

const find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

require('../Tests/find.js')(find);

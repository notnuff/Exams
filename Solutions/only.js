// Copy only listed values from dict

'use strict';

const only = (dictionary, ...only) => {
  const keys = Object.keys(dictionary);
  const result = {};
  for (const key of keys) {
    for (const requestKey of only) {
      const condition = (requestKey === key);
      if (condition) result[key] = dictionary[key];
    }
  }
  return result;
};

require('../Tests/only.js')(only);

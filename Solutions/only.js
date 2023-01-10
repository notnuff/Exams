// Copy only listed values from dict

'use strict';

const only = (dictionary, ...only) => {
  const keys = Object.keys(dictionary);
  for (const currentKey of keys) {
    if (only.includes(currentKey)) {
    } else {
      delete dictionary[currentKey];
    }
  }
  return dictionary;
};

require('../Tests/only.js')(only);

const fs = require('fs');
const path = require('path');
const { makeLorem } = require('./makeLoremMB');

const TEST_SIZE = 100;
const filePath = path.resolve(__dirname, `./testLorem${TEST_SIZE}MB.txt`);

module.exports = {
  TEST_SIZE,
  filePath,
  prepare: () => {
    if (fs.existsSync(filePath)) return Promise.resolve();

    return makeLorem(TEST_SIZE, filePath);
  }
};

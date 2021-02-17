const fs = require('fs');
const path = require('path');
const { filePath } = require('./config');

const fileReadPath = filePath;
const fileWritePath = path.resolve(__dirname, './loremTestTemp.txt');

const before = process.memoryUsage().rss;
fs.readFile(fileReadPath, (err, data) => {
  if (err) {
    console.error(err);
  }

  fs.writeFileSync(fileWritePath, data);

  const memoryUsage = process.memoryUsage().rss - before;

  console.log('memory usage : ', memoryUsage);
  fs.unlinkSync(fileWritePath);
});

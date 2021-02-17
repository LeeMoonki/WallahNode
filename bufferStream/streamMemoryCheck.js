const fs = require('fs');
const path = require('path');
const { filePath, prepare } = require('./config');

prepare().then(() => {
  const fileReadPath = filePath;
  const fileWritePath = path.resolve(__dirname, './loremTestTemp.txt');

  const before = process.memoryUsage().rss;

  const readStream = fs.createReadStream(fileReadPath);
  const writeStream = fs.createWriteStream(fileWritePath);

  readStream.pipe(writeStream);

  readStream.on('end', () => {
    console.log('write end');

    const memoryUsage = process.memoryUsage().rss - before;

    console.log('memory usage : ', memoryUsage);
    fs.unlinkSync(fileWritePath);
  });
});

const fs = require('fs');
const path = require('path');

const fileReadPath = path.resolve(__dirname, './loremTiny.txt');
const fileWritePath = path.resolve(__dirname, './loremTinyCopy.txt');

if (fs.existsSync(fileWritePath)) {
  fs.unlinkSync(fileWritePath);
};

const readStream = fs.createReadStream(fileReadPath, { highWaterMark: 64 });
const writeStream = fs.createWriteStream(fileWritePath);

readStream.pipe(writeStream);

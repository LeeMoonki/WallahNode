const fs = require('fs');
const _path = require('path');

const fileReadPath = _path.resolve(__dirname, './lorem1MB.txt');

function makeLorem(mb = 10, path) {
  return new Promise((resolve, reject) => {
    const fileWritePath = path;

    if (fs.existsSync(fileWritePath)) resolve();

    const lorem1mb = [];
    const readStream = fs.createReadStream(fileReadPath);
    const writeStream = fs.createWriteStream(fileWritePath);

    readStream.on('data', (chunk) => {
      lorem1mb.push(chunk);
    });

    readStream.on('end', () => {
      const lorem = Buffer.concat(lorem1mb).toString();
      for (let i = 0; i < mb; i++) {
        writeStream.write(lorem);
      }
      writeStream.end();
      writeStream.on('finish', () => {
        resolve();
      });
    });
  });
}

module.exports = {
  makeLorem,
};


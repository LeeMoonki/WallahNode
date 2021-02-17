const fs = require('fs');
const path = require('path');

const fileWritePath = path.resolve(__dirname, './streamWrite.txt');

if (fs.existsSync(fileWritePath)) {
  fs.unlinkSync(fileWritePath);
}

const writeStream = fs.createWriteStream(fileWritePath);

for (let i = 0; i < 10; i++) {
  writeStream.write(`${i}th `);
}

writeStream.end();


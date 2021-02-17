const fs = require('fs');
const path = require('path');

const highWaterMark = 64;

// https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_fs_createreadstream_path_options
const readStream = fs.createReadStream(path.resolve(__dirname, './loremTiny.txt'), { highWaterMark });
const data = [];

// https://nodejs.org/dist/latest-v15.x/docs/api/stream.html#stream_class_stream_readable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
readStream.on('data', (chunk) => {
  console.log(`onData : ${chunk}\n`, chunk, chunk.byteLength);
  data.push(chunk);
});

readStream.on('end', () => {
  console.log(`onEnd : `, data);
  console.log(`onEnd : `, Buffer.concat(data).toString());
});

readStream.on('error', (err) => {
  console.error(`onError : ${err}`);
});

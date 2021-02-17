const buffer = Buffer.from('abcd efg hijk lmnop');

console.log('Buffer.from : ', buffer);
console.log('Buffer.from.length : ', buffer.length);
console.log('Buffer.from.byteLength : ', buffer.byteLength);

const arr = [Buffer.from('a100'), Buffer.from('b200'), Buffer.from('c300')];
const buffer2 = Buffer.concat(arr);
console.log('buffer.concat : ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('buffer.alloc : ', buffer3);


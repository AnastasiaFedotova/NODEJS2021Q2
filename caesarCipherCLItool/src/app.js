const fs = require('fs');
const cipher = require('./cipher/cipher');
const options = require('./options/options');
const checkFile = require('./check/files');

if (options.input) checkFile(options.input);
if (options.output) checkFile(options.output);
if (options.action === 'decode') options.shift = -(options.shift);

if (!options.input) {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    const result = cipher.getCipher(chunk.toString(), +options.shift);

    !options.output ? process.stdout.write(`result: ${result}`)
      : fs.createWriteStream(options.output, { flags: 'a' }).write(result);

    process.stdin.resume();
  });
}
else if (!options.output) {
  const readableStream = fs.createReadStream(options.input, 'utf8');

  readableStream.on('data', (chunk) => {
    process.stdout.write(cipher.getCipher(chunk.toString(), +options.shift));
  });
}
else {
  const readableStream = fs.createReadStream(options.input, 'utf8');

  const writeableStream = fs.createWriteStream(options.output, { flags: 'a' });

  readableStream.on('data', (chunk) => {
    writeableStream.write(cipher.getCipher(chunk.toString(), +options.shift));
  });
}

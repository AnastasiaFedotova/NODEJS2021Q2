const fs = require('fs');

module.exports = function checkFile(filePath) {
  fs.access(filePath, (err) => {
    if (err) {
      process.stderr.write(`Error: ${filePath} \n the file is missing or there is no access to the file`);
      process.exit();
    }
  });
};

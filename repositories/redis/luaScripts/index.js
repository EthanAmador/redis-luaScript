const path = require('path');
const fs = require('fs');

const readFile = fileName => {
  const pathFile = path.join(__dirname, fileName);
  return fs.readFileSync(pathFile);
};

module.exports = {
  incrementFile: readFile('increment.lua')
};

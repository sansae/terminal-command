const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('file.txt', 'Hello beautiful world', (err) => {
    if (err) {
      return `Error: ${err}`;
    }
    console.log('The file has been created.');
  })
}

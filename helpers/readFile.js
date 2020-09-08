const fsPromises = require('fs').promises;

const getJsonFromFile = (filePath) =>
  fsPromises.readFile(filePath, { encoding: 'utf8' })
    .then(data => JSON.parse(data))
    .catch(error => console.log(error));

module.exports = {
  getJsonFromFile: getJsonFromFile
}
const { getJsonFromFile } = require('../helpers/readFile');
const path = require('path');

const getAllCards = (req, res) => {
  return getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((data) => {
      if(!data) {
        res
          .status(500)
          .send('Что-то пошло не так')
        return
      }
      res
        .status(200)
        .send(data)
    })
}

module.exports = {
  getAllCards: getAllCards
}

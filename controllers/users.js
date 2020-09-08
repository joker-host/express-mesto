const { getJsonFromFile } = require('../helpers/readFile');
const path =require('path');

const getAllUsers = (req, res) => {
  return getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if(!data) {
        res
          .status(500)
          .send('Что-то пошло не так')
        return
      }
      console.log(data);
      res
        .status(200)
        .send(data)
    })
}

module.exports = {
  getAllUsers: getAllUsers
}
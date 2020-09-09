const { getJsonFromFile } = require('../helpers/readFile');
const path = require('path');
const error = {
  message: 'Нет пользователя с таким id'
}
const errorJSON = JSON.stringify(error);

const getAllUsers = (req, res) => {
  return getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
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

const getUserById = async (req, res) => {
  try {
    const data = await getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    if(!data) {
      throw new Error('Данные не получены')
    }
    console.log(data)
    const foundUser = data.find(c => c._id === req.params.id)

    if(!foundUser) {
      res
        .status(404)
        .send(errorJSON)
    }
    res
      .status(200)
      .send(foundUser)
  } catch (err) {
      res
        .status(500)
        .send('oops')
  }

}

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById
}
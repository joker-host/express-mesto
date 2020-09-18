const path = require('path');
const { getJsonFromFile } = require('../helpers/readFile');

const error = {
  message: 'Нет пользователя с таким id',
};
const errorJSON = JSON.stringify(error);

const User = require('../models/user')


const getAllUsers = (req, res) => User.find({})
  .then((data) => {
    if (!data) {
      res
        .status(500)
        .send('Что-то пошло не так');
      return;
    }
    res
      .status(200)
      .send(data);
  });

const getUserById = (req, res) => {
  console.log(req.params.id)
  return User.findById({ _id: req.params.id })
    .then((user) => {

      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' })
      }

      return res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err))

}

const createUser = (req, res) => {
  return User.create(req.body)
    .then(user => res.status(200).send(user))
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
};

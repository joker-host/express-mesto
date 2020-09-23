const User = require('../models/user');

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

const getUserById = (req, res) => User.findById({ _id: req.params.id })
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'Нет пользователя с таким id' });
    }

    return res.status(200).send(user);
  })
  .catch((err) => res.status(500).send(err));

const createUser = (req, res) => User.create(req.body)
  .then((user) => {
    if (!user) {
      return res.status(400).send({ message: 'Переданы некорректные данные' });
    }

    return res.status(201).send(user);
  })
  .catch((err) => {
    res
      .status(500)
      .send(err);
  });

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};

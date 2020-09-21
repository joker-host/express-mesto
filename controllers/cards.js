const Card = require('../models/card')

const getAllCards = (req, res, next) => Card.find({})
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

  const createCard = (req, res, next) => {
    const { _id } = req.user;

    return Card.create({ name: req.body.name, link: req.body.link, owner: _id })
      .then((card) => {

        if(!card) {
          return res.status(400).send({ message: 'Переданы некорректные данные'})
        }

        res.status(200).send(card)
      })
      .catch((err) => {
        res
          .status(500)
          .send(err)
      })
  }

  const deleteCard = (req, res) => {
    return Card.remove({ _id: req.params.id })
      .then((card) => {
        
        if(!card) {
          return res.status(404).send({ message: 'Карточка не найдена'})
        }

        res.status(200).send({message: 'success'})
      })
      .catch((err) => {
        res
          .status(500)
          .send(err)
      })

  }

module.exports = {
  getAllCards,
  createCard,
  deleteCard
};


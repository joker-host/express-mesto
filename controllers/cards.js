const Card = require('../models/card')

const getAllCards = (req, res) => Card.find({})
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

  const createCard = (req, res) => {
    const { _id } = req.user;

    return Card.create({ name: req.body.name, link: req.body.link, owner: _id })
      .then(card => res.status(200).send(card))
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        // console.log(_id);
        console.log(req.body)
      })
  }

module.exports = {
  getAllCards,
  createCard
};


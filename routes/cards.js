const router = require('express').Router();
const { getAllCards, createCard } = require('../controllers/cards');

router.get('/cards', getAllCards);

router.post('/cards', createCard);

module.exports = {
  router,
};

const router = require('express').Router();
const { getAllUsers, getUserById, createUser } = require('../controllers/users');

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

module.exports = {
  router,
};

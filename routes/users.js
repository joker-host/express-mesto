const router = require('express').Router();
const { getAllUsers } = require('../controllers/users')

router.use('/users/:1', (req, res) => {
  console.log({req})
  res.send('You send One');
})

router.use('/users', getAllUsers)

module.exports = {
  router: router
}
const express = require('express');
const app = express();
const path = require('path');
const usersRouter = require('./routes/users').router;

app.use(
  express.static(
    path.join(__dirname, 'public')
  )
);

app.use(
  usersRouter
)

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log('Мы слушаем на порту ' + PORT );
})
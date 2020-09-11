const express = require('express');

const app = express();
const path = require('path');
const usersRouter = require('./routes/users').router;
const cardsRouter = require('./routes/cards').router;

const missingRouter = {
  message: 'Запрашиваемый ресурс не найден',
};
const missingRouterJson = JSON.stringify(missingRouter);

app.use(
  express.static(
    path.join(__dirname, 'public'),
  ),
);

app.use(
  usersRouter,
);

app.use(
  cardsRouter,
);

app.get('*', (req, res) => {
  res
    .status(404)
    .send(missingRouterJson);
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`Мы слушаем на порту ${PORT}`);
});

/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { User } = require('../database/models/user.js');

const app = express();
const PORT = 3002;

const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

app.use(bodyParser.json());
app.use(express.static(PUBLIC_PATH));

app.get('/api/reviews', (req, res) => {
  User.find()
    .then((results) => res.send(results))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on:', PORT);
  }
});

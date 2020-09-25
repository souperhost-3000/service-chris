const express = require('express');
const path = require('path');
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');
// const { User } = require('../database/index.js');
const Users = require('../database/models/user.js');
const app = express();
const PORT = 3002;
const bodyParser = require('body-parser');
const faker = require('faker');

app.use(bodyParser.json());
app.use(express.static(PUBLIC_PATH));

app.get('/api/reviews', (req, res) => {
  Users.find()
    .then(results => res.send(results))
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
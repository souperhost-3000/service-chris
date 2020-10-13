/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const compression = require('compression');
const { User } = require('../database/models/user.js');

const app = express();
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public');

app.use(compression());
app.use(bodyParser.json());
app.use(express.static(PUBLIC_PATH));

app.get('/api/reviews', (req, res) => {
  User.find()
    .then((result) => res.send(result))
    .catch((err) => { console.log(err); res.send(500); });
});

app.get('/api/reviews/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  User.findOne({ listing_id: id })
    .then((results) => res.send(results))
    .catch((err) => {
      console.log(err);
      res.send(500);
    });
});

module.exports = app;

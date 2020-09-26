const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongoose'))
  .catch((err) => console.log(err));

module.exports = db;

/* eslint-disable camelcase */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  listing_id: Number,
  user_data: []
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
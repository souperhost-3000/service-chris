const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fec', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connected to mongoose'))
  .catch((err) => console.log(err))

const reviewSchema = new mongoose.Schema({
  username: String,
  review: String,
  cleanliness: Number,
  communication: Number,
  checkin: Number,
  accuracy: Number,
  location: Number,
  value: Number
})

const userSchema = new mongoose.Schema({
  listing_id: Number,
  user_data: {
    type: [reviewSchema],
    default: undefined
  }
})

const Review = mongoose.model('Review', reviewSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Review, User }
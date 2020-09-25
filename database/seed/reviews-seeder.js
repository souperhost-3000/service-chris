/* eslint-disable camelcase */
require('../index.js');
const aws = require('aws-sdk');
const { User } = require('../models/user.js');
const mongoose = require('mongoose');
const faker = require('faker');

const reviews = [];
for (let i = 1; i <= 100; i++) {
  let data = {
    id: i,
    user_data: []
  };

  for (let j = 0; j < Math.floor(Math.random() * 30) + 1; j++) {
    data.user_data.push(
      {
        username: faker.name.firstName(),
        image: 'https://loremflickr.com/320/240/dog',
        review: faker.lorem.sentence(),
        cleanliness: Math.floor(Math.random() * 5) + 1,
        communication: Math.floor(Math.random() * 5) + 1,
        checkin: Math.floor(Math.random() * 5) + 1,
        accuracy: Math.floor(Math.random() * 5) + 1,
        location: Math.floor(Math.random() * 5) + 1,
        value: Math.floor(Math.random() * 5) + 1
      }
    );
  }
  reviews.push(data);
}

const insertUserData = () => {
  User.deleteMany({})
    .then(() => {
      User.create(reviews)
        .then(() => mongoose.disconnect())
        .catch((err) => console.log(err));
    });
};

insertUserData();
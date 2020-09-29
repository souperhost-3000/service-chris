/* eslint-disable no-console */
/* eslint-disable camelcase */
require('../index.js');
const mongoose = require('mongoose');
const faker = require('faker');
const { User } = require('../models/user.js');

const reviews = [];
for (let i = 1; i <= 100; i += 1) {
  const data = {
    listing_id: i,
    user_data: [],
  };

  for (let j = 0; j < Math.floor(Math.random() * 200) + 1; j += 1) {
    const ran = Math.floor(Math.random() * 100) + 1;
    data.user_data.push(
      {
        username: faker.name.firstName(),
        image: `https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/pic${ran}.jpg`,
        review: faker.lorem.sentences(),
        cleanliness: Math.floor(Math.random() * 5) + 1,
        communication: Math.floor(Math.random() * 5) + 1,
        checkin: Math.floor(Math.random() * 5) + 1,
        accuracy: Math.floor(Math.random() * 5) + 1,
        location: Math.floor(Math.random() * 5) + 1,
        value: Math.floor(Math.random() * 5) + 1,
        createdAt: Date(),
      },
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

require('@babel/polyfill');
const mongoose = require('mongoose');

describe('Database testing', () => {
  let db;

  beforeAll(async () => {
    db = await mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await db.disconnect();
  });

  it('should pass the test', async () => {
  });
});

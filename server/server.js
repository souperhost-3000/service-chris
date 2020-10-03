const server = require('./index.js');

const PORT = process.env.PORT || 3002;

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on:', PORT);
  }
});

module.exports = server;

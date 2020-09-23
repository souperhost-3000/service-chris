const express = require('express');
const path = require('path');
const PUBLIC_PATH = path.resolve(__dirname, '..', 'public')
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(PUBLIC_PATH));

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on:', PORT)
  }
})
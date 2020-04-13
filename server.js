const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`App listening on ${port}`);
});

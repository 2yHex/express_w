'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Privet, Mir, ot studenta Hexlet!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express started on port ${port}`);
});

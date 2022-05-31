const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello Wolrd Ignite!' });
});

app.listen(3333); // - Define a porta que vamos utilizar: localhost:3333

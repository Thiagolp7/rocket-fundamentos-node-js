const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({ message: 'Hello NodeJs' });
  // Geralmente vamos utilizar o res.json ao invés do res.send.
  // return res.send('Hello world!');
});

app.listen(3333); // - Define a porta que vamos utilizar: localhost:3333

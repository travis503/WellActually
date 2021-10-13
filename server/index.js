const express = require('express');
const app = express();
const port = 3000;
var testCard = require('../testCard.js');

// const db = client.db('SDC');
// const collection = db.collection('productStyles');

app.use(express.static('./client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/newCard', (req, res) => {
  console.log('Sending: ', testCard);
  res.send(testCard);
})

app.listen(port, () => console.log(`Well, Actually is listening on port ${port}.`));
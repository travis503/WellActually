const express = require('express');
const app = express();
const port = 3000;
var testCard = require('../testCard.js');

const client = require('../db/index');
const db = client.db('WAcards');
const collection = db.collection('cards');

app.use(express.static('./client/dist'));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/newCard', (req, res) => {
  var randomCard = collection.aggregate([{$sample: {size: 1}}]).next()
  .then((randomCard) => {
    console.log('Returning card: ', randomCard);
    res.send(randomCard);
  })
  .catch((error) => {
    console.log('Error selecting random card: ', error);
    res.send(error);
  })
})

app.post('/addCard', (req, res) => {
  console.log('Adding card: ', req.body);
  collection.insertOne(req.body)
  .then((response) => {
    console.log('Card added to database.');
    res.send(response);
  })
  .catch((error) => {
    console.log('Error adding card to database: ', error);
    res.send(error);
  })
})

app.listen(port, () => console.log(`Well, Actually is listening on port ${port}.`));
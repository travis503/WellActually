const express = require('express');
const app = express();
const port = 3000;

// const connection = require('../db/index');

app.use(express.static('../client/dist'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Well, Actually is listening on port ${port}.`));
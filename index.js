const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors')
const path = require('path');

const bodyparser = require('body-parser')

app.use(express.json({ limit: '50mb' }));;
app.use(bodyparser.json());

require('./src/repositories/database');


let PORT = process.env.PORT || 3000;

const { index } = require('./src/routes/index');
index(app);

app.all('*', (req, res) => {
    res.status(404).json({
      status: false,
      error: 'And Just Like That, You Completely Lost Your Way 😥',
    });
  });


app.listen(PORT, () => {
    console.log(`
  Server is running on port ${PORT}
  http://localhost:${PORT}
  `);
  });
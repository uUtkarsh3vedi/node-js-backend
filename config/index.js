
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const express = require('express');

const routes = require('./routes/route.js');
 const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended : true}));
app.use('/', routes);

app.use(cors());

const PORT = process.env.PORT 

module.exports = { PORT };


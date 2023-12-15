const addUser = require('./controller/user-controller.js');

const express = require("express");



const route = express.Router();

const router = route.post("/add", addUser);

module.exports = router

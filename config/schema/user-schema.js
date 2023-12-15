// import mongoose from "mongoose";
const mongoose = require('mongoose');

 const userSchema = mongoose.schema({
    name: String,
    username: String,
    email: String,
    phone: String
})

const user = mongoose.model('user', userSchema);
export default user;
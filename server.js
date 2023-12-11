const http = require("node:http");
const hostname = "localhost";
const mongoose = require("mongoose");

const { PORT } = require("./config/index");
console.log(PORT);
const port = 3000;

mongoose
  .connect(
    "mongodb+srv://utkarshit2020:LtQaMOXLhHLzmkE3@cluster0.w3sn48i.mongodb.net/"
  )
  .then(() => console.log("MongoDB connected"));

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  
});
const User = mongoose.model("user", userSchema);

require("dotenv").config();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

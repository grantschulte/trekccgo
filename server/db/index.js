const mongoose = require("mongoose");
const { mongoURI } = require("../config").db;
dbURI = mongoURI();

// Use global Promise object with mongoose.

mongoose.Promise = global.Promise;

// Connect database

const db = mongoose.connect(dbURI, {
  useMongoClient: true
});

db.on("connected", () => {
  console.log("Database connected at:");
  console.log(dbURI);
  console.log("================================");
});

db.on("disconnected", () => {
  console.log("Database connection closed.");
  console.log("================================");
});

db.on("error", () => {
  console.log("Database connection error.");
  console.log("================================");
});

module.exports = db;

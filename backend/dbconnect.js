const mongoose = require("mongoose");

/**
 * @description connect to instantnotes database of mongodb
 */
const connectMongoDb = (mongoURI) => {
  try {
    mongoose.connect(mongoURI, () => {
      console.log("Connected to mongodb database!");
    });
  } catch (error) {
    console.log("unable to connect with mongodb");
  }
};

module.exports = connectMongoDb;

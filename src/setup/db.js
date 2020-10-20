const mongoose = require("mongoose");
const config = require("config");

const { baseURL, dbName } = config.get("dbConfig");

const connectToDB = async () => {
  try {
    await mongoose.connect(`${baseURL}/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    if(process.env.NODE_ENV === "DEVELOPMENT") console.log("Successfully connected to mongodb");
  } catch (error) {
    console.warn("Something wrong happened when connecting to mongodb");
  }
}

module.exports = connectToDB;

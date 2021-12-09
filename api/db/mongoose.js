const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    err && console.log("DB connection error: ", err);
    console.log("DB connected succesfully !");
  }
);

module.exports = { mongoose };

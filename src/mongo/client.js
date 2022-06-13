require('dotenv').config()
const mongoose = require("mongoose");

const user = process.env.USER;
const passdb = process.env.PASSWORDDB;
const dbname = process.env.DBNAME;

const uri = `mongodb+srv://${user}:${passdb}@cluster0.jx6nvuz.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = () => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => console.log(err));
};

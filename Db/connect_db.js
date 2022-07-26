const mongoose = require("mongoose");
const databaseurl =
  "mongodb+srv://puneet:puneet@cluster0.q5miz.mongodb.net/puneet?retryWrites=true&w=majority";
const connectdb = () => {
  return mongoose
    .connect(databaseurl)
    .then(() => {
      console.log("connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  connectdb,
};

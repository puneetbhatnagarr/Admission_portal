const mongoose = require("mongoose");
const databaseurl =
  'mongodb+srv://take:take@cluster0.ukb3uie.mongodb.net/take_addmission?retryWrites=true&w=majority';
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

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    mail: { type: String },
    phone: { type: Number },
    address: { type: String },
    gender: { type: String },
    college: { type: String },
    course: { type: String },
    user_id: { type: String },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

var studentModel = mongoose.model("mynewstudent", userSchema);
module.exports = studentModel;

const studentModel = require("../models/studentuser.js");
const userModel = require("../models/user.js");
class frontcontroller {
  static home = async (req, res) => {
    const data = req.user;
    try {
      const { _id, username, email } = req.user;
      var register = await studentModel.findOne({
        course: "B.TECH",
        user_id: _id,
      });

      var register1 = await studentModel.findOne({
        course: "M.TECH",
        user_id: _id,
      });

      var register2 = await studentModel.findOne({
        course: "MBA",
        user_id: _id,
      });

      var register3 = await studentModel.findOne({
        course: "PHD",
        user_id: _id,
      });

      const result = await userModel.findOne();

      res.render("home", {
        data1: data,
        register: register,
        register1: register1,
        register2: register2,
        register3: register3,
      });
    } catch (error) {
      //console.log(error);
    }
  };

  static about = async (req, res) => {
    res.render("about");
  };
  static contact = async (req, res) => {
    res.render("contact");
  };

  static teacher = async (req, res) => {
    res.render("teacher");
  };
}

module.exports = frontcontroller;

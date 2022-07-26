const studentModel = require("../models/studentuser.js");
class AdminCollege {
  static dashboard = async (req, res) => {
    try {
      const doc = await studentModel.find();
      res.render("admin_college/dashboard", { data1: doc });
    } catch (error) {
      console.log(error);
    }
  };

  static adminedit = async (req, res) => {
    const doc = await studentModel.findById(req.params.id);

    res.render("admin_college/edit", { data1: doc });
  };

  static adminupdate = async (req, res) => {
    const doc = await studentModel.findByIdAndUpdate(req.params.id, {
      name: req.body.na,
      mail: req.body.em,
      phone: req.body.ph,
      address: req.body.a,
      college: req.body.coll,
      course: req.body.cour,
    });
    await doc.save();
    res.redirect("/admin_college/dashboard");
  };
  static admindelete = async (req, res) => {
    // console.log(req.params.id)
    // console.log(req.body)
    try {
      const doc = await studentModel.findByIdAndDelete(req.params.id);
      res.redirect("/admin_college/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = AdminCollege;

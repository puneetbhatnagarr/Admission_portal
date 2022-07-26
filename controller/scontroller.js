const studentModel = require("../models/studentuser.js");

class scontroller {
  static studentDoc = async (req, res) => {
    res.render("/home");
  };

  static studentinsert = async (req, res) => {
    // console.log(req.body)
    try {
      const { n, mail, p, a, g, clg, course, user_id } = req.body;

      const doc = new studentModel({
        name: n,
        mail: mail,
        phone: p,
        address: a,
        gender: g,
        college: clg,
        course: course,
        user_id: user_id,
      });
      const studentresult = await doc.save();
      res.redirect("/home");
    } catch (error) {
      console.log(error);
    }
  };

  static studentdisplay = async (req, res) => {
    try {
      const { _id } = req.user;
      const rec = await studentModel.find({ user_id: _id });
      console.log(rec);
      res.render("user/userdisplay", { records: rec });
    } catch (error) {
      console.log(error);
    }
  };

  static studentedit = async (req, res) => {
    const doc = await studentModel.findById(req.params.id);

    res.render("user/edit", { data1: doc });
  };

  static studentupdate = async (req, res) => {
    const doc = await studentModel.findByIdAndUpdate(req.params.id, {
      name: req.body.na,
      mail: req.body.em,
      phone: req.body.ph,
      address: req.body.a,
      college: req.body.coll,
      course: req.body.cour,
    });
    await doc.save();
    res.redirect("/user/userdisplay");
  };

  static btech = async (req, res) => {
    try {
      const data = req.user;
      // console.log(data)

      const result = await studentModel.findOne();
      // console.log(result)
      res.render("user/btech", { data1: data });
    } catch (error) {
      console.log(error);
    }
  };

  static mtech = async (req, res) => {
    try {
      const data = req.user;
      // console.log(data)
      // const {_id,username} = req.user;
      const result = await studentModel.findOne();
      // console.log(result)
      res.render("user/mtech", { data1: data });
    } catch (error) {
      console.log(error);
    }
  };

  static mba = async (req, res) => {
    try {
      const data = req.user;
      // console.log(data)
      // const {_id,username} = req.user;
      const result = await studentModel.findOne();
      // console.log(result)
      res.render("user/mba", { data1: data });
    } catch (error) {
      console.log(error);
    }
  };
  static phd = async (req, res) => {
    try {
      const data = req.user;
      // console.log(data)
      // const {_id,username} = req.user;
      const result = await studentModel.findOne();
      // console.log(result)
      res.render("user/phd", { data1: data });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = scontroller;

const BlogimageModel = require("../models/blogimage.js");

class blogcontroller {
  static createblog = async (req, res) => {
    res.render("blog/create");
  };
  static bloginsert = async (req, res) => {
    //    console.log(req.body)
    try {
      const data = new BlogimageModel({
        title: req.body.title,
        discription: req.body.discription,
        image: req.file.filename,
      });

      const result = await data.save();
      res.redirect("/blog/create");
    } catch (error) {
      console.log(error);
    }
  };
  static displayblog = async (req, res) => {
    try {
      const result = await BlogimageModel.find();
      res.render("blog/display", { data: result });
    } catch (error) {
      console.log(error);
    }
  };

  static blogedit = async (req, res) => {
    const result = await BlogimageModel.findById(req.params.id);

    res.render("blog/edit", { data: result });
  };

  static blogupdate = async (req, res) => {
    try {
      if (req.file) {
        var imageFile = req.file.filename;
      }

      const result = await BlogimageModel.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        discription: req.body.discription,
        image: imageFile,
      });
      await result.save();
      res.redirect("/blog/display");
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = blogcontroller;

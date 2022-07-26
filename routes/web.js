const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const blogcontroller = require("../controller/Imagecontroller");
const usercontroller = require("../controller/Usercontroller");
const frontcontroller = require("../controller/front_controller");
const scontroller = require("../controller/scontroller");
const AdminCollege = require("../controller/AdminCollege");

// router create
router.get("/home", auth, frontcontroller.home);
router.get("/about", frontcontroller.about);
router.get("/contact", frontcontroller.contact);
router.get("/teacher", frontcontroller.teacher);

// admin_college

router.get("/admin_college/dashboard", AdminCollege.dashboard);
router.get("/admin_college/edit/:id", AdminCollege.adminedit);
router.post("/admin_college/update/:id", AdminCollege.adminupdate);
router.get("/admin_college/delete/:id", AdminCollege.admindelete);

// student controller
router.post("/info1", scontroller.studentinsert);
router.get("/user/userdisplay", auth, scontroller.studentdisplay);
router.get("/user/edit/:id", auth, scontroller.studentedit);
router.post("/user/update/:id", auth, scontroller.studentupdate);
router.get("/user/btech", auth, scontroller.btech);
router.get("/user/mtech", auth, scontroller.mtech);
router.get("/user/mba", auth, scontroller.mba);
router.get("/user/phd", auth, scontroller.phd);

// image controller
router.get("/blog/create", blogcontroller.createblog);
router.get("/blog/display", blogcontroller.displayblog);
router.post("/blog/insert", blogcontroller.bloginsert);
router.get("/blog/display", blogcontroller.displayblog);
router.get("/blog/edit/:id", blogcontroller.blogedit);
router.post("/blog/update/:id", blogcontroller.blogupdate);

//  user CONTROLLER
router.get("/user/signup", usercontroller.signup);
router.post("/user/insert", usercontroller.userinsert);
router.get("/", usercontroller.userlogin);
router.post("/user/adminlogin", usercontroller.adminlogin);
router.get("/logout", auth, usercontroller.logout);

module.exports = router;

const express = require("express");
const app = express();
// const port = 3000
var bodyParser = require("body-parser");
const { connectdb } = require("./Db/connect_db.js");
const upload = require("./middleware/image-middleware.js");
const cookieParser = require("cookie-parser");
var session = require("express-session"); // message k liye
var flash = require("connect-flash"); // message k liye
var session = require("cookie-session");
const web = require("./routes/web.js");
app.use(
  session({
    secret: "secret",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// const {underconstruction} = require('./middleware/underconstruction.js');
require("./models/studentuser.js");
// create and save document

// import router

// ejs setup
app.set("view engine", "ejs");

// static files
app.use(express.static("public"));

// middleware use

// app.use(underconstruction);
app.use("/blog/insert", upload);
app.use("/blog/update", upload);

// connect database

connectdb();

// load router
app.use("/", web);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

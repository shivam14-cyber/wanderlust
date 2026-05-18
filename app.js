if(process.env.NODE_ENV !="production"){
  require('dotenv').config();
}

const maptiler = require("@maptiler/client");
maptiler.config.apiKey = process.env.MAPTOKEN;

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const Listing = require("./model/listing.js");
const Review = require("./model/review.js");
const User = require("./model/user.js");

const wrapAsync = require("./utils/Wrapasync.js");
const ExpressError = require("./utils/ExpressError.js");
const { ListingSchema } = require("./schema.js");

const listingRouter = require("./routes/listingrouter.js");
const reviewRouter = require("./routes/reviewrouter.js");
const userRouter = require("./routes/user.js");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});


async function main() {
  await mongoose.connect(process.env.MONGOOSE_URL);
}

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

  
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);


app.get("/artical/privacy",(req,res)=>{
  res.render("privacy/privacy.ejs");
});

app.get("/artical/terms",(req,res)=>{
  res.render("privacy/termas.ejs");
});

app.get("/artical/help",(req,res)=>{
 res.render("artical/HelpCenter.ejs");
});
app.get("/artical/gethelp",(req,res)=>{
 res.render("artical/Gethelp.ejs");
})
app.get("/artical/aircover",(req,res)=>{
 res.render("artical/Aircover.ejs");
})

app.get("/artical/Anti",(req,res)=>{
 res.render("artical/Anti.ejs");
})

app.get("/artical/disbility",(req,res)=>{
 res.render("artical/disbility.ejs");
})
app.get("/artical/cancle",(req,res)=>{
 res.render("artical/Cancle.ejs");
})

app.get("/artical/repoter",(req,res)=>{
 res.render("artical/Repoter.ejs");
})





app.use((req, res) => {

  req.flash("error", "Page not found");

  res.redirect("/listings");

});

app.use((err, req, res, next) => {

  let {
    statusCode = 500,
    message = "Something went wrong"
  } = err;

  res.status(statusCode).render("error.ejs", {
    message,
    statusCode
  });

});


app.listen(8080, () => {

  console.log("Server running on port 8080");

});
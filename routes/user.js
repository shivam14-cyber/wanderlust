const express = require("express");
const router = express.Router();
const User=require("../model/user");
const Wrapasync = require("../utils/Wrapasync");
const passport = require("passport");
const { redirect } = require("react-router-dom");
const { saveRedirectUrl } = require("../middleware");
const userController=require("../controllers/user");

router
 .route("/signup")
 .get(userController.singnuprender)
 .post( Wrapasync(userController.signupRouter));

router
 .route("/login")
 .get(userController.loginRender)
 .post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.loginpostrouter
);



router.get("/logout",(req,res)=>{
  req.logout((err)=>{
    if(err){
      next(err);
    }
    req.flash("success","you are logged out");
    res.redirect("/listings");
  })
})

module.exports=router;
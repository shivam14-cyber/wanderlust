const User=require("../model/user");
module.exports.singnuprender=(req,res)=>{
  res.render("users/signup.ejs")
}

module.exports.signupRouter=async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    let newUser = new User({
      email,
      username
    });
    let registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

//login
module.exports.loginRender=(req,res)=>{
  res.render("users/login.ejs")
};

module.exports.loginpostrouter=(req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  };
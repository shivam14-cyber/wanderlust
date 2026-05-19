const express = require("express");
const router = express.Router();


router.get("/privacy", (req, res) => {
  res.render("privacy/privacy.ejs");
});


router.get("/terms", (req, res) => {
  res.render("privacy/termas.ejs");
});

router.get("/help", (req, res) => {
  res.render("artical/HelpCenter.ejs");
});

router.get("/gethelp", (req, res) => {
  res.render("artical/Gethelp.ejs");
});


router.get("/aircover", (req, res) => {
  res.render("artical/Aircover.ejs");
});

router.get("/Anti",(req,res)=>{
 res.render("artical/Anti.ejs");
})

router.get("/disbility",(req,res)=>{
 res.render("artical/disbility.ejs");
})

router.get("cancle",(req,res)=>{
 res.render("artical/Cancle.ejs");
});

router.get("/repoter",(req,res)=>{
 res.render("artical/Repoter.ejs");
})

router.get("/hosting",(req,res)=>{
 res.render("privacy/hosting.ejs");
})

router.get("/alltopic",(req,res)=>{
 res.render("privacy/alltopic.ejs");
})


module.exports = router;

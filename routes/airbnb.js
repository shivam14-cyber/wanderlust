const express = require("express");
const router = express.Router();

router.get("/airbnb", (req, res) => {
  res.render("airbnb/airbnb.ejs");
});
router.get("/carrers", (req, res) => {
  res.render("airbnb/carrers.ejs");
});

router.get("/newsroom", (req, res) => {
  res.render("airbnb/newsroom.ejs");
});

router.get("/summer", (req, res) => {
  res.render("airbnb/summer.ejs");
});


module.exports = router;
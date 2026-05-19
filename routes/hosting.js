const express = require("express");
const router = express.Router();

router.get("/community", (req, res) => {
  res.render("hosting/community.ejs");
});

router.get("/experience", (req, res) => {
  res.render("hosting/experience.ejs");
});

router.get("/find", (req, res) => {
  res.render("hosting/find.ejs");
});

router.get("/home", (req, res) => {
  res.render("hosting/home.ejs");
});

router.get("/hosting", (req, res) => {
  res.render("hosting/hosting.ejs");
});

router.get("/hosts", (req, res) => {
  res.render("hosting/hosts.ejs");
});

router.get("/join", (req, res) => {
  res.render("hosting/join.ejs");
});

router.get("/refer", (req, res) => {
  res.render("hosting/refer.ejs");
});

router.get("/resources", (req, res) => {
  res.render("hosting/resources.ejs");
});

router.get("/service", (req, res) => {
  res.render("hosting/service.ejs");
});

module.exports = router;
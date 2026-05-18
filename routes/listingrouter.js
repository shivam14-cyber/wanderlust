const express = require("express");
const router = express.Router();
const Listing = require("../model/listing.js");
const wrapAsync = require("../utils/Wrapasync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingsController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js")
const upload = multer({ storage });


router
 .route("/")
 .get(wrapAsync(listingsController.index))
 .post( isLoggedIn, upload.single("listing[image]"),validateListing, wrapAsync(listingsController.postRoute));

 
 //new router
 router.get("/new", isLoggedIn, listingsController.renderNewForm);


router
 .route("/:id")
 .get( wrapAsync(listingsController.showRoute))
 .patch(
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingsController.updateRouter)
 )
 .delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingsController.deleteRouter)
);


//Edit router
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingsController.editRouter));

module.exports = router;
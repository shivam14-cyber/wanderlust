const express = require("express");
const router = express.Router({mergeParams:true});
const Listing = require("../model/listing.js");
const Review = require("../model/review.js");
const wrapAsync = require("../utils/Wrapasync.js");
const { ListingSchema, reviewSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const { validatereview, isLoggedIn,isReviewAuthor } = require("../middleware.js");

const reviewController=require("../controllers/review.js");

router.post("/",isLoggedIn,validatereview,wrapAsync(reviewController.reviewPostRouter));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.deletereview)
);


module.exports=router;

const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview,isLoggedIn,isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");



// Post Review Route
router.post("/",isLoggedIn,validateReview, wrapAsync(reviewController.postReviews));

// Delete Review Route
router.post("/:reviewId",isLoggedIn,isAuthor, wrapAsync(reviewController.deleteReviews));

module.exports = router;
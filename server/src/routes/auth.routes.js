const express = require("express");
const { body } = require("express-validator");
const {
  signup,
  login,
  createPost,
  getPosts,
  allPosts,
  postDetails,
} = require("../controllers/auth.controller");
const { editProfile } = require("../models/editProfile.model");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

router.post(
  "/signup",
  [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("fullname").not().isEmpty().withMessage("Fullname is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("usertype").not().isEmpty().withMessage("Usertype is required"),
    body("password").not().isEmpty().withMessage("password is required"),
    body("number")
      .isLength({ min: 10, max: 10 })
      .withMessage("Valid mobile number is required")
      .matches(/^[0-9]+$/)
      .withMessage("Mobile number must contain only digits"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ],
  validateRequest,
  signup
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").exists().withMessage("Password is required"),
  ],
  validateRequest,
  login
);

router.post(
  "/createPost",
  [
    body("author").not().isEmpty(),
    body("picture").not().isEmpty(),
    body("commodityName").not().isEmpty(),
    body("commodityPrice").not().isEmpty(),
    body("commodityDescription").not().isEmpty(),
    body("date").not().isEmpty(),
    body("time").not().isEmpty(),
  ],
  validateRequest,
  createPost
);

router.post("/getPosts", getPosts);
router.post("/postDetails", postDetails);

router.get("/allPosts", allPosts);

module.exports = router;

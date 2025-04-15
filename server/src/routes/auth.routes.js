const express = require("express");
const { body } = require("express-validator");
const { signup, login } = require("../controllers/auth.controller");
// const { editProfile } = require("../models/editProfile.model");
const validateRequest = require("../middleware/validateRequest");

const router = express.Router();

router.post(
  "/signup",
  [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("fullname").not().isEmpty().withMessage("Fullname is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("farmerId").not().isEmpty().withMessage("Farmer ID is required"),
    body("mobile")
      .isLength({ min: 10 })
      .withMessage("Valid mobile number is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
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

// router.get("/api/:id/editProfile", (req, res) => {
//   const data = req.body.data;
//   editProfile
//     .create(data)
//     .then((result) => res.json(result))
//     .catch((err) => res.json(err));
// });

module.exports = router;

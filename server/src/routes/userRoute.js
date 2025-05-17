const express = require("express");
const router = express.Router();
const {
  registerUser,
  getMe,
  loginUser,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/dashboard/u", protect, getMe);

module.exports = router;

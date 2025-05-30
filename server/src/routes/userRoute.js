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
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ message: "Query is required" });

    const posts = await Post.find({
      commodityName: { $regex: query, $options: 'i' }
    });

    res.json(posts);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;

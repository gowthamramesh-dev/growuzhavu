const Farmer = require("../models/farmer.model");
const createPostsModel = require("../models/productCard.model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const signup = asyncHandler(async (req, res) => {
  const { username, fullname, email, usertype, number, password } = req.body;

  try {
    const existing = await Farmer.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    const farmer = new Farmer({
      username,
      fullname,
      email,
      usertype,
      number,
      password,
    });

    await farmer.save();

    // Check if farmer was created successfully
    if (farmer) {
      res.status(201).json({
        _id: farmer._id,
        username: farmer.username,
        email: farmer.email,
        picture: farmer.picture,
        token: generateToken(farmer._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create the user");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
});

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const farmer = await Farmer.findOne({ email });
    if (!farmer) return res.status(400).json({ msg: "Invalid credentials" });

    if (farmer && (await farmer.matchPassword(password))) {
      res.json({
        _id: farmer._id,
        username: farmer.username,
        email: farmer.email,
        picture: farmer.picture,
        token: generateToken(farmer._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Credentials");
    }
  } catch (err) {
    console.error("Login Error:", err.message); // helpful log
    res.status(500).json({ msg: "Server Error", error: err.message });
  }
};

const createPost = async (req, res) => {
  const {
    author,
    picture,
    commodityName,
    commodityPrice,
    commodityDescription,
    date,
    time,
  } = req.body;

  try {
    const existing = await createPostsModel.findOne({
      author,
      commodityName,
      date,
    });
    if (existing)
      return res.status(400).json({ msg: "Post already exists for today" });

    const createpost = await createPostsModel.create({
      author,
      picture,
      commodityName,
      commodityPrice,
      commodityDescription,
      date,
      time,
    });

    res.status(201).json({
      _id: createpost._id,
      author: createpost.author,
      commodityName: createpost.commodityName,
    });
  } catch (err) {
    console.error("Error in creating post:", err); // This will help you debug
    res.status(500).json({ msg: "Server Error" });
  }
};

const getPosts = async (req, res) => {
  const { id } = req.body;

  try {
    const posts = await createPostsModel
      .find({ author: id })
      .sort({ date: -1 });
    if (!posts || posts.length === 0)
      return res.status(400).json({ msg: "No posts found" });

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

const postDetails = async (req, res) => {
  const { id } = req.body;

  try {
    const posts = await createPostsModel.find({ _id: id });
    if (!posts || posts.length === 0)
      return res.status(400).json({ msg: "No posts found" });

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
};

const allPosts = async (req, res) => {
  try {
    const all = await createPostsModel.find().sort({ createdAt: -1 });

    if (!all || all.length === 0)
      return res.status(400).json({ msg: "No posts found" });

    res.json(all);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { signup, login, createPost, getPosts, allPosts, postDetails };

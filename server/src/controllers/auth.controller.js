const Farmer = require("../models/farmer.model");
const createPostsModel = require("../models/productCard.model");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const signup = async (req, res) => {
  const { username, fullname, email, farmerId, mobile, password } = req.body;

  try {
    const existing = await Farmer.findOne({ email });
    if (existing) return res.status(400).json({ msg: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const farmer = await Farmer.create({
      username,
      fullname,
      email,
      farmerId,
      mobile,
      password: hashedPassword,
    });

    res.status(201).json({
      _id: farmer._id,
      username: farmer.username,
      email: farmer.email,
      token: generateToken(farmer._id.toString()),
    });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const farmer = await Farmer.findOne({ email });
    if (!farmer) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.json({
      _id: farmer._id,
      username: farmer.username,
      email: farmer.email,
      token: generateToken(farmer._id.toString()),
    });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
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

module.exports = { signup, login, createPost };

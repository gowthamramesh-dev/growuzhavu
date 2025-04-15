const Farmer = require('../models/farmer.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

const signup = async (req, res) => {
  const { username, fullname, email, farmerId, mobile, password } = req.body;

  try {
    const existing = await Farmer.findOne({ email });
    if (existing) return res.status(400).json({ msg: 'Email already exists' });

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
    res.status(500).json({ msg: 'Server Error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const farmer = await Farmer.findOne({ email });
    if (!farmer) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    res.json({
      _id: farmer._id,
      username: farmer.username,
      email: farmer.email,
      token: generateToken(farmer._id.toString()),
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

module.exports = { signup, login };
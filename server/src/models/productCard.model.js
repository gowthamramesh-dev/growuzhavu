const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    commodityName: {
      type: String,
      required: true,
    },
    commodityPrice: {
      type: String,
      required: true,
    },
    commodityDescription: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { collection: "Post" }
);

module.exports = mongoose.model("productCard", productSchema);

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
    Date: {
      type: Date.now,
      required: true,
    },
    Author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("productCard", productSchema);

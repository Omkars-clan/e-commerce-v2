const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  images: [{ type: String }],
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String },
  price: { type: Number, required: true },
  salePrice: { type: Number },
  totalStock: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  stock: Number,
  images: [String],  
  sizes: [String],
  colors: [String],
  relatedProducts: [String]
});

export default mongoose.model("Product", productSchema);

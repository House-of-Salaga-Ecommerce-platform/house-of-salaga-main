import Product from "../models/product.model.js";
import Review from "../models/review.model.js";


export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const reviews = await Review.find({ productId: req.params.id });

    res.json({ success: true, product, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching product" });
  }

};


export const addReview = async (req, res) => {
  try {
    const { productId, reviewer, rating, reviewText } = req.body;

    const newReview = new Review({ productId, reviewer, rating, reviewText });
    await newReview.save();

    res.json({ success: true, message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding review" });
  }
};

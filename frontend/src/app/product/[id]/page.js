"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, ChevronRight, Heart, ShoppingCart } from "lucide-react";

export default function ProductReviewsPage({ params }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewComment, setReviewComment] = useState("");

  // Sample product data - params භාවිතය සුරක්ෂිත කිරීම
  const product = {
    id: params?.id || "1",
    name: "Stylish Leather Bag",
    averageRating: 4.0,
    totalRatings: 423,
  };

  // Sample reviews
  const reviews = [
    {
      id: 1,
      user: "Yuwantha Ravihara",
      rating: 4,
      comment:
        "Stylish Leather Bag Premium Black 2pc Elegant Handbag Set. Good quality and design.",
      date: "2025-11-12",
      verified: true,
    },
    // ... other reviews
  ];

  const renderStars = (rating, size = "w-5 h-5") => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`${size} ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-gray-300 text-gray-300"
        }`}
      />
    ));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    console.log({ rating, reviewTitle, reviewComment });
    alert("Review submitted successfully!");
    setRating(0);
    setReviewTitle("");
    setReviewComment("");
  };

  const StarRatingInput = () => {
    return (
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }, (_, index) => {
          const star = index + 1;
          return (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoverRating || rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-300 text-gray-300"
                }`}
              />
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              House of Salaga
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/wishlist"
                className="text-gray-600 hover:text-gray-900"
              >
                Wishlist
              </Link>
              <Link href="/cart" className="text-gray-600 hover:text-gray-900">
                Cart
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-gray-700">
            Bags
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/product/${product.id}`} className="hover:text-gray-700">
            {product.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Reviews</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-4">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {renderStars(Math.round(product.averageRating))}
                </div>
                <span className="font-semibold">{product.averageRating}</span>
                <span className="text-gray-500">
                  ({product.totalRatings} ratings)
                </span>
              </div>
              <Link
                href={`/product/${product.id}`}
                className="w-full bg-blue-600 text-white py-3 rounded-md text-center block hover:bg-blue-700"
              >
                Back to Product
              </Link>
            </div>
          </div>

          {/* Reviews Content */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-6">Reviews</h1>

            {/* Reviews List */}
            <div className="space-y-6 mb-8">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{review.user}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-gray-500 text-sm">
                          {review.date}
                        </span>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* Write Review Form */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Write Review</h2>
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <StarRatingInput />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Review Title
                  </label>
                  <input
                    type="text"
                    value={reviewTitle}
                    onChange={(e) => setReviewTitle(e.target.value)}
                    placeholder="Summarize your experience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Review
                  </label>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Write your comment here"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

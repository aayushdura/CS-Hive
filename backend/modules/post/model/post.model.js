const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: [],
    postedBy: { type: String, required: true },
    likes: [],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };

const { Post } = require("../model/post.model");

exports.createPost = (req, res, next) => {
  const { question, postedBy } = req.body;
  Post.create({
    question,
    postedBy,
  }).then((newPost) => {
    //saving the post
    newPost.save((err, done) => {
      if (err)
        return res.json({
          isSuccess: false,
          msg: "server error",
        });

      return res.status(201).json({
        isSuccess: true,
        msg: "Post Created !",
        post: done,
      });
    });
  });
};

exports.findAll = async (req, res, next) => {
  Post.find({}).then((data) => {
    return res.json({
      isSuccess: true,
      msg: "Fetched all the data",
      data: data.reverse(),
    });
  });
};

exports.addAnswer = (req, res, next) => {
  const { postedBy, answer, postId } = req.body;
  const newAnswer = {
    postedBy,
    answer,
    postedAt: Date.now(),
  };
  Post.findOneAndUpdate(
    { _id: postId },
    { $push: { answers: newAnswer } }
  ).exec((error, data) => {
    if (err) return res.json({ isSuccess: false, msg: "Server Error" });
    return res.status(240).json({
      isSuccess: true,
      msg: "Answer added to post",
      data: data,
    });
  });
};

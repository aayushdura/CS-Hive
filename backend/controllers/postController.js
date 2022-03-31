const Post = require("../models/Post")

exports.getAllPost = async (req, res) => {
    const posts = await Post.find()
    res.json(posts);
}

exports.createPost = async (req, res) => {
    const { question, user } = req.body;
    // req.body.user = req.user._id;
    if (!question) {
        res.status(400);
        throw new Error("Please Fill all the fields")
    }
    else {
        const post = new Post({ question })
        const createdpost = await post.save();
        res.status(201).json(createdpost)
    }
}
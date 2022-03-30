const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        question: {
            type: String,
            require: false,

        },
        answer: {
            type: String,
            require: false,
        },
        category: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "User"
        }

    },
    {
        timestamps: true
    })
const Post = mongoose.model("Post", postSchema)

module.exports = Post
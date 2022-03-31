const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        question: {
            type: String,
            require: true,

        },
        answer: {
            type: String,
            require: false,
        },
        category: {
            type: String,
            required: false,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            require: false,
            ref: "User"
        }

    },
    {
        timestamps: true
    })
const Post = mongoose.model("Post", postSchema)

module.exports = Post
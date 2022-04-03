const mongoose = require('mongoose');

const answerSchema = mongoose.Schema(
    {


        answer: {
            type: String,
            require: false,
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
const Answer = mongoose.model("Answer", answerSchema)

module.exports = Answer
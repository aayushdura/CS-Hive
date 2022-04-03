const Answer = require("../models/answer")
const Post = require("../models/Post")


exports.createAnswer = (req, res) => {
    const { question, answer, user } = req.body;
    Post.findById(question).then((post) => {
        if (post) {

            Answer.create({ answer, user }).then((response) => {

                post.updateOne({
                    $push: {

                        answer: response._id
                    }

                }).then(() => {
                    res.status(201).json(response)
                }).catch((err) => {
                    res.status(400).json({ message: err.message })

                })
            }).catch((err) => {
                res.status(400).json({ message: err.message })

            })
        }
        else {
            res.status(400).json({ message: `failed to find post details` })
        }
    })

}


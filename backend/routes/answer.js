const router = require("express").Router()
const { createAnswer, getAllAnswer } = require("../controllers/answerController")
const { protect } = require("../middlewares/authMiddleware")

router.route("/create").post(createAnswer);

// router.route("/:idanswer").get().put().delete();
module.exports = router

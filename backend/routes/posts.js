const router = require("express").Router()
const { getAllPost, createPost } = require("../controllers/postController")
const { protect } = require("../middlewares/authMiddleware")

router.route("/").get(getAllPost);
router.route("/create").post(createPost);

// router.route("/:idanswer").get().put().delete();
module.exports = router

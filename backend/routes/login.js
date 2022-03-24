const router = require("express").Router();
const { loginUser } = require("../controllers/loginController");

router.route("/").post(loginUser);
module.exports = router;

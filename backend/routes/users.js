const router = require("express").Router(); //importing router method from express
const { registerUser } = require("../controllers/userController");
router.route("/").post(registerUser); //while on the route send from index to this method calling registerUser promise

module.exports = router;

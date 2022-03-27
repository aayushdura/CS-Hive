const router = require("express").Router(); //importing router method from express
const { registerUser, apiGetAllUsers, loginUser } = require("../controllers/userController");

router.route("/").post(registerUser); //while on the route send from index to this method calling registerUser promise

router.route("/getall").get(apiGetAllUsers);
router.route("/login").post(loginUser);

module.exports = router

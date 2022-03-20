var express = require("express");
var router = express.Router();
const methods = require("./method");
const auth = require("../../middlewares/auth.middleware");

//find all reports
router.post("/create", auth, methods.createPost);

router.post("/findall", auth, methods.findAll);

router.put("/addanswer", auth, methods.addAnswer);

module.exports = router;

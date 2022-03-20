var express = require("express");
var router = express.Router();
const methods = require("./methods");

//find all reports
router.post("/register", methods.register);
router.post("/login", methods.login);

module.exports = router;

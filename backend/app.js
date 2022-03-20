const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//database connection
require("./database/dbConfig");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/auth", require("./modules/users/index"));
app.use("/api/post", require("./modules/post/index"));

module.exports = app;

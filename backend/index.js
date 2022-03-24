const express = require("express");
const app = express();
const dotenv = require("dotenv"); //importing dotenv for using .env
// const helmet = require("helmet");
// const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/users");
const login = require("./routes/login");
const connectDb = require("./config/db");
dotenv.config();
connectDb(); //invoking the method which connects to database

//middleware

app.use(express.json()); //for making app to accept and handle JSON format
// app.use(helmet());
// app.use(morgan("common"));
app.use(cors());

//setting route for registeration of User as /user
app.use("/api/users", userRoute); //while on route "/api/users" invoke this method useRoute()
app.use("/api/login", login);

app.listen(5000, () => {
  console.log("Backend Server is Runnig on port 5000");
});

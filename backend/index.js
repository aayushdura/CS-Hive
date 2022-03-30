const express = require("express");
const app = express();
const dotenv = require("dotenv"); //importing dotenv for using .env
// const jwt = require("jsonwebtoken");
// const helmet = require("helmet");
// const morgan = require("morgan");
const cors = require("cors");
const userRoute = require("./routes/user")
const postRoute = require("./routes/posts")
const connectDb = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();
connectDb(); //invoking the method which connects to database

//middleware

app.use(express.json()); //for making app to accept and handle JSON format
// app.use(helmet());
// app.use(morgan("common"));
app.use(cors());



app.use("/api/users", userRoute); //while on route "/api/users" invoke this method useRoute()
app.use("/api/posts", postRoute)


app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Backend Server is Runnig on port 5000");
});

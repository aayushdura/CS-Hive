const jwt = require("jsonwebtoken");
const User = require("../models/User")

exports.protect = async (req, res, next) => {
    let token = req.params.token;
    console.log(req?.headers?.authorization?.split(" ")[1])

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            req.user = await User.findById(decode.id).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token faileld");
        }
    }
    // if (!token) {
    //     res.status(401);
    //     throw new Error("No Token")
    // }
}
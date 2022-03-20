const app = require("../app");


app.use('/api/auth',usersRouter);
app.use('/api/post',postRouter);



module.exports = app;



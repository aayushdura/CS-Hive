const mongoose = require('mongoose');

//database connection
const URI = "mongodb+srv://discussionforum:hellofromtheotherside@cluster0.6ji4z.mongodb.net/forum_database?retryWrites=true&w=majority";


mongoose.connect(
  URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, connected) {
    if (error) {
      console.log('Failed to connect with Message :', error);
    } else {
      console.log('Database Connection Success');
    }
  }
);
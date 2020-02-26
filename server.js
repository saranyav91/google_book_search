 
const express = require("express");
const app = express();
const routes = require("./routes")
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
const mongoose = require("mongoose");
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://username1:password1@ds217548.mlab.com:17548/heroku_tnd48jhd");


 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

 
app.use(routes);

const PORT = process.env.PORT || 3001;
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


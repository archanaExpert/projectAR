const express = require("express");
const mongoose = require("mongoose");
const authRoute=require("./src/routes/authRoute");
const candidateRoute=require("./src/routes/candidateRoute")
  require("dotenv").config();

const app = express();


const port=process.env.port
app.use(express.json());


mongoose.connect(process.env.mongo_URL)
  .then(() => {
    console.log("MongoDb connected Successfully");
  })
  .catch((error) => {
    console.log("Connection is Failed:", error);
  });

//route
app.use("/auth",authRoute);
app.use("/candidate",candidateRoute);
app.listen(port, () => {
  console.log("Server is listen on Port:", port);
});

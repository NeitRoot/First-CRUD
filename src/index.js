const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 8000;

//Middlewares
app.use(express.json());
app.use("/api", userRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome!");
});

//Conection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conected!"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log("Listening on port", port));

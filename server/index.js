const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
//comment out below
app.get("/api", (req, res) => {
  res.send("server is now live");
});

const userRoute = require("./routes/user.router");
app.use("/api/user", userRoute);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
app.listen(port, () => {
  console.log(`User Recorder Server is now live @ localhost:${port}`);
});

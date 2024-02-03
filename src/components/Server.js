// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/interns");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const formDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  organization: String,
  phone: String,
  state: String,
  zip: String,
  comment: String,
});

const FormData = mongoose.model("FormData", formDataSchema);
app.post("/submitForm", (req, res) => {
  const { name, email, address, organization, phone, state, zip, comment } =
    req.body;
  const carr = new FormData({
    name,
    email,
    address,
    organization,
    phone,
    state,
    zip,
    comment,
  });
  carr
    .save()
    .then(res.send({ message: "ok hai sab" }))
    .catch(res.send({ message: "ok nhi hai" }));
});

// app.post("/submitForm", async (req, res) => {
//   try {
//     const formData = new FormData(req.body);
//     await formData.save();
//     res.status(201).json({ message: "Form data submitted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

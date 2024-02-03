const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dataModel = require("./models/details");
const app = express();
app.use(express.json());
// to handle form data
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
const port = 5000;

mongoose.connect("mongodb://localhost:27017/interns")
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err)
  });

app.post("/submitForm", (req, res) => {
  const { name, email, phone, Gender, address, college, education,DOB, skills, state, role, experience, comment} = req.body
  const datamodel = new dataModel({
    name,
    email,
    phone,
    Gender,
    address,
    college,
    education,
    DOB,
    skills,
    state,
    role,
    experience,
    comment
  })
  datamodel.save()
  .then(() => res.send({ message: "Form data submitted successfully" }))
  .catch(() => res.status(500).send({ message: "Internal server error" }));
});

// const PORT = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});

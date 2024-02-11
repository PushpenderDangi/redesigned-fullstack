const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
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

app.post("/submitForm", async (req, res) => {
  const { name, email, phone, gender, address, college, education, DOB, skills, state, role, experience } = req.body;

  try {
    const datamodel = new dataModel({
      name,
      email,
      phone,
      gender,
      address,
      college,
      education,
      DOB,
      skills,
      state,
      role,
      experience
    });

    await datamodel.save();

    // Send email after saving to the database
    await sendEmail({ name, email, role, experience, skills, education, phone }); // Pass the required email property

    res.status(200).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const sendEmail = (formData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    requireTLS: true,
    auth: { 
      user: "pushpender.x.dangi@fosteringlinux.com",
      pass: "Pushpender@123",
    },
  });

  const mailOptions = {
    from: {
          name:"Pushpender Dangi",
          address:"pushpender.x.dangi@fosteringlinux.com",
    },
    to: formData.email,
    subject: "Thank you for submitting the form",
    html: `<p>Hi ${formData.name},</p>
          <p>Thank you for applying at Keen and Able.
          <br/>
          We would like to inform you that we have received your application. Our hiring team is currently reviewing all applications. If you are among qualified candidates, you will receive a notification from our team. In any case, we will keep you posted on the status of your application.</p><br/>
          <br/>
          <p>Thank you, again, for taking the time to apply at Keen and Able.</p><br/>
          <br/>
          Yes, We have always been Open.
          <br/>
          <p><strong>Thanks and Regards</strong><br>Pushpender<br>9467866098</p>`
  };
  
  const hrMail = {
    from: {
      name:formData.name,
      address: formData.email
    },
    to: {
      name:"Pushpender Dangi",
      address:"pushpender.x.dangi@fosteringlinux.com"
    },
      subject: `New Response for the role of ${formData.role}`,
      html: `<p>${formData.name} has applied for the position of ${formData.role}. With ${formData.experience} years of relevant experience, they possess valuable skills in ${formData.skills} and hold qualifications in ${formData.education}.<br/> This candidate stands out – make sure to check out their application!</p>
            <p>Contact at ${formData.phone} for any further information.</p>`

    
  }
  
  return Promise.all([
    transporter.sendMail(mailOptions),
    transporter.sendMail(hrMail)
  ]);

};

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
});

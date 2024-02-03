import React, { useState } from "react";
import axios from "axios";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Gender: "",
    address: "",
    college: "",
    education: "",
    DOB: "",
    skills: "",
    state: "",
    role: "",
    experience: "",
    comment: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

// 
  const handleSubmit = () => {
    const { name, email, phone, Gender, address, college, education, DOB, skills, state,role, experience, comment} = formData
    if (name && email && phone && Gender && address && college && education && DOB && skills && state && role && experience && comment) {
      axios.post("http://localhost:5000/submitForm", formData)
       .then((res) => console.log(res));  
    } else {
      alert("Fill details")
    }
  };

  return (
    <>

      <form className=" row g-3 form img" enctype="multipart/form-data">
        <h1 className="text-center">Registration Form</h1>
        <div className="col-md-3">
          <label htmlFor="name" className="form-label required">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="email" className="form-label required">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}

          />

        </div>

        <div className="col-md-3 ">
          <label htmlFor="phone" className="form-label required">
            Phone No
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>


        <div className="col-md-3 ">
          <label htmlFor="inputPost" className="form-label required">
            Gender
          </label>
          <select
            id="inputPost"
            className="form-select"
            name="Gender"
            required
            value={formData.Gender}
            onChange={handleChange}
          >
            <option selected="">Choose...</option>
            <option selected>Male</option>
            <option selected>Female</option>
            <option selected>Other</option>
          </select>
        </div>

        <div className="col-9">
          <label htmlFor="inputAddress" className="form-label required">
          Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />

        </div>


        {/* <div className="col-9">
          <label htmlFor="inputAddress" className="form-label">
            Correspondence Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
            name="caddress"
            value={formData.caddress}
            onChange={handleChange}
          />

        </div> */}


        <div className="col-6 ">
          <label htmlFor="inputAddress2" className="form-label required">
            College/University
          </label>
          <input
            type="text"
            className="form-control"
            id="OrgIns"
            name="college"
            required
            value={formData.college}
            onChange={handleChange}
          />
           </div>

          <div className="col-md-4 ">
          <label htmlFor="inputPost" className="form-label required">
            Education
          </label>
          <select
            id="inputPost"
            className="form-select"
            name="education"
            required
            value={formData.education}
            onChange={handleChange}
          >
            <option selected="">Choose...</option>
            <option selected>B.tech</option>
            <option selected>M.tech</option>
            <option selected>BCA</option>
            <option selected>Law</option>
            <option selected>MBA</option>
            <option selected>BA</option>
            <option selected>MCA</option>
            <option selected>Others</option>
          </select>
        </div>

        <div className="col-md-3 ">
          <label htmlFor="phone" className="form-label required">
            DOB
          </label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="DOB"
            required
            value={formData.DOB}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-3 ">
          <label htmlFor="skills" className="form-label required">
            Skills
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="skills"
            required
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        
        
        <div className="col-md-3">
          <label htmlFor="inputState" className="form-label required">
            State
          </label>
          <select
            id="inputState"
            className="form-select"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
          >
            <option selected="">Choose...</option>
            <option selected>Andhra Pradesh (Amaravati)</option>
            <option selected>Arunachal Pradesh</option>
            <option selected>Assam</option>
            <option selected>Bihar</option>
            <option selected>Chattisgarh</option>
            <option selected>Goa</option>
            <option selected>Gujarat</option>
            <option selected>Haryana</option>
            <option selected>Himachal Pradesh</option>
            <option selected>Jharkhand</option>
            <option selected>Karnataka</option>
            <option selected>Kerala</option>
            <option selected>Madhya Pradesh</option>
            <option selected>Maharashtra</option>
            <option selected>Manipur</option>
            <option selected>Meghalaya</option>
            <option selected>Mizoram</option>
            <option selected>Nagaland</option>
            <option selected>Odisha</option>
            <option selected>Punjab</option>
            <option selected>Rajasthan</option>
            <option selected>Sikkim</option>
            <option selected>Tamil Nadu</option>
            <option selected>Telangana</option>
            <option selected>Tripura</option>
            <option selected>Uttarakhand</option>
            <option selected>Uttar Pradesh</option>
            <option selected>West Bengal</option>
          </select>
        </div>

        <div className="col-md-4 ">
          <label htmlFor="inputPost" className="form-label required">
            Job title
          </label>
          <select
            id="inputPost"
            className="form-select"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
          >
            <option selected="">Choose...</option>
            <option selected>Frontend</option>
            <option selected>Backend</option>
            <option selected>DevOps</option>
            <option selected>Accountant</option>
            <option selected>PHP Developer</option>
            <option selected>Java Developer</option>
            <option selected>Python Developer</option>
            <option selected>Project Manager</option>
            <option selected>Mentor</option>
            <option selected>Cloud</option>
            <option selected>Full-Stack Developer</option>
            <option selected>Linux</option>
            <option selected>Automation</option>
          </select>
        </div>

        <div className="col-md-4">
          <label htmlFor="inputPost" className="form-label required">
            Experience
          </label>
          <select
            id="inputPost"
            className="form-select"
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
          >
            <option selected="">Choose...</option>
            <option selected>Fresher</option>
            <option selected>0-1</option>
            <option selected>1</option>
            <option selected>2</option>
            <option selected>3</option>
            <option selected>5+</option>
            <option selected>8+</option>
            <option selected>10+</option>
          </select>
        </div>

          
        {/* <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            id="inputGroupFile"
            name="upload"
            value={formData.upload}
            onChange={handleChange}
          />
        </div> */}

        <div className="form-floating md-5 col-10">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="floatingTextarea">Any question or query?</label>
        </div>

        <div className="col-6">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>

    </>
  );
};

export default Career;

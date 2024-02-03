// import React from "react";
// import verified from "./images/Verified.mp4";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const collectData = async () => {
//     // Validate input fields
//     if (!email || !password) {
//       alert("Please enter both email and password.");
//       return;
//     }

//     // Send data to the server
//     try {
//       const response = await fetch("http://localhost:5000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         alert("User registered successfully!");
//         // Optionally, you can redirect the user or perform other actions
//       } else {
//         const data = await response.json();
//         alert(`Error: ${data.message}`);
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   // const getUsers = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:5000/users");

//   //     if (response.ok) {
//   //       const users = await response.json();
//   //       console.log("Users:", users);
//   //       // You can update state or perform other actions with the retrieved users
//   //     } else {
//   //       const data = await response.json();
//   //       console.error("Error:", data.message);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error.message);
//   //   }
//   // };

//   return (
//     <>
//       <Navbar></Navbar>

//       <div className="container login">
//         <div className="row">
//           <div className="left col-md-6">
//             <video width="550" height="479" autoPlay muted>
//               <source src={verified} type="video/mp4" />
//             </video>
//           </div>

//           <div className="right col-md-6">
//             <div className="row align-item-center">
//               <div className="header-text mb-4">
//                 <h1>Hello</h1>
//                 <p>We are Happy to have you back</p>
//               </div>

//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   className="form-control form-control-lg bg-light fs-6"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Email Address"
//                 ></input>
//               </div>

//               <div className="input-group mb-3">
//                 <input
//                   type="password"
//                   className="form-control form-control-lg bg-light fs-6"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Password"
//                 ></input>
//               </div>

//               <div className="input-group mb-5 d-flex justify-content-between">
//                 <div className="form-check">
//                   {/* <input
//                     type="checkbox"
//                     className="form-check-input"
//                     id="formCheck"
//                   /> */}
//                   {/* <label
//                     htmlFor="formCheck"
//                     className="form-check-label text-secondary"
//                   >
//                     <small>Remember me</small>
//                   </label> */}
//                 </div>

//                 <div className="forget">
//                   <small>{/* <a href="/">Forgot Password?</a> */}</small>
//                 </div>
//               </div>

//               <div className="input-group mb-3">
//                 <button
//                   onClick={collectData}
//                   className="btn btn-lg btn-primary w-100 fs-6"
//                 >
//                   Login
//                 </button>
//               </div>

//               <div className="row">
//                 <small>
//                   {/* Don't have an account? <a href="Signup">Sign Up</a>{" "} */}
//                 </small>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </>
//   );
// };

// export default Login;

// */

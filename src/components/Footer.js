import React from "react";
import facebook from "./images/fb.png";
import linkedin from "./images/Linkedin.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="address">
        <section className="footer-section">
          <span>
            <p>+91 120 421 7213</p>
            <a href="mailto: sales@keenable.in">sales@keenable.in</a>
            <p>B149, Ground Floor, Sector 63, Noida, India - 201301</p>
          
          </span>
          <div className="subfooter">
            <span>©2021 by Keen and Able Computers Pvt. Ltd.</span>

            <div className="social">
              <Link to="https://www.linkedin.com/company/keenable" target="_blank">
              <img className="linkedin" src={linkedin} alt="linkedin" /></Link>
              
              <Link to="https://www.facebook.com/Alwaysbeenopen/" target="_blank"><img src={facebook} alt="facebook" /></Link>
            </div>
            <span>
             
              <p>Designed By Pushpender</p>
            </span>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import keenable from "./images/keenable.png";
// import pattern from './images/pattern.jpg'

import LocationOnIcon from "@mui/icons-material/LocationOn";

const Navbar = () => {
  return (
    <>

      <nav className="navbg">
        <div className=" main-nav flex">
          <a href="/" className="company-logo">
            <img src={keenable} alt="" />
          </a>

          <div className="nav-links">
            <ul className="flex">
              <li>
                <Link to="/" className="hover-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/partners" className="hover-link">
                  Partners
                </Link>
              </li>
              {/* <li><Link to="/faq" className="hover-link">FAQ</Link></li> */}

              <li>
                <Link to="/career" className="hover-link" target="_blank">
                  Career
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://www.google.com/maps/place/Keen+%26+Able+Computers+Private+Limited/@28.615043,77.377373,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce5600e9000bf:0x5195188f982b98a9!8m2!3d28.615043!4d77.377373!16s%2Fg%2F11c2j6_xp9?entry=ttu"
                  className="hover-link"
                >
                  <LocationOnIcon></LocationOnIcon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

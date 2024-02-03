import React from "react";
import Navbar from "./Navbar";
import background from "./images/background.jpg";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <header>
        <div className="about container flex">
          <div className="about-header-left">
            <img src={background} alt="" />
          </div>
          <div className="header-right">
            <h2>OUR BACKGROUND</h2>
            <p>How We Got Here</p>
            <p>
              Trying to reach out for the unachievable and what lies beyond us
              has brought us where we are today. Be it our first Linux cluster
              for SAP deployment in 2002, or our first deployment for Red Hat's
              integration suite Fuse in 2012 or for that matter our first
              Openstack deployment in 2015.
            </p>
            <p>
              We never knew beforehand any of those areas when we set out to
              deliver. What kept us going and ultimately delivering was a focus
              to be able to of help to our customers and complete what we had
              started.
            </p>
            <p>
              That same zest continues today when we pick up today's challenges
              of low code-no code, AI, Optaplanner etc. And we hope we are able
              to always aim for goals outside our reach with the will to achieve
              what we aim for.
            </p>
          </div>
        </div>
      </header>
      <Footer></Footer>
    </>
  );
};
export default About;

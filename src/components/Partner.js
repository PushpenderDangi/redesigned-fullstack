import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import partner from "./images/partner.png";

const Partner = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="partner">
        <div class="container text-center">
          <div class="row">
            <div class="col header-left-img">
              <img src={partner} alt="" />
            </div>
            <div class="col header-right">
              <h1>
                <span>PARTNERS</span>
              </h1>
              <p>
                We would have never been able to reach the wider world had we
                not had our partners to support and work with us. Following are
                few of our partners we work closely with
              </p>
              <h2 className="text-center mt-5">TECHNOLOGY PARTNERS</h2>
              <p className="text-start">
                <strong>Red Hat</strong> - One of our closest and largest
                associates. We are lucky to have been associated with Red Hat
                since long and have been their go to partners for services
                delivery across the world
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>EDB</strong> - Leaders in Open Source Databases. We have
                been working with Postgres in a lot of our customer projects
              </p>
              {/* <br /> */}
              <h2 className="text-center mt-4">GLOBAL SIs</h2>
              <p className="text-start">
                <strong>Tech Mahindra</strong> - We have been working closely with
                Tech M on cloud orchestration and containerisation projects. We
                also have gotten to work many cutting technology and challenging
                projects with them
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>Infosys</strong> - Over the years, we have worked on quite
                a few Middleware led projects with the team. It has been a great
                working relationship that we have with Infosys' extended teams
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>HCL Technologies</strong> - Have been working on a variety
                of Automation and Containerisation projects for customers in
                India and around the world
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>Wipro</strong> - Worked closely on community and
                enterprise Open Source engagements with the team over the years
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>IBM</strong> - Our association with IBM amplified after
                their Red Hat acquisition, especially in the areas of Cloud and
                Containerisation
              </p>
              {/* <br /> */}
              <p className="text-start">
                <strong>LTI</strong> - Have been working for many large
                government of India projects with the team around
                containerisation and automation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};
export default Partner;

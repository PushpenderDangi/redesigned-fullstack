import React from "react";
import architect from "./images/architect.jpg";
import software from "./images/software.jpg";
import monitoring from "./images/monitoring.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Services = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="service-section">
        <div className="service container">
          <h1>
            <span>SERVICES</span>
          </h1>
          <p>
            <span>Openly Trying to Exceed Your Expectations</span>
          </p>
        </div>
      </div>

      <div className="service-provides">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img src={architect} alt="" />
            </div>
            <div className="col">
              <img src={software} alt="" />
            </div>
            <div className="col">
              <img src={monitoring} alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="container text-center">
        <div className="row">
          <div className="col1">
            <h2>
              <span>SOFTWARE ADVISORY & ARCHITECTING SERVICES</span>
            </h2>
            <p>
              <span>
                Over the years, we have come across many situations where a
                design mistake has already been made when we are called. It is a
                very tough situation for a customer and we can totally empathise
                with it. Should the customer go ahead knowing that there is an
                issue due to cost, time and other considerations; or should
                start afresh. There is no easy answer here. But what we have
                realised is that the software design and architecture should be
                open and have a building blocks approach to make it last. Our
                areas of interest here are
              </span>

            <div className="inner-col">
            <ul className="text-start unorder">
              <li>
                <span>Service Design Workshops</span>
              </li>
              <li>
                <span>Producing desing HLD and LLD</span>
              </li>
              <li>
                <span>Application Modernisation Workshops</span>
              </li>
              <li>
                <span>Design Review and Modifications</span>
              </li>
            </ul>
          </div>

          <div className="container text-start">
        <div className="inner-col">
          <span className=".t">
            Our software design practice is guided by the following principles
          </span>
        </div>
      </div>

      <div className="container text-center">
        <div className="row-last">
          <div className="col-last">
            <ul className="container text-start unorder">
              <li>
                <span className=".t">
                  Discussions with all stakeholders to get a holistic view of
                  requirements
                </span>
              </li>
              <li>
                <span>
                  Considerations of all the affected systems to put the
                  inter-play of components in architecture delivery
                </span>
              </li>
              <li>
                <span>
                  Discuss possible scenarios and use cases to help sharpen the
                  requirement gathering.
                </span>
              </li>
              <li>
                <span>
                  Help customers think beyond the immediate product/problem to
                  help create a future ready Open Source software architecture
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

            </p>
          </div>


          <div className="col2">
            <h2>
              <span>SOFTWARE BUILD & DEPLOYMENT SERVICES</span>
            </h2>
            <p>
              <span>
                Once the software design is ready, we have teams to help
                customers deploy them. We also undertake deployment of software
                for design done by others. We work equally Our areas of interest
                and delivery in this area span across
              </span>

              <div className="inner-col">
            <ul className="container text-start unorder">
              <li>
                <span>Linux OS and associated services</span>
              </li>
              <li>
                <span>Cloud and Cloud Orchestration</span>
              </li>
              <li>
                <span>Containers and Application Modernisation</span>
              </li>
              <li>
                <span>Lift and Shift legacy Applications to containers</span>
              </li>
              <li>
                <span>Open Source DBs and NoSQL DBs</span>
              </li>
              <li>
                <span>Process Automation on Open Source</span>
              </li>
              <li>
                <span>Red Hat Middleware product suite</span>
              </li>
              <li>
                <span>
                  Using Open Source tools to set up alerting and mo monitoring
                  with dashboards
                </span>
              </li>
              <li>
                <span>
                  Bespoke software development around Open Source software
                </span>
              </li>
            </ul>
          </div>

            </p>
          </div>

          <div className="col3">
            <h2>
              <span>MONITORING & SUPPORT SERVICES </span>
            </h2>
            <p>
              <span>
                Customers might need additional support after deployments or
                even monitoring of their critical systems to maintain uptime.
                There might be various teams that need to be aware of actions
                required to be taken if any component is not functioning. We
                provide these services to our customers. Some of the areas we
                address are
              </span>

              <div className="inner-col">
            <ul className="container text-start unorder">
              <li>
                <span>24X7 monitoring</span>
              </li>
              <li>
                <span>Creating dynamic information dashboards</span>
              </li>
              <li>
                <span>Rule based monitoring</span>
              </li>
              <li>
                <span>Automating monitoring workflows</span>
              </li>
              <li>
                <span>Manpower support for operations</span>
              </li>
              <li>
                <span>Day 2 support and CR handling</span>
              </li>
              <li>
                <span>Creating Policies for monitoring</span>
              </li>
            </ul>
          </div>

            </p>
          </div>
        </div>
      </div>

      

      <Footer></Footer>
    </>
  );
};

export default Services;

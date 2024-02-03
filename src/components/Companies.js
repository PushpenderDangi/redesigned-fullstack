import React from "react";
import cloth1 from "./images/cloth1.jpg";
import plant1 from "./images/plant1.jpg";
import contact from "./images/contactus.png";
// import Navbar from "./Navbar";
import Footer from "./Footer";

const Companies = () => {
  return (
    <>
    {/* <Navbar></Navbar> */}
      <section className="feature-section container">
        <section className="container">
          <h2 className="small-bold-text service">Our Services</h2>
          <p className="service">
            Here's What We Think We Provide Today. And We Have Always Been Open
            To New Areas
          </p>

          <section className="feature-section-ser container flex">
            <div className="header-left-ser">
              <img src={cloth1} alt="" />
            </div>

            <div className="header-right-ser">
              <img src={plant1} alt="" />
            </div>
          </section>
        </section>
      </section>

      <section className="big-feature-section flex">
        <div className="container flex">
          <div className="container">
            <h2>ARCHITECTING</h2>
            <br />
            <p>
              A well thought out architecture helps our customers be in control
              of their deployments long after we complete our work. With our
              experience of working with varied customer scenarios across the
              world, we provide software architecting services to help design
              the software keeping the bigger picture in mind.{" "}
            </p>
          </div>
          <div className="container">
            <h2>DEPLOYMENT</h2>
            <br />
            <p>
              We provide deployment services for almost any technology in Open
              Source realm. This list has been evergrowing over the years. Our
              motto being simple - if we do not know it, we learn it. After all,
              we have always been Open! We are always willing to walk the path
              with our customers on their Open Source deployment journey.
            </p>
          </div>

          <div className="container">
            <h2>SUPPORT</h2>
            <br />
            <p>
              For customers requiring long term support for their Open Source
              technology deployments, we help form teams to manage the
              deployments. All of this with an open mind. We help our customers
              break their mould of limitation by helping them deploy Open Source
              technologies in newer areas as well.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-us container flex">
        <div className="header-left-det">
          <h2>GET IN TOUCH</h2>
          <br />
          <p>
            We are all ears - getting to know about your business, your Open
            Source deployment or management problems. It would delight us if you
            think we can be of any help to you in your Open Source journey. You
            can even get in touch to say a Hi or send a feedback to us. As you
            would have guessed, We love being Open!
          </p>
          <br />
          <a href="mailto: sales@keenable.in">sales@keenable.in</a>
        </div>

        <div className="header-right-img">
          <img src={contact} alt="" />
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Companies;

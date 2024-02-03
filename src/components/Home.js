import React from "react";
// import asset1 from "./images/asset1.webp";
import asset2 from "./images/asset2.jpg";
import moreabout from "./images/more-about.png";
import Companies from "./Companies"
import Navbar from "./Navbar";
// import Footer from "./Footer";




const Home = () => {
 return (
   <>
   <Navbar></Navbar>
     <header>
       <div className="container header-section flex">
         <div className="header-left">
           <h1>KEEN AND ABLE</h1>
           <p>Doing Business the Open Way</p>


           <p>
             Our amazing Open Source journey started in early 2000s. And what a
             ride it has been. We did not imagine that we would have such
             widespread adoption and deployment of Open Source technologies
             over the years. We are happy to have been able to play a bit of
             role in that adoption by being a fellow traveller with our
             associates, customers and partners alike
           </p>
         </div>


         <div className="header-right">
           <img src={asset2} alt="" />
         </div>
       </div>
     </header>


     <section className="companies-section">
       <div className="container header-section flex">
         <div className="header-left">
           <img src={moreabout} alt="" />
         </div>
         <div className="header-right">
           <h1>MORE ABOUT KEEN AND ABLE</h1>


           <p>Our Story</p>


           <p>
             Keen and Able started as a college dream in the mind of a few
             youngsters who just wished to have something to call their own.
             Open Source happened by chance. But has stuck for long. Over the
             years, we have dabbled in many associated Open Source technologies
             and successfully helped our customers adopt them.
           </p>
   
           <p>
             We believe our strength lies in taking challenges head on and be
             of help to our customers in all areas of software deployment -
             architecture and planning, deployment and support.
           </p>


           <p>
             Being a services focused organisation, we are able to think beyond
             product and strive to provide our customers with solutions that
             help them address their business need rather than deploy a
             product.
           </p>


           <p>
             We have been quite fortunate to have been able to work both in
             community and enterprise Open Source solution deployments. We have
             been living our dream of creating people who are deft in
             fulfilling customer needs through Open Source means.
           </p>
         </div>
       </div>
     </section>


   <Companies></Companies>


     {/* <Footer></Footer> */}
   </>
 );
};


export default Home;






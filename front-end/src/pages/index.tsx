import React from "react";
import Carousel from "../components/carousel/Carousel";
import About from "../components/about/About";
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout";




// markup
const IndexPage = () => {
  return (
    <Layout title='Home'>
      <Hero/>
     <About/>
     <Carousel/>
     <Clients/>
      <Contact/>
      
    </Layout>
  );
};

export default IndexPage;

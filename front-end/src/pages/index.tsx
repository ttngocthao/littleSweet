import React from "react";
import Products from "../components/carousel/Products_home";
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
     <Products/>
     <Clients/>
      <Contact/>
      
    </Layout>
  );
};

export default IndexPage;

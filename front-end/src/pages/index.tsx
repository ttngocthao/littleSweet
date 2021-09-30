import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout";




// markup
const IndexPage = () => {
  return (
    <Layout title='Home'>
      <Hero/>
     <About/>
      <Contact/>
      
    </Layout>
  );
};

export default IndexPage;

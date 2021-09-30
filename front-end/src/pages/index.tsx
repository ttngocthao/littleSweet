import React from "react";
import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";




// markup
const IndexPage = () => {
  return (
    <Layout title='Home'>
      <h1>Revamp Little Sweet site</h1>
      <Contact/>
      
    </Layout>
  );
};

export default IndexPage;

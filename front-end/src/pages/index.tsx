import React from "react";
//import Carousel from "../components/carousel/Carousel";
import About from "../components/about/About";
import Clients from "../components/clients/Clients";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Layout from "../components/Layout";
import { graphql ,useStaticQuery} from "gatsby";
import {getImage,IGatsbyImageData} from 'gatsby-plugin-image';
import Products_Home from "../components/products/Products_Home";



// markup
const IndexPage = () => {
  
  const data:{file:IGatsbyImageData}=useStaticQuery(graphql`
   { file(name: {eq: "banner"}) 
    {
      childImageSharp {
        gatsbyImageData(
          blurredOptions: {toFormat: NO_CHANGE}
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
        )
      }
    }
  }
  `);
  const image = getImage(data.file) as IGatsbyImageData;
  return (
    <Layout title='Home'>
      {/* <GatsbyImage image={image} alt='testing' /> */}
      <Hero image={image}/>
     <About/>
      <Clients/>
     {/* <Carousel/> */}
     <Products_Home/>
    
      <Contact/>
      
    </Layout>
  );
};

export default IndexPage;

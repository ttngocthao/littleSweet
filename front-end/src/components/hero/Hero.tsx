import React from 'react';
import styled from 'styled-components';

import { theme } from '../GlobalStyle.css';

import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
const Wrapper = styled.section`
max-width: ${theme.maxScreenWidth};
position: relative;
margin: 0 auto;
`;
const Banner =styled.figure`
    
   
`;
const Slogan = styled.h1`
    width: 100%;   
   text-align: center;
   color: ${theme.colors.third};
   font-size: ${theme.fontSizes.mid};
   padding:1rem;
   background-color: rgba(255,255,255,.4);
   @media only screen and (min-width: 700px){
       
        position: absolute;
        bottom: 0;
        left: 50%; 
       
        transform: translateX(-50%);
   }
    @media only screen and (min-width: 1000px){
         font-size: ${theme.fontSizes.xlarge};
    }
`;
interface Props {   
    text?:string
    image: IGatsbyImageData
}
const Hero = ({text,image}:Props) => {
    
    return (
        <Wrapper>
             <Banner>
               <GatsbyImage image={image} alt='testing' />   
        </Banner>
        <Slogan>{text ? text: 'Little Sweet Bakery'}</Slogan>
        </Wrapper>
       
    );
};

export default Hero;

 

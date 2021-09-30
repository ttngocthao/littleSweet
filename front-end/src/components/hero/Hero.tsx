import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import BannerImg from '../../images/banner.png';

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
const Hero = () => {
    return (
        <Wrapper>
             <Banner>
            <img alt='' src={BannerImg as string}/>
            {/* <img className='slogan' alt='' src={SloganImg as string}/> */}
        </Banner>
        <Slogan>Little Sweet Bakery</Slogan>
        </Wrapper>
       
    );
};

export default Hero;

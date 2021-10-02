import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
const BkgFooter= styled.footer` 
background-color: ${theme.colors.second};
`;
const StyledFooter = styled.div`
    max-width: ${theme.maxScreenWidth};  
  padding:1rem;
  margin:0 auto;
  p,a{
      color: white; font-size: .75rem;
  }
   @media only screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
       align-items: center;
   }
`;
const currentYear = new Date().getFullYear();
const Footer = () => {
    return (
        <BkgFooter>
             <StyledFooter>
            <p style={{paddingBottom:'1rem'}}>@copyright-{currentYear}</p>
            <p>Designed & Developed by <a href='https://my-page-thaotruong.netlify.app'>ThaoTruong</a></p>
        </StyledFooter>
        </BkgFooter>
       
    );
};

export default Footer;

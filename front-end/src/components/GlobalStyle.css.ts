import { createGlobalStyle } from 'styled-components';

const colors={   
    second:'#0d7a82',
    main:'#fedcd2',
    third:'#906b00'
};
const fontSizes = {
    xlarge:'4rem',
    large:'3rem',
    mid:'2rem',
    reg:'1rem',
    small:'.75rem',
    xsmall:'.5rem'
     
};

export const theme = {
    colors: colors,
    fontSizes: fontSizes,
    maxScreenWidth:'120rem'
};

export default createGlobalStyle`
    *{
        font-size: 16px;
        line-height: 1.4;
        font-family: 'Merienda', cursive;
        font-weight: 400;
        margin: 0;
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6,div,p,ul,ol,section{
        margin:0;
        padding: 0;
    }
    img{
        vertical-align: bottom;
    }
    figure{
        margin:0;
        padding:0;
        img{
            width: 100%;
            vertical-align: bottom;
        }
    }
    li{
        list-style: none;
        padding:0;
    }
    h1,h2{
        font-size: ${theme.fontSizes.mid};
        color:${theme.colors.second};
        font-weight:700;
    }
    
 @media only screen and (min-width: 1000px){
              h1,h2{
                  font-size: ${theme.fontSizes.large};
              }
          }

`;
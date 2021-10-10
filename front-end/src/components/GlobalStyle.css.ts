import { createGlobalStyle } from 'styled-components';

const colors={   
    second:'#0d7a82',
    main:'#fedcd2',
    third:'#906b00',
    mainTxt:'#454545'
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
    maxScreenWidth:'120rem',
    iconStarWidth:'20px'
};

export default createGlobalStyle`
    *{
        font-size: 18px;
        line-height: 1.5;
        font-family: 'Merienda', cursive;
        font-weight: 400;
        margin: 0;
        box-sizing: border-box;
        color:#454545;
    }
    button{
        border:none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        cursor: pointer;
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
    
    .snip-layout #snipcart-header.snip-header {
        background-color: ${theme.colors.main};
    }
    .snip-layout .snip-ico {  
        color: ${theme.colors.third};
        font-size: 2rem;
    }
    .snip-layout #snipcart-footer.snip-footer {
        background: ${theme.colors.main};
       
    }
    /* #snipcart-actions a.snip-btn.snip-btn--highlight,a#snipcart-next {
        background: ${theme.colors.second}!important;
        color: white;
    } */
    a#snipcart-previous{
        background-color: ${theme.colors.main};
        color: #454545;
    }
.snip-layout .snip-header__title {
    color: ${theme.colors.third};
    text-transform: initial;
}
.snip-layout .snip-btn--highlight {
     background: ${theme.colors.second}!important;
        color: white!important;
}
#snipcart-header-total {
    background: ${theme.colors.second};
    .snip-header__total-label, #snipcart-amount {
        color: white;
    }
}


 @media only screen and (min-width: 1000px){
              h1,h2{
                  font-size: ${theme.fontSizes.large};
              }
          }

`;
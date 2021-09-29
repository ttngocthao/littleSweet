import { createGlobalStyle } from 'styled-components'

export const colors={   
    second:'#0d7a82',
    main:'#fedcd2',
    third:'#906b00'
}
export const fontSize = {
    xlarge:'4rem',
    large:'3rem',
    mid:'2rem',
    reg:'1rem',
    small:'.75rem',
    xsmall:'.5rem'
}
export default createGlobalStyle`
    *{
        font-size: 16px;
        line-height: 1.4;
        font-family: 'Merienda', cursive;;
        font-weight: 400;
        margin: 0;
    }
    h1,h2,h3,h4,h5,h6,div,p,ul,ol{
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
        }
    }
    li{
        list-style: none;
        padding:0;
    }
    h1{
        font-size: ${fontSize.xlarge};
        color:${colors.second};
        font-weight:900;
    }


`
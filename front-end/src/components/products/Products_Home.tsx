import React from 'react';
import { slideContent } from '../carousel/Carousel';
import styled from 'styled-components';

import Title from '../title/Title';
import { theme } from '../GlobalStyle.css';
// const Nav = styled.nav`
//     max-width: ${theme.maxScreenWidth};
    
// `;
const Products = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding:1rem;
     @media only screen and (min-width: 700px){
      justify-content: space-between;
        max-width: ${theme.maxScreenWidth};
        margin: 0 auto;
     }
`;
const ProductCard = styled.li`
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 1rem;
    a{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-end;
        justify-content: center;
        text-decoration: none;
        position: relative;
        z-index: 1;
        text-align: center;
      
       
       span{
            position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           background-color: rgba(255,255,255,.7);
           width: 100%;
           padding: .5rem;
           z-index: 0;
           font-weight: bold;
       }
    }
      @media only screen and (min-width: 700px){
            width: 250px;
            height: 250px;
      }
`;

const Products_Home = () => {
    return (
        <nav aria-label='products' role='navigation'>
            <Title title='Products'/>
            <Products>
                {slideContent.sort((itemA,itemB)=>itemA.orderInList-itemB.orderInList).map((item,index)=>{
                    return(
                        <ProductCard key={index} style={{backgroundImage:`url(${item.imageUrl})`}}>
                            <a href={item.linkPage}>
                                <span>{item.name}</span>
                            </a>
                        </ProductCard>
                    );
                })}
            </Products>
        </nav>
    );
};

export default Products_Home;

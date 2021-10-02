import React from "react";
import { graphql,useStaticQuery } from "gatsby";
import ProductItem from "./ProductItem";
import styled from 'styled-components';
import Title from "../title/Title";
import { theme } from "../GlobalStyle.css";
export interface IProduct{
    name:string
    id:string
    price:number
    info:string
    imageUrl:string
    category:string
    starRating:number
}
const Wrap = styled.div`
    padding: 1rem;
    max-width: ${theme.maxScreenWidth};
    margin:0 auto;
`;

const StyledList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;
const ProductList = () => {
    const data:{allCake:{nodes:IProduct[]}} = useStaticQuery(graphql`
        {
        allCake {
           
                nodes {
                    name
                    id
                    price
                    info
                    imageUrl
                    category
                    starRating
                }
            
            }
        }
    `);
    const allCakes = data.allCake.nodes;   
  //  console.log(allCakes);
  
    return(
        <Wrap>
            <Title title='Products'/>
            
            <StyledList>
                {allCakes.map((item,index)=><ProductItem key={index} item={item}/>)}
            </StyledList>
            
        </Wrap>
    
    );
    
    };



export default ProductList;

import React from "react";
import { graphql,useStaticQuery } from "gatsby";
import ProductItem from "./ProductItem";
export interface IProduct{
    name:string
    id:string
    price:number
    info:string
    imageUrl:string
    category:string
    starRating:number
}
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
    
   
    console.log(allCakes);
    return(
        <div>
            Products page
            {allCakes.map((item,index)=><ProductItem key={index} item={item}/>)}
        </div>
    
    );
    
    };



export default ProductList;

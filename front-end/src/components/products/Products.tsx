import React, { useState } from "react";
import { graphql,useStaticQuery } from "gatsby";
import ProductItem from "./ProductItem";
import styled from 'styled-components';
import Title from "../title/Title";
import { theme } from "../GlobalStyle.css";
import Hero from "../hero/Hero";
import {Search} from '@styled-icons/evil/Search';
import{ IGatsbyImageData,getImage } from 'gatsby-plugin-image';
import {Clear} from '@styled-icons/material/Clear';

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

const FilterBar = styled.div`
    text-align: right;
    padding: 0 ;
   
    select,input{
        display: inline-block; 
        width: 100%;
    }
    select{
       
        text-transform: capitalize;
       
       
    }
    .input-wrap{
         position: relative;
         margin-bottom: .5rem; 
         max-width: 218px;
         margin-left: auto;
         width: 100%;
    }
   .searchBar-icon{
        width: 32px;
    fill: ${theme.colors.second};
    position: absolute;
    right: 0;
    top: 50%;
    top: 5;
    transform: translateY(-50%);
   }
    @media only screen and (min-width: 700px){
        display: flex;
        max-width: 450px;
        justify-content: flex-end;
        margin-left: auto;
         padding: 2rem 0 0;
    }
`;



const ProductList = () => {
    const [filterCategory,setFilterCategory]=useState('');
    const [filterInput,setFilterInput]=useState('');

    const data:{allCake:{nodes:IProduct[]},file:IGatsbyImageData} = useStaticQuery(graphql`
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
        file(name: {eq: "products-banner"}) {
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
    const allCakes = data.allCake.nodes;   
    const image = getImage(data.file) as IGatsbyImageData;
  //  console.log(allCakes);
    const getCategories =(dataSource:IProduct[])=>{
      return dataSource.reduce<string[]>((result,item)=>{
           const {category}= item;
           if(result.indexOf(category)===-1){
               result.push(category);
           }
           return result;
       },[]);
       
    };

    const filteredData =(dataSource:IProduct[],filterCategory:string,filterInput:string):IProduct[]=>{
        let outcome:IProduct[];
        if(filterCategory){
            outcome=dataSource.filter(item=>item.category.toLowerCase()===filterCategory);
        }else{
            outcome=dataSource;
        }
      
        if(filterInput){
           return outcome.filter(item=>item.name.toLowerCase().includes(filterInput));
        }else{
            return outcome;
        }
    };

    const allCategories = getCategories(allCakes);
    
    
    
    const displayData = filteredData(allCakes,filterCategory,filterInput);
    const displayCategory = getCategories(displayData);

    
    return(
        <Wrap>
            <Hero image={image} text='Our Products'/>
          
            <FilterBar>
                 <div className='input-wrap'>
                    <select value={filterCategory} name='filterCategory' onChange={(e)=>setFilterCategory(e.target.value) }>
                        <option value=''>All Category</option>
                        {allCategories.map(c=><option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className='input-wrap'>
                    <input value={filterInput} name='filterInput' onChange={(e)=>setFilterInput(e.target.value)}/>
                    {
                        filterInput ? <Clear className='searchBar-icon' onClick={()=>setFilterInput('')}/> :<Search className='searchBar-icon'/>
                    }
                </div>
                
            </FilterBar>
            

            {displayCategory.map((category,ci)=><div key={ci}>
              
               <Title title={category}/>
                <StyledList>
                {displayData.filter(item=>item.category===category).map((item,index)=><ProductItem key={index} item={item}/>)}
                </StyledList>
            </div>)}
           
            
        </Wrap>
    
    );
    
    };



export default ProductList;

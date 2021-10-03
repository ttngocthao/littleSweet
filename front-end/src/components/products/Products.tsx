import React, { useState } from "react";
import { graphql,useStaticQuery } from "gatsby";
import ProductItem from "./ProductItem";
import styled from 'styled-components';
import Title from "../title/Title";
import { theme } from "../GlobalStyle.css";
import Banner from '../../images/products-banner.png';
import Hero from "../hero/Hero";
import {Search} from '@styled-icons/evil/Search';
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
    padding: 2rem 0;
    position: relative;
    select,input{
        display: inline-block;
    }
    select{
        margin-right: 1rem; 
        text-transform: capitalize;
       
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
`;



const ProductList = () => {
    const [filterCategory,setFilterCategory]=useState('');
    const [filterInput,setFilterInput]=useState('');

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
            <Hero imgSrc={Banner as string} text='Our Products'/>
           {/* <figure>
               <img src={Banner as string} alt=''/>
           </figure> */}
            <FilterBar>
                <select value={filterCategory} name='filterCategory' onChange={(e)=>setFilterCategory(e.target.value) }>
                    <option value=''>All Category</option>
                    {allCategories.map(c=><option key={c} value={c}>{c}</option>)}
                </select>
                <input value={filterInput} name='filterInput' onChange={(e)=>setFilterInput(e.target.value)}/>
                {
                    filterInput ? <Clear className='searchBar-icon' onClick={()=>setFilterInput('')}/> :<Search className='searchBar-icon'/>
                }
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

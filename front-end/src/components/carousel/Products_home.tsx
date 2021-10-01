import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CupcakeImg from '../../images/carousel/pink-cupcake.jpg';
import MuffinImg from '../../images/carousel/muffins.jpg';
import CelebrationImg from '../../images/carousel/celebrationCake.jpg';
import CartoonImg from '../../images/carousel/mermaid.jpg';
import DessertImg from '../../images/carousel/cheeseCake.jpg';
import SavouriesImg from '../../images/carousel/sausageRoll.jpg';
import MacaroonImg from '../../images/carousel/frenchMacaron.jpg';
import SandwichImg from '../../images/carousel/catering.jpg';
import { theme } from '../GlobalStyle.css';
import styled from 'styled-components';
import Title from '../title/Title';

interface ISlide{
    name:string
    info:string
    imageUrl:string
    linkPage:string
    orderInList:number
}
const slideContent:ISlide[]=[
  {
      name:'Celebration Cakes', 
  info:'Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message.', 
  imageUrl:CelebrationImg as string,
  linkPage:'https://#',
  orderInList:1 },
  {
      name:'Children Cakes', 
  info:'Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl', 
  imageUrl:CartoonImg as string,
  linkPage:'https://#' ,
  orderInList:1},
  {
      name:'Desserts', 
      info:'Make your get-together an occasion to remember with one of our amazing dessert cake selections', 
      imageUrl:DessertImg as string,
      linkPage:'https://#' ,
      orderInList:1},
  {
      name:'Savouries', 
      info:'Sometimes we all need a quick snack to keep us going through the day and our collection of savoury snacks will not make you disappointed', 
      imageUrl:SavouriesImg as string,
      linkPage:'https://#',
      orderInList:1 },
  {
      name:'Cupcakes', 
  info:'For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion', 
  imageUrl:CupcakeImg as string,
  linkPage:'https://#' ,
  orderInList:1},
  {
      name:'Muffins', 
      info:'Muffins are a lunch box favourite and perfect for afternoon tea. Get out the muffin tray and explore our range of savoury, decadent, sweet and healthy muffins.',
       imageUrl:MuffinImg as string,
      linkPage:'https://#',
      orderInList:1 },
  {
      name:'Macarons', 
      info:'Macarons embody traditional recipes and original pastrymaking know-how expressed in the French art of meringue. Made using a high-quality recipe, these macarons will whisk you off to a moment of pure gourmet pleasure.', 
      imageUrl:MacaroonImg as string,
      linkPage:'https://#',
      orderInList:1 
      },
  {
      name:'Sandwiches', 
      info:'When it comes to keeping your event fuss-free, there is no better choice than a selection of our freshly-made catering meal options', 
      imageUrl:SandwichImg as string,
      linkPage:'https://#',
      orderInList:1 }
];
const Wrap = styled.div`
    margin: 0 auto;
    max-width: ${theme.maxScreenWidth};
    .carousel{
        
       
         max-width: ${theme.maxScreenWidth};
         padding:0 2rem 2rem;
    }
   .slide{
        background-color: ${theme.colors.main};
   }
    /* .slider-wrapper{
        padding:0 2rem;
    } */
    .item{
        display: flex;
        align-items: center;
        flex-direction: column;

    }
    .img{
        
        display: block;
        
        width:100%;
    } 
    .info{
            padding: 2rem;
            width: 100%;
    margin: 0 auto;
        } 
    .info a{
        display: inline-block;
        margin-top: 1rem;
        border: 1px solid ${theme.colors.third};
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem;
    background-color: ${theme.colors.second};
    border-radius: 0 1rem;
    color:white;
    text-decoration:none;
   
    }
    .info h3{
        font-size: 1.75rem;
        padding-bottom: .5rem;
    }
    .carousel .control-dots{
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
    }
    @media only screen and (min-width: 850px){
        .item{
            flex-direction: row;
        }
         .img{
        margin-bottom: 0rem;
        min-width: 440px;
        max-width: 600px;
        
        }
     }
`;
interface IProductItem{
    item: ISlide
}
const ProductItem =({item}:IProductItem)=>{
    const {name,linkPage,imageUrl,info}=item;
    return(
       
          <div className='item'>
              <figure className='img'>
                   <img  src={imageUrl} alt='' />
              </figure>
             
              <div className="info">
                  <h3>{name}</h3>
                  <p>
                   {info}
                  </p>
                  <a href={linkPage}>View our {name}</a>
              </div>
          </div>  
        

          
    );
};

const Products = () => {  
   const carouselSetting ={
       showStatus:false,
    //    autoPlay:true,
       showThumbs:false,
       transitionTime:2500,
       infiniteLoop:true
   };
    return (
        <Wrap>
            <Title title='Products'/>
          <Carousel {...carouselSetting}>
            {/* <div className="item">
                <figure className="img">
                    <img src="/static/celebrationCake-5c4b14439037665c2ea59c379eb5c69d.jpg" alt=""/>
                    </figure>
                    <div className="info">
                        <h3>Celebration Cakes</h3>
                        <p>Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message.</p>
                        <a href="https://#">View our Celebration Cakes</a></div>
            </div>

             <div className="item"><figure className="img"><img src="/static/mermaid-39c9a49060e2f13e17f1cad6c6a9ab22.jpg" alt=""/></figure><div className="info"><h3>Children Cakes</h3><p>Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl</p><a href="https://#">View our Children Cakes</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/cheeseCake-17b20ae2213b0d8c544ffbc206b3c7b4.jpg" alt=""/></figure><div className="info"><h3>Desserts</h3><p>Make your get-together an occasion to remember with one of our amazing dessert cake selections</p><a href="https://#">View our Desserts</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/sausageRoll-f4aebf60e9999a8b37f526230cf91106.jpg" alt=""/></figure><div className="info"><h3>Savouries</h3><p>Sometimes we all need a quick snack to keep us going through the day and our collection of savoury snacks will not make you disappointed</p><a href="https://#">View our Savouries</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/pink-cupcake-996fe7befa6289825bd89ea68fd456b3.jpg" alt=""/></figure><div className="info"><h3>Cupcakes</h3><p>For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion</p><a href="https://#">View our Cupcakes</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/muffins-7b8e1647c9144fb948689d2409bf422e.jpg" alt=""/></figure><div className="info"><h3>Muffins</h3><p>Muffins are a lunch box favourite and perfect for afternoon tea. Get out the muffin tray and explore our range of savoury, decadent, sweet and healthy muffins.</p><a href="https://#">View our Muffins</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/frenchMacaron-ee2ddb5312fbc7246e47ec628fc929ae.jpg" alt=""/></figure><div className="info"><h3>Macarons</h3><p>Macarons embody traditional recipes and original pastrymaking know-how expressed in the French art of meringue. Made using a high-quality recipe, these macarons will whisk you off to a moment of pure gourmet pleasure.</p><a href="https://#">View our Macarons</a></div>
             </div>
             <div className="item"><figure className="img"><img src="/static/catering-e6e01851124ebb98fe191e2ff5cd3740.jpg" alt=""/></figure><div className="info"><h3>Sandwiches</h3><p>When it comes to keeping your event fuss-free, there is no better choice than a selection of our freshly-made catering meal options</p><a href="https://#">View our Sandwiches</a></div>
             </div> */}
             {slideContent.map((item)=><ProductItem key={item.name} item={item}/>)}
      </Carousel>
     
      </Wrap>
    );
};

export default Products;

import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import Title from '../title/Title';

import CakeCoffeeImg from '../../images/cake-coffee.jpg';


const Wrap = styled.div`
    max-width: ${theme.maxScreenWidth};
    margin: 0 auto;
   
   
    
    .info{
        padding: 0 1rem;
        position: relative;
        
        .paragraphs{
            width: 100%;
        }
        p{
            padding:0rem 0 1rem;
        }
          @media only screen and (min-width: 850px){
              display: flex; 
              align-items: center;
              .paragraphs{
                  padding-right: 2rem;

                 
              }
          }
    }
`;

const Img = styled.figure`
  
    width: 100%;
   
    margin-bottom: 2rem;
    @media only screen and (min-width: 700px){
      max-width: 600px;
    }
`;


const About = () => {
    return (
        <Wrap>
            <Title title='About'/>

            <div className='info'>
               
            <div className='paragraphs'>
  <p> Customers often comment on the constant bustle of activity they see taking place in the bakery behind the shop. It&#39;s where the magic happens as our team of qualified pastry chefs (three of whom worked in the original bakery) and two apprentices prepare and produce our gorgeous range of cakes, biscuits, muffins, treats and savouries.</p>
            <p>Our day usually begins at 5.00am and we start baking almost immediately. Cake and muffin batters that were prepared the night before are poured into tins and popped in the ovens, pastry needs to be rolled out and there are plenty of vegetables to be cut up and meat fillings to be cooked.</p>
               <p>By breakfast time we&#39;re open for business and greeting our first customers, pouring coffees as we serve hot piping pastries and freshly- made sandwiches and rolls. Despite our sometimes hectic schedule, there&#39;s nothing we enjoy more than taking the time to provide good old-fashioned service, and we&#39;re proud to say we know many of our customers by name.</p>
            </div>
               <Img>
                <img src={CakeCoffeeImg as string} alt=''/>
            </Img>
            </div>
           
              
               



           
        </Wrap>
    );
};

export default About;

import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import Title from '../title/Title';
import LogoImg from '../../images/cake-coffee2.jpg';
import CakeCoffeeImg from '../../images/cake-coffee.jpg';
import CakeCoffeeImg3 from '../../images/cake-coffee3.jpg';

const Wrap = styled.div`
    max-width: ${theme.maxScreenWidth};
    margin: 0 auto;
   
    p{
        padding-bottom: 1rem;
    }
    .info{
        padding: 0 2rem;
        position: relative;
        display: flex;
        align-items: center;
        p{
            padding:2rem 0;
        }
    }
`;

const Img = styled.figure`
    min-width: 200px;
    
    @media only screen and (min-width: 700px){
        min-width: 300px;
    }
`;
interface ITextWithImg{
    src:string
    children: React.ReactNode
    imgLeft?:boolean
}
const TextWithImg =({src,imgLeft,children}:ITextWithImg)=>{
    const imgLocation = imgLeft===true ? 'left' : 'right';


    return(
        <div className='info'>
            {imgLocation==='left' &&     <Img>
                <img src={src} alt=''/>
            </Img>}
            <div style={imgLeft===true ? {paddingLeft:'2rem'} :{paddingRight:'2rem'}}>
                {children}
            </div>
         
           {imgLocation==='right' && <Img>
                <img src={src} alt=''/>
            </Img>}
            
            
           
        </div>
    );
};

const About = () => {
    return (
        <Wrap>
            <Title title='About'/>
            <TextWithImg src={LogoImg as string} imgLeft={true}>
                 <p> Customers often comment on the constant bustle of activity they see taking place in the bakery behind the shop. It&#39;s where the magic happens as our team of qualified pastry chefs (three of whom worked in the original bakery) and two apprentices prepare and produce our gorgeous range of cakes, biscuits, muffins, treats and savouries.</p>
            </TextWithImg>
            <TextWithImg src={CakeCoffeeImg as string}>
            <p>Our day usually begins at 5.00am and we start baking almost immediately. Cake and muffin batters that were prepared the night before are poured into tins and popped in the ovens, pastry needs to be rolled out and there are plenty of vegetables to be cut up and meat fillings to be cooked.</p>
            </TextWithImg>
            <TextWithImg imgLeft={true} src={CakeCoffeeImg3 as string}>
               <p>By breakfast time we&#39;re open for business and greeting our first customers, pouring coffees as we serve hot piping pastries and freshly- made sandwiches and rolls. Despite our sometimes hectic schedule, there&#39;s nothing we enjoy more than taking the time to provide good old-fashioned service, and we&#39;re proud to say we know many of our customers by name.</p>
            </TextWithImg>
            <div className='info'>
              
               



            </div>
        </Wrap>
    );
};

export default About;

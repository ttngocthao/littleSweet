import React from 'react';
import styled from 'styled-components';
import BarLogo from '../../images/clients/bar.png';
import Bar1Logo from '../../images/clients/bar1.png';
import Bar2Logo from '../../images/clients/bar2.jpg';
import Coffee1Logo from '../../images/clients/coffeeShop.jpg';
import Coffee2Logo from '../../images/clients/coffeeShop2.jpg';
import FFLogo from '../../images/clients/fast-food.png';
import Res1Logo from '../../images/clients/restaurant.jpg';
import Res2Logo from '../../images/clients/restaurant1.jpg';
import Res3Logo from '../../images/clients/restaurant2.png';
import { theme } from '../GlobalStyle.css';
import Title from '../title/Title';
import ClientItem from './ClientItem';
export interface IClient {
    name:string
    siteUrl:string
    logo:string
    orderInList:number
}
const clients:IClient[] =[
    {
         name:'Client 1',
        siteUrl:'https://#',
        logo:Bar1Logo as string,
        orderInList:1
    },
    {
         name:'Client 2',
        siteUrl:'https://#',
        logo:BarLogo as string,
        orderInList:2
    },
    {
         name:'Client 3',
        siteUrl:'https://#',
        logo:Bar2Logo as string,
        orderInList:3
    },
    {
         name:'Client 4',
        siteUrl:'https://#',
        logo:Coffee1Logo as string,
        orderInList:4
    },
     {
         name:'Client 5',
        siteUrl:'https://#',
        logo:Coffee2Logo as string,
        orderInList:5
    },
     {
         name:'Client 6',
        siteUrl:'https://#',
        logo:FFLogo as string,
        orderInList:6
    },
     {
         name:'Client 7',
        siteUrl:'https://#',
        logo:Res1Logo as string,
        orderInList:7
    },
    {
         name:'Client 8',
        siteUrl:'https://#',
        logo:Res2Logo as string,
        orderInList:8
    },
    {
         name:'Client 9',
        siteUrl:'https://#',
        logo:Res3Logo as string,
        orderInList:9
    }
];
const Wrap = styled.section`
    max-width: ${theme.maxScreenWidth};
    margin: 0 auto;
`;
const Ul = styled.ul`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 2rem;
    grid-row-gap:2rem;
    padding: 0 1rem;
   
    /* & li:nth-child(2n){
        padding-right: 0;
    } */
    @media only screen and (min-width: 700px){
         grid-template-columns: repeat(4,1fr);
       
    }
    @media only screen and (min-width: 1200px){
         grid-template-columns: repeat(6,1fr);
       
    }
`;
const Clients = () => {
    return (
        <Wrap>
            <Title title='Clients'/>
            <Ul>
                {clients.map((item,index)=><ClientItem key={index} item={item}/>)}
            </Ul>
        </Wrap>
    );
};

export default Clients;

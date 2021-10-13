import React from 'react';
import styled from 'styled-components';
import {StyledIcon} from '@styled-icons/styled-icon';
import { theme } from '../GlobalStyle.css';
import Title from '../title/Title';
import {PhoneIphone} from '@styled-icons/material/PhoneIphone';
import {AddressCard} from '@styled-icons/fa-regular/AddressCard';
import {Mail} from '@styled-icons/entypo/Mail';
import {Facebook,Twitter,Instagram} from '@styled-icons/fa-brands';
import MapImg from '../../images/map-bakup.png';
interface ISocialMedia {
    label:string
    iconComp: StyledIcon
    linkUrl:string
    orderInList:number
}

const Wrap = styled.div`
    margin: 0 auto;
    max-width: ${theme.maxScreenWidth};
`;
const Content = styled.div`
    padding:0 1rem 2rem;
   
    .icon{
        width: 50px;
    }
     @media only screen and (min-width: 700px){
       display: flex;
       justify-content: space-between;
       /* align-items: center; */
   }
`;
const LeftCol = styled.div`
    width: 100%;
`;
const ContactList = styled.ul`
    padding-bottom: 1rem;
    li{
        display: flex;
        align-items: center;
        padding-bottom: .25rem;
        .icon{
            margin-right: 1rem;
            width: 30px;
        }
    }
`;
const SocialMediaList = styled.ul`
    display: flex;
    max-width: 200px;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 2rem;
`;

const RightCol = styled.figure`
    width: 100%;
    
`;






const Contact = () => {
    const phoneNumber='+1234567890';
    const emailAddress='littlesweet@bakery.com';
    const storeAddress='123 Abc Road';
    const socialMediaData:ISocialMedia[] = [
        {
            label:'Facebook',
            iconComp:Facebook,
            linkUrl:'https://#',
            orderInList:1
        },
         {
            label:'Twitter',
            iconComp:Twitter,
            linkUrl:'https://#',
            orderInList:2
        },
         {
            label:'Instagram',
            iconComp:Instagram,
            linkUrl:'https://#',
            orderInList:3
        },
    ];
    return (
        <Wrap id='contact'>
           <Title title='Contact'/> 
           <Content>
             
                <LeftCol>
                    <ContactList>
                        <li>
                            <PhoneIphone className='icon' aria-hidden='true'/><a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </li>
                        <li>
                            <AddressCard className='icon' aria-hidden='true'/><address>{storeAddress}</address>
                        </li>
                        <li>
                            <Mail className='icon' aria-hidden='true'/><a href={`mailto:${emailAddress}`}>{emailAddress}</a>
                        </li>
                    </ContactList>
                    <SocialMediaList>
                        {socialMediaData.sort((a,b)=>a.orderInList-b.orderInList).map((item,index)=>{
                            const Icon= item.iconComp;
                            return(
                                <li key={index}>
                                    <a aria-label={item.label} href={item.linkUrl}>
                                        <Icon className='icon' aria-hidden='true'/>
                                    </a>
                                </li>
                            );
                        })}
                    </SocialMediaList>                    
                </LeftCol>
                <RightCol>
                    <img src={MapImg as string} alt='map'/>
                </RightCol>
           </Content>
           
        </Wrap>
    );
};

export default Contact;

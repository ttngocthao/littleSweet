import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import { IClient } from './Clients';
interface Props{
    item: IClient
}
const Li = styled.li`
  width: 100%;
 
  
  
   /* border-radius: 50%; */
   overflow: hidden;
    a{
        display: block;
        width: 100%;
    }
    figure{
        display: block;
        width: 100%;
       max-width: 250px;
        overflow: hidden;
        border-radius: 50%;
        box-shadow: 2px 2px 2px rgb(190 190 190 / 66%);
        border: 2px solid ${theme.colors.third};
        transition: .3s;

    }
    &:nth-child(2n){
       figure{
           margin-left:auto;
       }
    }
    @media only screen and (min-width: 700px){
          &:nth-child(4n+2), &:nth-child(4n+3){
       figure{
           margin: 0 auto;
       }
    }
        &:nth-child(4n){
            figure{
                margin-left:auto;
            }
        }
       //padding-right: 2rem;
    }
     @media only screen and (min-width: 1200px){
             &:nth-child(6n+2),&:nth-child(6n+3),&:nth-child(6n+4),&:nth-child(6n+5){
                figure{
                    margin:0 auto;
                }
            }
            &:nth-child(6n){
                figure{
                    margin-left:auto;
                }
            }
    }
`;
const ClientItem = ({item}:Props) => {
    const {name,siteUrl,logo}=item;
    return (
        <Li>
            <a aria-label={name} href={siteUrl}>
                <figure>
                   <img alt='' src={logo}/> 
                </figure>
                
            </a>
        </Li>
    );
};

export default ClientItem;

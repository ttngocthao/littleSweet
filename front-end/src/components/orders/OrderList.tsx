import React from 'react';
import { IOrder } from '../../utils/snipcart';
import OrderItem from './OrderItem';
import styled from 'styled-components';
import { StyledBtn } from '../products/ProductItem';
import { theme } from '../GlobalStyle.css';
import { navigate } from 'gatsby-link';

const StyledText  = styled.li`
    max-width: 940px;
    margin: 1rem auto;
    text-align: center;
    font-size: 2rem;
`;
const BuyBtn = styled(StyledBtn)`
    background-color: ${theme.colors.second};
    color:white;
    padding: .5rem;
    margin:1rem auto 3rem;
`;

const OrderList = ({data}:{data:IOrder[]}) => {
    const clickHandle = ()=>{
        void navigate('/products');
    };
   

    return (
        <ul>
            {data.length!==0 ? data.map(item=><OrderItem key={item.token} item={item}/>):
            <StyledText>
                <p>No Order history yet!</p>   
                <BuyBtn onClick={clickHandle}>
                    Let&apos;s Order some
                </BuyBtn> 

            </StyledText>}
            
        </ul>
    );
};

export default OrderList;

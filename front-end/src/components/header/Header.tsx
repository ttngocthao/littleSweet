/* eslint-disable @typescript-eslint/no-unsafe-call */
import React,{useEffect} from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import {Basket2Fill} from '@styled-icons/bootstrap/Basket2Fill';
import { useStore } from '../../storeContext/storeContext';

const StyledHeader = styled.header`
    color:red;
`;
const BasketIcon = styled(Basket2Fill)`
    width:30px;
    fill: ${theme.colors.second};
`;
const BasketButton = styled.div`

`;

const Header = () => {
    //     const value =useStore();
//    const {orders,addOrders,updateOrders} = value;
    const store = useStore();
    const {itemCount,updateItemCount} = store;
    useEffect(()=>{
        if (window['Snipcart']) {
            const count = window["Snipcart"].api.items.count() as number;
            updateItemCount(count);
            window.Snipcart.subscribe('cart.closed', () => {
                const count = window["Snipcart"].api.items.count() as number;
                updateItemCount(count);
            });
            window.Snipcart.subscribe('cart.ready', () => {
                const count = window["Snipcart"].api.items.count() as number;
                updateItemCount(count);
            });
        }
    },[]);
    return (
        <StyledHeader>
            this is header 
            <BasketButton className="snipcart-summary">
                <button className="snipcart-checkout" aria-label='shopping basket'><BasketIcon aria-hidden='true'/></button>
                <span  className="snipcart-items-count">{itemCount}</span>
            </BasketButton>
            
            <a href='/products'>View products</a>
        </StyledHeader>
    );
};

export default Header;

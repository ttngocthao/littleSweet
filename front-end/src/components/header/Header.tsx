import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import {Basket2Fill} from '@styled-icons/bootstrap/Basket2Fill';

const StyledHeader = styled.header`
    color:red;
`;
const BasketIcon = styled(Basket2Fill)`
    width:30px;
    fill: ${theme.colors.second};
`;

const Header = () => {
    return (
        <StyledHeader>
            this is header <a href='/basket' aria-label='shopping basket'><BasketIcon aria-hidden='true'/></a>
            <a href='/products'>View products</a>
        </StyledHeader>
    );
};

export default Header;

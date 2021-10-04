import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import {Basket3} from '@styled-icons/bootstrap/Basket3';

const StyledHeader = styled.header`
    color:red;
`;
const BasketIcon = styled(Basket3)`
    width:30px;
    fill: ${theme.colors.second};
`;

const Header = () => {
    return (
        <StyledHeader>
            this is header <BasketIcon/>
        </StyledHeader>
    );
};

export default Header;

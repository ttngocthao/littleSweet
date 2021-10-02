import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import Title from '../title/Title';
const Wrap = styled.div`
    margin: 0 auto;
    max-width: ${theme.maxScreenWidth};
`;
const Content = styled.div`
    padding: 1rem;
`;

const Contact = () => {
    return (
        <Wrap>
           <Title title='Contact'/> 
           <Content>
               <h3>Thinking about getting a site to sell your products?</h3>
           </Content>
           
        </Wrap>
    );
};

export default Contact;

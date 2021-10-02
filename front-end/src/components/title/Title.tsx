import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';

interface Props{
    title: string
}
const TitleWrap = styled.div`
    width: 100%;
    position: relative;
    max-width: ${theme.maxScreenWidth};
    margin: 0 auto;
    &::before{
        content: '';
        position: absolute;
        width: 100%;
        border-top: 3px dotted ${theme.colors.third} ;
        top:50%;
        transform: translateY(-50%);
        z-index: 0;
       
    }
    &::after{
        content: '';
        width: 2rem;
        height: 100%;
        position: absolute;
        right: 0;
        top:50%;
        transform: translateY(-50%);
        z-index: 0;
        background-color: white;
    }
    h2{
        background-color: white;
        position: relative;
        z-index: 1;
        display: inline-block;
        padding:2rem 1rem;
        color: ${theme.colors.second};

    }
`;
const Title = ({title}:Props) => {
    return (
        <TitleWrap>
            <h2>{title}</h2>
        </TitleWrap>
    );
};

export default Title;

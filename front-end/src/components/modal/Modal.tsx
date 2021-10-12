import React from 'react';
import styled from 'styled-components';
//import { useStore } from '../../storeContext/storeContext';
import { theme } from '../GlobalStyle.css';
import {CloseOutline} from '@styled-icons/evaicons-outline/CloseOutline';
const Wrap = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2000;
    /* display: none;
    &.display{
        display: block;
    } */
`;
const Overlay= styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
`;

const Content = styled.div`
    top:20%;
    left:50%;
    position: absolute;
    background-color: ${theme.colors.main};
    width: 90%;
    max-width: 500px;
    transform: translate(-50%,-20%);
    min-height: 300px;
    border-radius: 1rem;
`;
const CloseIcon = styled(CloseOutline)`
    width: 2rem;
    fill: ${theme.colors.third};
`;
const CloseBtn = styled.button`
    width: 100%;
    text-align: right;
    display: block;
    padding-right: 1rem;
`;
const InnerContent = styled.div`
    background-color: white;
    border-radius: 0.5rem;
    width: 90%;
    height: 100%;
    padding: 1rem;
    margin: 0 auto;
    min-height: 200px;
`;

const Modal = ({children,closeHandler}:{children:React.ReactNode,closeHandler:()=>void}) => {
    // const {modalOpened,toggleModal} = useStore();
    // console.log('modalOpened 2',modalOpened);
        return (
                <Wrap>
                    <Overlay/>
                    <Content>
                        <CloseBtn aria-label='Close Modal' onClick={closeHandler}>
                            <CloseIcon aria-hidden='true'/>
                        </CloseBtn>
                        <InnerContent>
                            {children}
                        </InnerContent>
                          
                    </Content>           
                </Wrap>
            );
   
    
};

export default Modal;

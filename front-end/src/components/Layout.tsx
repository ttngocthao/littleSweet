import React from 'react';
import Seo from './Seo';
import Footer from './footer/Footer';
import Header from './header/Header';
import GlobalStyle from './GlobalStyle.css';
import { BasketContext, useStore} from '../storeContext/storeContext';


import styled from 'styled-components';


const LayoutWrap = styled.section`
  
    margin: 0 auto;
    main{
        padding-top: 90.2px;
         @media only screen and (min-width: 700px){
        padding-top: 175.81px;
     }
    }
`;
interface Props{
    title?:string
    children?: React.ReactNode
  
}


const Layout = ({ title, children }:Props) => {
      const store = useStore(); 
  
    return (
        <BasketContext.Provider value={{...store}}>
            <GlobalStyle />
            <LayoutWrap>
                <Seo title={title} />

                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            
            </LayoutWrap>
        </BasketContext.Provider>
    );
};

export default Layout;

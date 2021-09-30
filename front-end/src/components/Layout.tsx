import React from 'react'
import Seo from './Seo'
import Footer from './footer/Footer'
import Header from './header/Header'
import GlobalStyle from './GlobalStyle.css'

import styled from 'styled-components'
const LayoutWrap = styled.section`
  
    margin: 0 auto;
`
interface Props{
    title?:string
    children: React.ReactNode
}
const Layout = ({ title, children }:Props) => {
    return (
        <>
            <GlobalStyle />
            <LayoutWrap>
                <Seo title={title} />

                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </LayoutWrap>
        </>
    )
}

export default Layout

/* eslint-disable @typescript-eslint/no-unsafe-call */
import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import {Basket2Fill} from '@styled-icons/bootstrap/Basket2Fill';
import { useStore } from '../../storeContext/storeContext';
import {MenuAlt1} from '@styled-icons/heroicons-solid/MenuAlt1';
import LogoImg from '../../images/logo.png';
import {PersonCircle} from '@styled-icons/bootstrap/PersonCircle';
import useScroll from '../../hooks/useScroll';
import AuthForm from '../Profile/AuthForm';


const StyledHeader = styled.header`
   position: fixed;
   top:0;
   right: 0;
   left: 0;
   z-index: 1000;
   background-color: rgba(255,255,255,.8);
`;
const BasketIcon = styled(Basket2Fill)`
    width:2rem;
    fill: ${theme.colors.second};
`;
const BasketButtonWrap = styled.div`
    position: relative;
    .snipcart-items-count{
        position: absolute;
        top:-20px;
        left: 15px;
    }
`;
const MenuButton = styled.button`
    display: block;
     @media only screen and (min-width: 700px){
         display: none;
     }
`;
const MenuIcon = styled(MenuAlt1)`
    width: 2rem;
    fill: ${theme.colors.third};
      @media only screen and (min-width: 700px){
          width: 2.75rem;
      }
`;
const TopBarRightCol = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 120px;
    justify-content: space-between;
    @media only screen and (min-width: 700px){
          max-width: 120px;
      }
`;
const TopBar = styled.div`
   display: flex;
   align-items: center;
   padding:.5rem 1rem ;
   width: 100%;
   justify-content: space-between;
    @media only screen and (min-width: 700px){
        justify-content: flex-end;
        padding:1rem 1rem 0;
    }
`;
const Nav = styled.nav`

`;
const NavListDesktop = styled.ul`
    display: none;
    @media only screen and (min-width: 700px){
        background-color: transparent;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 740px;
        align-items: center;
        &.hide-nav-desktop{
            display: none;
        }
    }
`;
const NavListMobile = styled.ul`
    background-color: ${theme.colors.second};
    padding: 0;
     @media only screen and (min-width: 700px){
         display: none;
     }
`;
const Logo = styled.figure`
    max-width:4rem;
    width: 100%;
     @media only screen and (min-width: 700px){
           max-width:6rem;
           &.mobile{
               display: none;
           }
     }
`;
const NavItem = styled.li`
    transition: .2s;
    padding:0.5rem 1rem;
    a{
        text-decoration: none;
        display: block;
        font-size: 26px;
        font-weight: bold;
        color: white;
       &:hover{
           text-decoration: underline;
       }
    }
     &.active{
            background-color: ${theme.colors.main};
            a{
                color: ${theme.colors.mainTxt};
            }
    }
   
    &.logoItem{
        display: none;
        padding: 0;
    }
    @media only screen and (min-width: 700px){
         &.logoItem{
        display: block;
        }
          padding:0.5rem 0rem;
          min-width: 120px;
          text-align: center;
         &:hover{
               
              border-bottom:2px dotted ${theme.colors.third};
                a{
                     color:${theme.colors.third};
                }
            }
        a{
            color:${theme.colors.second};
           &:hover{
               text-decoration: none;
           }
        }
         &.active{
              border:2px dotted ${theme.colors.third};
         border-left: none;
         border-right:none;
         background-color: transparent;
            a{
                color:${theme.colors.third}
            }
         }
    }
    
`;
const ProfileIcon = styled(PersonCircle)`
    width: 2rem;
     @media only screen and (min-width: 700px){
          width: 2.75rem;
      }
`;
const navItems = [
    {
        name:'Home',
        url:'/',
        orderInList:1
    },
    {
        name:'About',
        url:'/#about',
        orderInList:2
    },
    {
        name:'Products',
        url:'/products',
        orderInList:4
    },
    {
        name:'Contact',
        url:'/#contact',
        orderInList:5
    },
    {
        name:'Logo',
        url:'/',
        orderInList:3
    }
];

const Header = () => {
    //     const value =useStore();
//    const {orders,addOrders,updateOrders} = value;
    const store = useStore();
    const {y,lastY}= useScroll();
    const[pageIsScrollingDown,setPageIsScrollingDown]= useState(false);
    const {itemCount,updateItemCount,toggleModal,modalOpened} = store;
    const [showMenu,setShowMenu]= useState(false);
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
        if(y!==0 && y > lastY){
            setPageIsScrollingDown(true);
          //  console.log('going down?');
        }else{
            setPageIsScrollingDown(false);
        }
   
    },[y]);
    const menuClickHandle =()=>{
        setShowMenu(!showMenu);
    };
   
    return (
        <>
        <StyledHeader>
           
            <TopBar>
                <a href='/' aria-label='Home'>
                   <Logo className={`mobile`}>
                    <img alt='' src={LogoImg as string}/>
                </Logo>  
                </a>
               
                <TopBarRightCol>
                    <button onClick={toggleModal}>
                        <ProfileIcon aria-hidden='true'/>
                    </button>
                    
                     <BasketButtonWrap className="snipcart-summary">
                        <button className="snipcart-checkout" aria-label='shopping basket'><BasketIcon aria-hidden='true'/></button>
                        <span  className="snipcart-items-count">{itemCount}</span>
                    </BasketButtonWrap>
                    <MenuButton onClick={menuClickHandle}>
                        <MenuIcon aria-hidden='true'/>
                    </MenuButton> 
                    
                </TopBarRightCol>
               
            </TopBar>
           {showMenu &&   <Nav role='navigation' aria-label='main navigation'>
                <NavListMobile>
                    {navItems.sort((itemA,itemB)=>itemA.orderInList-itemB.orderInList).filter(item=>item.name!=='Logo').map((item,index)=>{
                       
                           return(
                             <NavItem className={index===0 ? 'active':''} key={index}>
                                <a  href={item.url}>
                                    {item.name}
                                </a>
                            </NavItem>
                        );   
                       
                                             
                    })}
                </NavListMobile>
            </Nav>}
           <NavListDesktop className={pageIsScrollingDown ? 'hide-nav-desktop': ''}>
                    {navItems.sort((itemA,itemB)=>itemA.orderInList-itemB.orderInList).map((item,index)=>{
                        if(item.name==='Logo'){
                            return(
                                <NavItem className='logoItem' key={index}>
                                    <a href={item.url}>
                                        <Logo>
                                            <img alt='' src={LogoImg as string}/>
                                        </Logo>
                                    </a>
                                </NavItem>
                            );
                        }else{
                           return(
                             <NavItem className={index===0 ? 'active':''} key={index}>
                                <a  href={item.url}>
                                    {item.name}
                                </a>
                            </NavItem>
                        );   
                        }
                                             
                    })}
                </NavListDesktop>
           
        </StyledHeader>
        {modalOpened && <AuthForm closeHandler={toggleModal}/>}
        </>
    );
};

export default Header;

import React from 'react';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';
import { IProduct } from './Products';
import {StyledIcon} from '@styled-icons/styled-icon';
import {Star} from '@styled-icons/bootstrap/Star';
import {StarFill} from '@styled-icons/bootstrap/StarFill';
interface Props {
    item: IProduct
}
const Wrap = styled.li`
   max-width: 370px;
    width: 100%;
`;
const ProductName = styled.h3`
    /* width: 90%; */
    margin: 2rem auto 0 1rem;
    top: .5rem;
    box-sizing: content-box;
    padding: .5rem 0 .5rem 1.5rem;
    font-size: 1.25rem;
    position: relative;
    color: white;
   
    background-image: linear-gradient(to right, ${theme.colors.second}, #47a4ab);
    clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 5% 120%, 0 100%);
    &::after{
        content: "";
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: -20px;
    right: 0;
    background-image: linear-gradient(to right, ${theme.colors.second}, #295f63), linear-gradient(to right, #8080805c, #d3d3d35c);
    background-repeat: no-repeat;
    background-size: 5%, auto;
    }
`;
const ProductImg = styled.figure`
    width: 100%;
    margin-bottom: 1rem;
    position: relative;
    z-index: -1;
`;
const Price = styled.div`
   background-color: rgba(0,0,0,.6);
    position: absolute;
    width: 100%;
    bottom: 0;
    color: white;
    left: 0%;
    text-align: center;
    letter-spacing: .2px;
    padding: .25rem;
    font-size: 1.25rem;
`;
const ProductInfo = styled.div`
 border: 2px ${theme.colors.third} dotted;
    border-top: transparent;
    width: 100%;
    margin: 0 auto 2rem;
    box-shadow: 3px 3px 3px lightgrey;
    max-width: 300px;
`;
const StyledBtn = styled.div`
    background-color: ${theme.colors.main};
    border:1px solid ${theme.colors.third};
    min-width: 100px;
    text-align: center;
 
    padding: .25rem;
    border-radius: 0 .5rem;
`;
const ActionBtnGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
   
`;
const RatingWrap = styled.div`
    position: relative;
    margin-left: 33%;
    min-height: 23px;

`;
const OutlineStarsWrap = styled.div`
    position: absolute ;
   top: 0;
   left: 0;
  
`;
const InlineStarsWrap = styled.div`
    position: absolute ;
  top:0;
  left: 0;
    white-space: nowrap;
    overflow: hidden;
  
`;
const OutlineStar = styled(Star)`
    width: ${theme.iconStarWidth} ;
    fill: ${theme.colors.third};
`;

const InnerStar = styled(StarFill)`
    fill: ${theme.colors.third};
    width: ${theme.iconStarWidth} ;
`;



const ProductItem = ({item}:Props) => {
    const {name,id,imageUrl,starRating,price,info,category}=item;
    const reShapeImgUrl='https://raw.githubusercontent.com/ttngocthao/littleSweet/master/back-end'+imageUrl.slice(1);
    const calculateInnerStarsWidth =(ratingPoint:number):string=>{
        //convert to 100% ~ 100px for 5stars
        const width = theme.iconStarWidth.slice(0,2);

        return `${ratingPoint*parseInt(width)}px`;
    };
    const renderStars = (IconComponent:StyledIcon,amount:number)=>{
        const outcome=[];
        for(let i=0;i<amount;i++){
            outcome.push(<IconComponent key={i}/>);
        }
        return outcome;
    };
    return (
        <Wrap>
            <ProductName>{name}</ProductName>
            
            <ProductInfo>
                <ProductImg>
                    <img alt='' src={reShapeImgUrl}/>
                    <Price> £{price}</Price>
                </ProductImg>
              
                <RatingWrap>
                    <OutlineStarsWrap>
                        {renderStars(OutlineStar,5)} 
                      
                    </OutlineStarsWrap>
                    <InlineStarsWrap style={{width:calculateInnerStarsWidth(starRating)}}>                       
                        {renderStars(InnerStar,5)}
                    </InlineStarsWrap>
                </RatingWrap>
                
                <ActionBtnGroup>
                    <StyledBtn onClick={()=>alert('Details')}>Details</StyledBtn>
                    <StyledBtn onClick={()=>alert('Added')}>Add to basket</StyledBtn>
                </ActionBtnGroup>
            </ProductInfo>    
        </Wrap>
    );
};
/**
 * <div class="item">
                <h3 class="flag cakeName">Mermaid</h3>
                <div class="wrapper">
                    <div class="cakeImg"><img src="./images/CH/mermaid1.jpg"></div>
                    <div class="starsOuter"><div class="starsInner" style="width: 100%;"></div></div>
                    <h5>Price: £26</h5>
                    <div class="infoBtn" id="infoBtnch1"><i class="fas fa-question"></i></div>
                    <div class="addToCartBtn" dataid="ch1" dataname="Mermaid" dataprice="26" dataimg="./images/CH/mermaid1.jpg"><i class="fas fa-cart-plus"></i></div> 
                </div>
                <div id="infoBoxch1" class="infoBox">
                    <div class="infoContent">
                        <span class="closeBtn" id="closeBtnch1">×</span>
                        <h3>Mermaid</h3>
                        <div class="cakeImg"><img src="./images/CH/mermaid1.jpg"></div>
                        <div class="infoStarsOuter"><div class="infoStarsInner" style="width: 100%;"></div></div>
                        <h5>Price: £26</h5>
                        <p>This rippled mermaid buttercream cake is decorated with golden shells, pastel sea horses, pearlescent meringue kisses and topped with a blue mermaid tail. Delectable mermaid cakes are sure to tickle your taste buds for any occasion! Planning a mermaid party? The party is not complete without a mermaid cake!</p>
                    </div>
                </div>
            </div>
 * 
 */
export default ProductItem;

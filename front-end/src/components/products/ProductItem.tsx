import React from 'react';
import { IProduct } from './Products';

interface Props {
    item: IProduct
}


const ProductItem = ({item}:Props) => {
    const {name,id,imageUrl,starRating,price,info,category}=item;
    return (
        <li>
            <h3>{name} - £{price}</h3>
            <div className='productInfo'>
                <figure>
                    <img alt='' src={imageUrl}/>
                </figure>
                <p>Rating {starRating}</p>
                <div className='btnGroup'>
                    <button onClick={()=>alert('Details')}>Product Detail</button>
                    <button onClick={()=>alert('Added')}>Add to basket</button>
                </div>
            </div>    
        </li>
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

import React from 'react';
import { IOrder } from '../../utils/snipcart';
import OrderItem from './OrderItem';


const OrderList = ({data}:{data:IOrder[]}) => {

   

    return (
        <ul>
            {data.length!==0 ? data.map(item=><OrderItem key={item.token} item={item}/>):'No purchase history'}
            
        </ul>
    );
};

export default OrderList;

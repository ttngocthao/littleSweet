import React from 'react';
import { IDetail } from '../../utils/snipcart';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';


export const ProductImg = styled.img`
    max-width: 100px;
    display: block;
`;
const Table = styled.table`
    display: none;
    width: 100%;
    max-width: 900px;
    margin:0 auto;
     border-collapse: collapse;
    tr{
        border-bottom: 1px solid ${theme.colors.second};
       
    }
    td{
        padding:1rem 0;
    }
@media only screen and (min-width: 700px){
          display:table;
      }
`;
const OrderDetailsDesktop = ({details}:{details:IDetail[]}) => {
    return (
         <Table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Price/Unit</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        { details.map(i=><tr key={i.uniqueId}>
                            <td >
                                <ProductImg src={i.image} alt={i.name}/>
                            </td>
                            <td>
                                {i.name}
                            </td>
                            <td>
                                £{i.price}
                            </td>
                            <td>
                                x{i.quantity}
                            </td>
                            <td>
                                £{i.totalPrice}
                            </td>
                        </tr>) }
                    </tbody>
                </Table>
    );
};

export default OrderDetailsDesktop;

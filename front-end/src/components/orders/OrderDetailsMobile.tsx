import React, { Fragment } from 'react';
import { IDetail } from '../../utils/snipcart';
import { ProductImg } from './OrderDetailsDesktop';
import styled from 'styled-components';
import { theme } from '../GlobalStyle.css';

const Table = styled.table`
    display: table;
    width: 100%;
   max-width: 400px;
   margin: 0 auto;
    border-collapse: collapse;
    tr{
         border-bottom: 1px solid ${theme.colors.second};
        
    }
    td{
        padding: 0.5rem 0;
    }
    @media only screen and (min-width: 700px){
          display:none;
      }
`;
const OrderDetailsMobile = ({details}:{details:IDetail[]}) => {
    return (
        <Table>
            <tbody>
                 {details.map((i)=><Fragment key={i.uniqueId}>
               <tr>
                <th>Name</th>
                <td>{i.name}</td>
            </tr>
            <tr>
                <th>Image</th>
                <td><ProductImg  src={i.image} alt={i.name}/></td>
            </tr>
            
             <tr>
                <th>Price/Unit</th>
                <td>£{i.price}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>x{i.quantity}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>£{i.totalPrice}</td>
            </tr>
           
           </Fragment>)}
            </tbody>
          
        </Table>
    );
};

export default OrderDetailsMobile;

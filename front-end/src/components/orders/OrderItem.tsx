import React, { useState ,useEffect} from 'react';
import styled from 'styled-components';
import {ChevronDown} from '@styled-icons/octicons/ChevronDown';
import { theme } from '../GlobalStyle.css';
import { IOrder,getOrderDetails, IDetail } from '../../utils/snipcart';
import OrderDetailsDesktop from './OrderDetailsDesktop';
import OrderDetailsMobile from './OrderDetailsMobile';

const ChevronDownIcon =styled(ChevronDown)`
    width: 1.75rem;
`;
const OrderLi = styled.li`
    margin: 0 auto 1rem;
`;
const TopContent = styled.div`
 padding:.5rem 1rem;
   max-width: 900px;
   margin: 0 auto;
    background-color: ${theme.colors.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const DetailContent = styled.div`
     padding:.5rem 1rem;
`;



const OrderItem = ({item}:{item:IOrder}) => {

     const displayDate =(date:string)=>{
        return new Date(date).toLocaleDateString();
    };
    const [showDetails,setShowDetails]= useState(false);
    const [details,setDetails] = useState<IDetail[]>([]);
    useEffect(() => {
        const init = async()=>{
          const data= await getOrderDetails(item.token);
            if(data?.length!==0){
                setDetails(data as IDetail[]);
            }
        };
       void init();
    }, []);
    
    return (

        <OrderLi>
            <TopContent>
                <p>{displayDate(item.creationDate)}:  £{item.finalGrandTotal} - {item.invoiceNumber}</p>
                <button onClick={()=>setShowDetails(!showDetails)}><ChevronDownIcon/></button>
            </TopContent>
            {showDetails && details.length!==0 && <DetailContent>
                <OrderDetailsDesktop details={details}/>
                <OrderDetailsMobile details={details}/>
            </DetailContent> }
            
        </OrderLi>
    );
};

export default OrderItem;

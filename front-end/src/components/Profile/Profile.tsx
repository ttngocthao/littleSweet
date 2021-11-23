import React,{useEffect, useState} from 'react';
// import {RouteComponentProps} from '@reach/router';
import { logoutAccount,getUser, updateCurrentUserProfile} from '../../utils/users';
import { IOrder,getSnipcartOrders,getSnipcartUser } from '../../utils/snipcart';
import { navigate } from 'gatsby-link';
import {PersonCircle} from '@styled-icons/bootstrap/PersonCircle';
import styled from 'styled-components';

import HeroImg from '../../images/profile-hero.jpg';
import OrderList from '../orders/OrderList';

const PersonDetails = styled.div`

`;
const ProfileIcon = styled(PersonCircle)`
    width: 2.75rem;
   
`;
const ProfileAvatar = styled.figure`
    width: 2.75rem;
   
`;
const PurchaseHistory = styled.div`

`;
const MainContent = styled.div`

`;






const Profile = () => {
    const logoutHandle =async()=>{
        await logoutAccount();
        void navigate('/app/signin');
    };
  

   
   const [data,setData] = useState<IOrder[]>([]);
   const [user,setUser] = useState(getUser());
  

    useEffect(()=>{      
        const init =  async()=>{
             const snipcartUser =user?.email && await getSnipcartUser(user.email);//call snipcart API to get current user

            if(snipcartUser){
                const {snipcartUserId,snipcartUsername} = snipcartUser;
                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                const ordersData = await getSnipcartOrders(snipcartUserId);         
                //if firebase name is empty, use snipcart username
                if(user?.displayName===null){
                    await updateCurrentUserProfile({displayName:snipcartUsername});//this will update FB and local storage
                    setUser(getUser());//get updated profile from local storage
                }
                setData(ordersData as IOrder[]);
            }
        };

        void init();  
            
        
    },[]);
   
  
    return (
        <div>
            <figure>
                <img src={HeroImg as string} alt=''/>
            </figure>
         
            <MainContent>
                 <PersonDetails>
                <div>
                  {user?.photoUrl ? ProfileAvatar :<ProfileIcon/>}   
                  <button style={{border:'1px solid red'}} onClick={logoutHandle}>log out</button>
                 
                </div>
               
                <p>{user?.displayName ? user.displayName : 'Customer Name'}</p>
                <p>{user?.email}</p>
            </PersonDetails>
            <PurchaseHistory>
                <h6>List of orders here</h6>
                <OrderList data={data}/>
            </PurchaseHistory>
            </MainContent>
           
               
        </div>
    );
};

export default Profile;
//https://github.com/reach/router/issues/141
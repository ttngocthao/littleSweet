import React,{useEffect, useState} from 'react';
import { useStaticQuery,graphql } from 'gatsby';
import { logoutAccount,getUser, updateCurrentUserProfile} from '../../utils/users';
import { IOrder,getSnipcartOrders,getSnipcartUser } from '../../utils/snipcart';
import { navigate } from 'gatsby-link';
import {PersonCircle} from '@styled-icons/bootstrap/PersonCircle';
import styled from 'styled-components';
import{ IGatsbyImageData,getImage } from 'gatsby-plugin-image';
import { StyledBtn } from '../products/ProductItem';
import OrderList from '../orders/OrderList';
import Hero from '../hero/Hero';
import Title from '../title/Title';
import { theme } from '../GlobalStyle.css';

const TopContent = styled.div`
    max-width: 940px;
    margin: 0 auto;
    padding:1rem;
    display:flex;
    justify-content: space-between;
`;
const PersonInfo = styled.div`
   display: flex;
   flex-direction: column;
     @media only screen and (min-width: 700px){
         flex-direction: row;
     }
`;
const ProfileIcon = styled(PersonCircle)`
    width: 2.75rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
`;
const ProfileAvatar = styled.figure`
    width: 2.75rem;
    fill: ${theme.colors.third};
`;


const OrderHistoryTitle = styled(Title)`
    max-width: 940px;
`;

const LogoutBtn = styled(StyledBtn)`
    justify-self:flex-end;
    height: 50px;
`;


const Profile = () => {
    const logoutHandle =async()=>{
        await logoutAccount();
        void navigate('/app/signin');
    };
  const hero:{file:IGatsbyImageData} = useStaticQuery(graphql`
        {
        
        file(name: {eq: "pastry"}) {
                childImageSharp {
                gatsbyImageData(
                    blurredOptions: {toFormat: NO_CHANGE}
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                )
                }
            }
        }
    `);
    
    const heroImage = getImage(hero.file) as IGatsbyImageData;

   
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
            <Hero image={heroImage} text='Profile'/>
            <TopContent> 
                <PersonInfo>   
                {user?.photoUrl ? ProfileAvatar :<ProfileIcon/>}  
                <div>
                    <p>{user?.displayName ? user.displayName : 'Customer Name'}</p>
                    <p>{user?.email}</p>
                </div>                 
                </PersonInfo>
                <LogoutBtn onClick={logoutHandle}>log out</LogoutBtn>
            </TopContent>            
            <OrderHistoryTitle title='Order History'/>
            <OrderList data={data}/>
        </div>
    );
};

export default Profile;
//https://github.com/reach/router/issues/141
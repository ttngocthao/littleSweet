import React ,{useEffect,useState} from 'react';
import {Router} from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import SignIn from '../components/Profile/SignIn';
import PrivateRoute from '../components/PrivateRoute';

// import { isLoggedIn,isBrowser } from '../utils/users';
// import { navigate } from 'gatsby-link';

const app = () => {
//    const [pathname,setPathname]=useState('');
//     useEffect(() => {
//        if(isBrowser()){
//           setPathname(window.location.pathname) ;
//        }
//     }, []);
    return (
        <Layout>
            <Router>
               
                      <PrivateRoute location={{pathname:'/app/profile'}} path="/app/profile" component={Profile} />
                {/* <Profile path='/app/profile'/> */}
                <SignIn  path='/app/signin'/>
    
                
              
                
            </Router>
        </Layout>
    );
};

export default app;

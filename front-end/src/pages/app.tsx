import React  from 'react';
import {Router} from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import SignIn from '../components/Profile/SignIn';
import PrivateRoute from '../components/PrivateRoute';




const app = () => {

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

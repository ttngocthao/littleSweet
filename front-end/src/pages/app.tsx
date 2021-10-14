import React from 'react';
import {} from 'gatsby';
import {Router,RouteComponentProps} from '@reach/router';
import Layout from '../components/Layout';
import Profile from '../components/Profile/Profile';
import { Login } from '@styled-icons/entypo';

const app = () => {
    return (
        <Layout>
            <Router>
                <Profile path='/app/profile'/>
                <Login path='/app/login'/>
            </Router>
        </Layout>
    );
};

export default app;

import React from 'react';

import { navigate } from 'gatsby-link';
import { isLoggedIn } from '../utils/users';

interface Props {
component: React.FunctionComponent,
location:{pathname:string}
}

const PrivateRoute = ({ component: Component, location, ...rest }:Props) => {
   
   
    if(!isLoggedIn() && location.pathname!=='/app/login'){
       void navigate('/app/login');
    }
   
    return (
        <Component {...rest} />
    );
};

export default PrivateRoute;

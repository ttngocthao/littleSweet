import React from 'react';
import { navigate } from 'gatsby-link';
import { checkCurrentUser } from '../utils/users';

const PrivateRoute = () => {
    const isSignedIn = checkCurrentUser();
    if(!isSignedIn && location.pathname!==`/app/login`){
        navigate('/app/login');
        return null;
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

import React from 'react';
// import {RouteComponentProps} from '@reach/router';
import { logoutAccount } from '../../utils/users';
import { navigate } from 'gatsby-link';



const Profile = () => {
    const logoutHandle =async()=>{
        await logoutAccount();
        void navigate('/app/signin');
    };
    return (
        <div>
            <h1>your profile should be here</h1>
                 <button style={{border:'1px solid red'}} onClick={logoutHandle}>log out</button>
        </div>
    );
};

export default Profile;
//https://github.com/reach/router/issues/141
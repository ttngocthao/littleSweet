import React from 'react';
// import {RouteComponentProps} from '@reach/router';
import { logoutAccount } from '../../utils/users';
const Profile = () => {
    return (
        <div>
            <h1>your profile should be here</h1>
                 <button style={{border:'1px solid red'}} onClick={logoutAccount}>log out</button>
        </div>
    );
};

export default Profile;
//https://github.com/reach/router/issues/141
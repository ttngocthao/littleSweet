import React from 'react';
import Modal from '../modal/Modal';

const AuthForm = ({closeHandler}:{closeHandler:()=>void}) => {
    return (
        <Modal closeHandler={closeHandler}>
            <h5>This is form</h5>
        </Modal>
    );
};

export default AuthForm;

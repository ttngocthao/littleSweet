/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react';
import Layout from '../components/Layout';
import firebase from "gatsby-plugin-firebase";
//import {Auth,UserCredential,signInWithEmailAndPassword} from 'firebase/auth';


const Basket = () => {
    // const createAccount =()=>{
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     const auth = firebase;
    //   // const result = await signInWithEmailAndPassword(auth as Auth,"test1@yahoo.com","test1@yahoo.com");
    //    console.log(auth);
    // };
    return (
        <Layout> 
            <div>
                <h1>Your shopping basket</h1>
                <button onClick={()=>alert('create account')}>
                    create account
                </button>
            </div>
        </Layout>
       
    );
};

export default Basket;

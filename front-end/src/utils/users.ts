/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';


 const formInputs = {
     email:'jane_doe@mail.com',
     password:'1234567890'
 };
 const {email,password}=formInputs;   


const createAccount = async()=>{ 
    try {
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    console.log('account created',userCredential);
    return userCredential;
    } catch (error) {
       
          //   console.log('createAccount error', '+',error.code,'+',error.message);
        return error;    
    
        
    }  
    
};
const signInAccount = async()=>{
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        console.log('signed in',userCredential);
        return userCredential;
    } catch (error) {
    //     const errorCode = error.code;
    // const errorMessage = error.message as string;
    console.log('signInAccount error',error);
        return error;
    }
   
};
const logoutAccount = async()=>{
    const res = await signOut(auth);
    console.log('signed out',res);
    return res;
};
const checkCurrentUser =()=>{
    const currentUser = auth.currentUser;
    if(currentUser){
       console.log('user is signed in',currentUser); 
    }else{
        console.log('no user is signed in',currentUser);
    }
    return currentUser;
};
export {createAccount,signInAccount,logoutAccount,checkCurrentUser};
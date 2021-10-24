/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,AuthError,UserCredential} from 'firebase/auth';

export const isBrowser = () => typeof window !== "undefined";

 const formInputs = {
     email:'jane_doe@mail.com',
     password:'1234567890'
 };
 const {email,password}=formInputs;   
interface IUser{
    email:string|null
    displayName:string|null
    photoUrl:string|null
}

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
export interface IErrorRes {
    status:number
    code:string
    message:string
    // userCredential?:UserCredential
}
export interface IUserCredentialRes{   
    userCredential:UserCredential
    // status?:number
    // code?:string
    // message?:string
}
const signInAccount = async({email,password}:{email:string,password:string}):Promise<UserCredential|IErrorRes>=>{
    try {
        const userCredential = await signInWithEmailAndPassword(auth,email,password);
        console.log('signed in',userCredential);
         setUser({
           email: userCredential.user.email,
           displayName: userCredential.user.displayName,
           photoUrl:userCredential.user.photoURL
       });
        return userCredential;
    } catch (error:unknown|AuthError){
        const errorAuth = error as AuthError;        
        return {status:400,code:errorAuth.code,message:errorAuth.message};
    }
   
};
const logoutAccount = async()=>{
    const res = await signOut(auth);
    console.log('signed out',res);
    setUser(null);
    return res;
};



const getUser =():IUser|null=>{
   
    if(isBrowser() && window.localStorage.getItem("LSB-User")!==null){       
        const obj = JSON.parse(window.localStorage.getItem("LSB-User") as string);
      return  obj as IUser;
    }
    // if(auth.currentUser){
    //     const currentUser ={
    //            email: auth.currentUser.email,
    //        displayName: auth.currentUser.displayName,
    //        photoUrl:auth.currentUser.photoURL
    //     };
    //     setUser(currentUser);
    //     return currentUser;
    // }
    return null;
   
};//get user from localStorage--> for isLoggedIn method.

const setUser =(user: IUser|null)=>{
     window.localStorage.setItem("LSB-User", JSON.stringify(user));
};//run when login and log out.

const isLoggedIn =():boolean=>{
    const currentUser = getUser();
    
    if(currentUser){
        return true;
    }
    return false;
};
export {createAccount,signInAccount,logoutAccount,isLoggedIn};
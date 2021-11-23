/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// if(typeof window !== `undefined`){
    
// }
import { auth} from "./firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,AuthError,UserCredential,updateProfile} from 'firebase/auth';


export const isBrowser = () => typeof window !== "undefined";

//  const formInputs = {
//      email:'jane_doe@mail.com',
//      password:'1234567890'
//  };
   
interface IUser{
    email:string|null
    displayName:string|null
    photoUrl:string|null
}
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
const createAccount = async({email,password}:{email:string,password:string}):Promise<UserCredential|IErrorRes>=>{ 
    try {
        
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    console.log('account created',userCredential);
     setUser({
           email: userCredential.user.email,
           displayName: userCredential.user.displayName,
           photoUrl:userCredential.user.photoURL
       });
    return userCredential;
    } catch (error:unknown|AuthError) {
       
         const errorAuth = error as AuthError;        
        return {status:400,code:errorAuth.code,message:errorAuth.message};
    
        
    }  
    
};

const signInAccount = async({email,password}:{email:string,password:string}):Promise<UserCredential|IErrorRes>=>{
    try {
        if(!isBrowser()){
           return {status:400,code:'',message:'window is not ready'};
        }
       
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

const updateCurrentUserProfile = async({displayName,photoURL}:{displayName?:string,photoURL?:string})=>{
    if(!auth.currentUser) return;
    try {
        await updateProfile(auth.currentUser,{
            displayName: displayName && displayName,
            photoURL: photoURL && photoURL
        });

        setUser({        
           displayName: auth.currentUser.displayName ,
           photoUrl:auth.currentUser.photoURL,
           email: auth.currentUser.email
       });

    } catch (error) {
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
   
    if(isBrowser()  ){  

        const obj = JSON.parse(window.localStorage.getItem("LSB-User") as string);
      return  obj as IUser;
    }
   
    return null;
   
};//get user from localStorage--> for isLoggedIn method.

const setUser =(user: IUser|null)=>{
    if(isBrowser()){
         window.localStorage.setItem("LSB-User", JSON.stringify(user));
    }
    
};//run when login and log out.

const isLoggedIn =()=>{
   if (!isBrowser()) return false;
    const currentUser = getUser();
    
    console.table(currentUser);
    return !!currentUser;
};
export {createAccount,signInAccount,logoutAccount,isLoggedIn,getUser,updateCurrentUserProfile};
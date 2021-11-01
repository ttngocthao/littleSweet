import {initializeApp} from "firebase/app";
//import {getFirestore} from 'firebase/firestore';
import {getAuth,Auth} from 'firebase/auth';

const config = {
     apiKey: "AIzaSyC8t5fcjctNhWp8Qk2nGWkzLYNHshjVrAw",
  authDomain: "little-sweet-82aa6.firebaseapp.com",
  projectId: "little-sweet-82aa6",
  storageBucket: "little-sweet-82aa6.appspot.com",
  messagingSenderId: "122014673849",
  appId: "1:122014673849:web:d27e83c86d74f97875a468",
  measurementId: "G-QLK3DGSX7E"
};

//if(!firebase.apps.length) ..not sure why the tutorial do it this way

initializeApp(config);//initialise the app 
let auth:Auth;
//let firestore;
if (typeof window !== 'undefined'){
 auth = getAuth() ; //create an instance of authentication
 //firestore = getFirestore(); //create an instance of firestore
}


export {auth};
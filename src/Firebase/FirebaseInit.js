import { initializeApp } from "firebase/app";
import firebaseConfig from './FirebaseConfig';
const initFirebase =() =>{
    initializeApp(firebaseConfig);
}

export default initFirebase;
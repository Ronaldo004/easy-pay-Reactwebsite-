import { createContext,useContext } from "react";
import {initializeApp} from 'firebase/app';
import {getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {getDatabase,set,ref} from 'firebase/database'
const firebaseConfig={
    apiKey: "AIzaSyAfaN4-dE9ngLV9R2IQI3fP5Q9QiCGW6d0",
    authDomain: "reactfirebaseweb-b9bd5.firebaseapp.com",
    databaseURL: "https://reactfirebaseweb-b9bd5-default-rtdb.firebaseio.com",
    projectId: "reactfirebaseweb-b9bd5",
    storageBucket: "reactfirebaseweb-b9bd5.appspot.com",
    messagingSenderId: "225915900847",
    appId: "1:225915900847:web:dcdb6afe0a34788a11955a",
    databaseURL:"https://reactfirebaseweb-b9bd5-default-rtdb.firebaseio.com/"

    
}
const firebaseApp =initializeApp(firebaseConfig);
const auth=getAuth(firebaseApp);
const database=getDatabase(firebaseApp);
const FirebaseContext =createContext(null)
export const useFirebase =()=>useContext(FirebaseContext)

export const FirebaseProvider = (props) =>{
    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }
    const signin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInuser=(user)=>{
        return onAuthStateChanged(auth,user)
    }
    const signOutu=()=>{
      return signOut(auth);
    }
    const googleprovider=new GoogleAuthProvider();
    const signupWithgoogle=()=>{signInWithPopup(auth,googleprovider)}
    const putData=(key,data)=>set(ref(database,key),data);
    
    return(
        <FirebaseContext.Provider
        value={{signup,putData,signin,signInuser,signOutu,signupWithgoogle}}>
           
            {props.children}
        </FirebaseContext.Provider>
    )
}
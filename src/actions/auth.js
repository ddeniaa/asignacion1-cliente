
import { facebookAuthProvider, firebase, googleAuthProvider }  from '../firebase/firebaseConfig'
import { types } from '../types/types';
import { Link } from 'react-router-dom';


//accion  auth de google:
export const startGoogleLogin = () =>{
    return( dispatch ) =>{

        firebase.auth().signInWithPopup( googleAuthProvider )
        .then (  ({ user }) => {
           dispatch (
               login( user.uid, user.displayName),
           )
        });
    }
}

//accion auth de facebook: 
export const startFacebookLogin = () =>{
    return( dispatch ) =>{

        firebase.auth().signInWithPopup( facebookAuthProvider )
        .then (  ({ user }) => {
           dispatch (
               login( user.uid, user.displayName),  
           )
        });
    }
}

export const login = (uid, displayName) =>({
    type: types.login,
    payload:{
        uid,
        displayName
    }
})


//asincrono:
export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        
    } 
}

export const logout = () => ({
    type: types.logout
})
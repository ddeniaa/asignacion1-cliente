
import { facebookAuthProvider, firebase, googleAuthProvider }  from '../firebase/firebaseConfig'
import { types } from '../types/types';


//accion  auth de google:
export const startGoogleLogin = () =>{
    return( dispatch ) =>{

        firebase.auth().signInWithPopup( googleAuthProvider )
        .then (  ({ user }) => {
           dispatch (
               login( user.uid, user.displayName),
               window.location.href = `https://commerce-app.herokuapp.com/user`
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
               window.location.href = `https://commerce-app.herokuapp.com/user`
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
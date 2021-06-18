
import { db, facebookAuthProvider, firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types';



//accion  auth de google:
export const startGoogleLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName),
                )
            });
    }
}

//accion auth de facebook: 
export const startFacebookLogin = () => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName),
                )
            });
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})


//asincrono:
export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());

    }
}

export const logout = () => ({
    type: types.logout
})


export const startComment = ({ decripComentario, calificacionUsuario }, name, id, ) => {
    return async (dispatch) => {

        const newComment = {
            decripComentario: decripComentario,
            name: name,
            id: id,
            calificacionUsuario: calificacionUsuario
        }

        const doc = await db.collection(`comments`).add(newComment);

        dispatch(addNewComm(doc.id, newComment));

    }
}


export const addNewComm = (id, newCom) => ({
    type: types.addcomment,
    payload: {
        id, ...newCom
    }
})
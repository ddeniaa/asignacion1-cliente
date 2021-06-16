import React from 'react'
import { useDispatch } from 'react-redux';
import { startFacebookLogin, startGoogleLogin } from '../actions/auth';



export const LoginScreen = () => {

    const dispatch = useDispatch(); 



 //handleGoogleLogin

 const handleGoogleLogin =() =>{
    dispatch ( startGoogleLogin() );   
}


//handleFacebookLogin

const handleFacebookLogin =() =>{
    dispatch ( startFacebookLogin() );
}


    return (
        <div className="box-container">

            <h2 className="login-tittle">Login</h2>
            <form  
           
            className="animate__animated animate__fadeIn animate__faster"
            >

            <div className="auth__social-networks">
                    <p>Login with social networks</p>

                    <div 
                    className="google-btn"
                    onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                        <i className="fab fa-google"></i>
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>

                    <div className="facebook-btn"
                    onClick={ handleFacebookLogin }
                    >
                        <div className="facebook-icon-wrapper">
                        <i className="fab fa-facebook-square"></i>
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Facebook</b>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}

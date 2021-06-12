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
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>

                    <div className="facebook-btn"
                    onClick={ handleFacebookLogin }
                    >
                        <div className="facebook-icon-wrapper">
                            <img className="facebook-icon" src="https://img-premium.flaticon.com/png/512/174/174848.png?token=exp=1623048364~hmac=8de42b292833c3892bd5a2a38fd11b02" alt="facebook button" />
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

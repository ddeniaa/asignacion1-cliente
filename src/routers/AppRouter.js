import React, { useEffect, useState } from 'react';
import { LoginScreen } from '../login/LoginScreen';
import { firebase } from '../firebase/firebaseConfig';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { DashboardRoutes } from './DashboardRoutes';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { UserScreen } from '../user/UserScreen';
import { PrivateRoute } from './PrivateRouter';





export const AppRouter = () => {

  //dispatch
  const dispatch = useDispatch();


  //estado local para saber si el usuario se encuentra autenticado:
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);





  //efecto cuando el estado de la autenticación cambia:
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

      } else {
        setIsLoggedIn(false);

      }
      setCheking(false);

    });

  }, [dispatch, setCheking, setIsLoggedIn])

  if (cheking) {
    return (
      <div className="text-center">
        <div className="spinner-border  m-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }



  return (
    <Router>
      <div >

        <Switch>
          <Route
          exact path="/login" component={LoginScreen} />

          <PrivateRoute
            exact
            isAuthenticated={isLoggedIn}
            path="/user" 
            component={UserScreen} 
          
            />


          <Route
            path="/"
            component={DashboardRoutes}
          />

        </Switch>
      </div>
    </Router>

  )
}

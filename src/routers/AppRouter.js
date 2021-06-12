import React  from 'react';
import { LoginScreen } from '../login/LoginScreen';
// import { firebase } from '../firebase/firebaseConfig';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import { DashboardRoutes } from './DashboardRoutes';
// import { useDispatch } from 'react-redux';
// import { login } from '../actions/auth';


export const AppRouter = () => {

//   //dispatch
// const dispatch = useDispatch();

// //efecto cuando el estado de la autenticación cambia:
// useEffect (() => {
//   firebase.auth().onAuthStateChanged( (user) => {

//     if (user?.uid) {
//       dispatch(login(user.uid, user.displayName));
//     }
//   });

// }, [dispatch])


  return (
    <Router>
      <div >

        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route
            path="/"
            component={DashboardRoutes}
          //   isAuthenticated = { user.logged }
          />
        </Switch>
      </div>
    </Router>

  )
}

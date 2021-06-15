import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CatalogoScreen } from '../components/catalogo/CatalogoScreen';
import { BookScreen } from '../components/books/BookScreen';
import { CalificacioneScreen } from '../components/calificaciones/CalificacioneScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';
import { UserScreen } from '../user/UserScreen';
import { CalificacionDesc } from '../components/calificaciones/CalificacionDesc';
import { CalificacionAsc } from '../components/calificaciones/CalificacionAsc';




export const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="https://commerce-app.herokuapp.com//" component= { HomeScreen } />
                <Route path="https://commerce-app.herokuapp.com//catalogo" component= { CatalogoScreen } />
                <Route exact path="https://commerce-app.herokuapp.com//calificaciones" component= { CalificacioneScreen } />
                <Route exact path="https://commerce-app.herokuapp.com//calificacionDesc" component= { CalificacionDesc } />
                <Route exact path="https://commerce-app.herokuapp.com//calificacionAsc" component= { CalificacionAsc } />
                <Route exact path="https://commerce-app.herokuapp.com//search" component= { SearchScreen } />
                <Route path="https://commerce-app.herokuapp.com//book/:id" component= { BookScreen } />
                <Route exact path="https://commerce-app.herokuapp.com//user" component= { UserScreen } />
               <Redirect to="https://commerce-app.herokuapp.com//" />
            </Switch>
        </div>
        </>
    )
}

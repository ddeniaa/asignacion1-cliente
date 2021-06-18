import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { CatalogoScreen } from '../components/catalogo/CatalogoScreen';
import { BookScreen } from '../components/books/BookScreen';
import { CalificacioneScreen } from '../components/calificaciones/CalificacioneScreen';
import { HomeScreen } from '../components/home/HomeScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../login/LoginScreen';


 

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="/" component= { HomeScreen } />
                <Route exact path="/catalogo" component= { CatalogoScreen } />
                <Route exact path="/calificaciones" component= { CalificacioneScreen } />
                <Route exact path="/search" component= { SearchScreen } />
                <Route path="/book/:id" component= { BookScreen } />
                <Route exact path="/login" component={LoginScreen}/>
               <Redirect to="/" />
            </Switch>
        </div>
        </>
    )
}

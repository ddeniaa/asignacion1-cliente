import React from 'react'
import { Link, NavLink } from 'react-router-dom';



export const Navbar = () => {
    

    return (
        <nav id="navar" className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="https://commerce-app.herokuapp.com/"
            > Home
                    </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="https://commerce-app.herokuapp.com/catalogo"
                    > Catálogo
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="https://commerce-app.herokuapp.com/calificaciones"
                    >Calificaciones
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="https://commerce-app.herokuapp.com/search"
                    >Buscar
                    </NavLink>
                </div>
            </div>

            <form className="d-flex">
               
                    <Link
                        type="button"
                        className="navbar-brand"
                        to="https://commerce-app.herokuapp.com/login"
                    > login
                    </Link>
                    
            </form>

        </nav>
    )
}

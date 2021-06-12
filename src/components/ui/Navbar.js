import React from 'react'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';






export const Navbar = () => {


    //nombre de usaurio:
    const { name } = useSelector(state => state.auth);




    return (
        <nav id="navar" className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand"
                to="/"
            > Home
                    </Link>


            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/catalogo"
                    > Catálogo
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/calificaciones"
                    >Calificaciones
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link"
                        exact
                        to="/search"
                    >Buscar
                    </NavLink>
                </div>
            </div>

            <form className="d-flex">
                <ul className="navbar-nav l-auto">
                    <span className="nav-item nav-link"
                    > {name}
                    </span>


                    <Link
                        type="button"
                        className="navbar-brand"
                        to="/login"
                    > login
                    </Link>
                </ul>
            </form>

        </nav>
    )
}

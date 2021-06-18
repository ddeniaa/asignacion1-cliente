import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';



export const Navbar = () => {
    const dispatch = useDispatch();

    //dispara la accion de logout
    const hanleLogout = () => { 
        dispatch(startLogout())
    }
    

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
               
                    {/* <Link
                        type="button"
                        className="navbar-brand"
                        to="/login"
                    > login
                    </Link> */}

                    <Link
                        className="btn-logout"
                        onClick={hanleLogout}
                        type="button"
                        to="/"
                    > <i className="fas fa-sign-out-alt fa-1x "></i>
                    </Link>
                    
            </form>

        </nav>
    )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';


export const Sidebar = () => {

    const dispatch = useDispatch();


    //nombre de usaurio:
    const { name } = useSelector(state => state.auth);



    //dispara la accion de logout
    const hanleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div>
            <aside className="sidebar">

                <div className="sidebar-navbar">
                    <h3 className="mt-5">
                        <i className="far fa-user"></i>
                        <span> {name}</span>
                    </h3>

                    <Link
                        className="btn-logout"
                        onClick={hanleLogout}
                        type="button"
                        to="/"
                    > <i className="fas fa-sign-out-alt fa-2x mt-5"></i>
                    </Link>
                </div>

                <hr/>


                <div className="container-main">
                    <div className="row">
                        <div className="col">
                        <i className="fas fa-heart fa-2x mt-5"></i>
                        <p className="mt-5">
                         Favoritos
                        </p>
                        </div>
                        <div className="col">
                        <i className="fas fa-plus-circle fa-2x mt-5"></i>
                        <p className="mt-5">
                         Agregar a la lista
                        </p>
                        </div>
                        <div className="col">
                        <i className="fas fa-comments fa-2x mt-5"></i>
                        <p className="mt-5">
                         Comentar
                        </p>
                        </div>
                    </div>
                </div>


                {/* <JournalEntries /> */}

            </aside>

        </div>
    )
}

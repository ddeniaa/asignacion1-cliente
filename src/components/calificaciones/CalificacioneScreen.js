import React from 'react'
import { Link } from 'react-router-dom';



export const CalificacioneScreen = () => {


    return (
        <div>
            <h1>Calificaciones</h1>
            <hr />
            <p><li>Se muestran los libros con mayor calificación:</li></p>
            <Link  className="btn btn-light" to="/calificacionDesc">
                <i className="fas fa-sort-amount-up-alt"></i>
            </Link>
            <hr />
            <hr />
            <p><li>Se muestran los libros con menor calificación:</li></p>
            <Link  className="btn btn-light" to="/calificacionAsc">
            <i className="fas fa-sort-amount-down-alt"></i>
            </Link> 
            <hr />
        </div>
    )
}

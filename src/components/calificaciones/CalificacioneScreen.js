import React from 'react'



export const CalificacioneScreen = () => {

    const handleDesc = () => {
        window.location.href = 'https://commerce-app.herokuapp.com/calificacionDesc'
    }

    const handleAsc = () => {
        window.location.href = 'https://commerce-app.herokuapp.com/calificacionAsc'
    }

    return (
        <div>
            <h1>Calificaciones</h1>
            <hr />
            <p><li>Se muestran los libros con mayor calificación:</li></p>
            <button
                    type="submit"
                    className="btn btn-light"
                    onClick={handleDesc}
                ><i className="fas fa-sort-amount-up-alt"></i></button>
                <hr /> 
            <hr />
            <p><li>Se muestran los libros con menor calificación:</li></p>
            <button
                    type="submit"
                    className="btn btn-light"
                    onClick={handleAsc}
                ><i className="fas fa-sort-amount-down-alt"></i></button>
                <hr /> 
        </div>
    )
}

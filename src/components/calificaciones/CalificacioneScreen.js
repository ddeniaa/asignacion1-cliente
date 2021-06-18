import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import { BookCard } from '../books/BookCard';




export const CalificacioneScreen = ({ history }) => {


    //handlReturn retorna a la pagina anterior
    const handleReturn = () => {

        if (history.length <= 2) {
            history.push('/');
        } else {
            history.goBack();
        }
    }


    

    const [data, setData] = useState([]);


    const getCalificacion = async () => {

        const comentariosSnap = await db.collection(`books`).orderBy('calificacion', 'desc').get();
        const comentarios = [];

        comentariosSnap.forEach(snapHijo => {
            comentarios.push({ ...snapHijo.data(), id: snapHijo.id})
        });
        console.log(comentarios)
        setData(comentarios)

    }
  
    
    useEffect(() => {
        getCalificacion();
    }, []);



    return (
        <div>
            <button
                className="btn m-1 btn-block btn-outline-ligth"
                onClick={handleReturn}
            >
                <i className="fas fa-chevron-circle-left"></i>
            </button>
            <h1>Calificaciones</h1>
            <hr/>
            <p>Se muestran la lista de libros de mayor puntaje a menor:</p>
            <div className= "card-columns animate__animated animate__zoomIn"> 
            { 
                data.map(libro => (
                    <BookCard
                        key={libro.id}
                        {...libro}
                        
                        
                    />
                ))
            }
        </div>
        </div>
    )
}

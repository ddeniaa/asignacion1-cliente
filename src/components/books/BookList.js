import React, { useEffect, useState } from 'react'
import { BookCard } from './BookCard';




export const BookList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems()
    },[]);

    const fetchItems = async () => {
        const url = `https://commerce-app.herokuapp.com/api/libros/listalibros`
        const resp = await fetch(url);
        const { data } = await resp.json();

        const libros = data.map(lib => {
            return {
                id: lib.id,
                titulo: lib.titulo,
                img: lib.img,
                autor: lib.autor,
                descripCorta: lib.descripCorta,
                descripLarga: lib.descripLarga,
                palabrasClaves: lib.palabrasClaves,
                categoria: lib.categoria,
                calificacion: lib.calificacion
            }
        })

        //console.log(libros)
        setData(libros)

    };

    const libroReduced = data.slice(0,4)
    return (
        <div className= "card-columns animate__animated animate__zoomIn"> 
            {
                libroReduced.map(libro => (
                    <BookCard
                        key={libro.id}
                        {...libro}
                    />
                ))
            }

        </div>
    )
}
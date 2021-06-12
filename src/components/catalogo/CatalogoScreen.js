import React, { useEffect, useState } from 'react'
import { BookCard } from '../books/BookCard';


export const CatalogoScreen = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems()
  }, []);

  const fetchItems = async () => {
    const url = `/api/libros/listalibros`
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


  return (
    <>
      <h1>Catálogo</h1>
      <hr />

      <div className="card-columns animate__animated animate__zoomIn">
        {
          data.map(libro => (
            <BookCard
              key={libro.id}
              {...libro}
            />
          ))
        }
      </div>
    </>

  )
}

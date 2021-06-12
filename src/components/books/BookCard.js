import React from 'react';


export const BookCard = ({
  id,
  titulo,
  img,
  autor,
  descripCorta,
  calificacion
}) => {


  const handlePictureClick = () => {
    window.location.href = `/book/${id}`
  }


  return (
    <div className="card-deck" id={id}>
      <div onClick={handlePictureClick} className="card" style={{ maxWidth: 210 }}>
        <img src={img} className="card-img" alt="img" />
        <div className="card-body">
          <h1 className="card-title"> {titulo} </h1>
          <p className="autor"> Autor: Autor: {autor} </p>
          <p className="decripcion"> {descripCorta} </p>
        </div>
        <div className="card-footer">
          <small>Calificación: {calificacion}</small>
        </div>
      </div>
    </div>

  )
}


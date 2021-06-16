import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';






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

  <Link to={ `book/${ id }`} />  

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  return (
    <div className="card-deck" id={id}>
      <div onClick={handlePictureClick} className="card" style={{ maxWidth: 210 }}>
        <img src={img} className="card-img" alt="img" />
        <div className="card-body">
          <h1 className="card-title"> {titulo} </h1>
          <p className="autor"> Autor: {autor} </p>
          <p className="decripcion"> {descripCorta} </p>
        </div>
        <div className="card-footer">
          <small>Calificación:
            <ReactStars
              count={calificacion}
              onChange={ratingChanged}
              size={18}
              color={"#7B113A"}
              edit={false}
            />
          </small>
        </div>
      </div>
    </div>

  )
}


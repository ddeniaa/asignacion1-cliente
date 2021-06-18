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




  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  
  

  return (
    <div className="card-deck" id={id}>
      <div className="card" style={{ maxWidth: 210 }}>
      <Link to={`/book/${id}`}>
      <img src={img} className="card-img"  alt="img" />
      </Link>  
        <div className="card-body">
          <h1 className="card-title"> {titulo} </h1>
          <p className="autor"> Autor: {autor} </p>
          <p className="decripcion"> {descripCorta} </p>
          </div>
        <div className="card-footer">
            <ReactStars
              count={calificacion}
              onChange={ratingChanged}
              size={19}
              color={"#7B113A"}
              edit={false}
            />
        </div>
      </div>
    </div>

  )
}


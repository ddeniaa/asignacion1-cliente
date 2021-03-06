//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { Comentarios } from '../comentarios/Comentarios';





export const BookScreen = ({ history }) => {




  const { id } = useParams();
  //console.log(id);

  const [filt, setFilt] = useState([]);


  useEffect(() => {
    fetchItems(id);
  }, [id]);

  const fetchItems = async (id) => {
    const url = `https://commerce-app.herokuapp.com/api/libros/listalibros/libro/${id}`
    const resp = await fetch(url);
    const { data } = await resp.json();


    //console.log(data)
    setFilt(data)
  }


  //handlReturn retorna a la pagina anterior
  const handleReturn = () => {

    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  }

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  const {
    titulo,
    img,
    autor,
    descripCorta,
    descripLarga,
    palabrasClaves,
    categoria,
    calificacion,

  } = filt;





  return (
    <>
      <div>
        <button
          className="btn m-1 btn-block btn-outline-ligth"
          onClick={handleReturn}
        >
          <i className="fas fa-chevron-circle-left"></i>
        </button>


        <div className="card mb-3" style={{ maxwidth: 520, maxheight: 300 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img className="img-unlibro" src={img} alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-title-libro">
                <h1 className="card-text-unlibro"> {titulo}</h1>
                <hr />
                <div className="card-text">
                  <h5>Autor: {autor}</h5>
                </div>
                <div className="card-text">
                <h5> Calificación:
                  <ReactStars
                    count={calificacion}
                    onChange={ratingChanged}
                    size={19}
                    color={"#7B113A"}
                    edit={false}
                  /></h5>
                </div>
                <div>
                  <h6>Sinopsis: {descripCorta} </h6>
                  <h6>{descripLarga}  </h6>
                </div>
                <div>
                  <h6> Categoria: {categoria}</h6>
                </div>
                <li className="card-text">Palabras Claves:{palabrasClaves}</li>
              </div>
            </div>
          </div>
        </div>


 <Comentarios/>


      </div>
    </>
  )

}

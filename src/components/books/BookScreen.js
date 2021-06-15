//Donde se detalla el producto al darle clicks.
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { db } from '../../firebase/firebaseConfig';




export const BookScreen = ({ history }) => {




  const { id } = useParams();
  //console.log(id);

  const [filt, setFilt] = useState([]);


  useEffect(() => {
    fetchItems(id);
  }, [id]);

  const fetchItems = async (id) => {
    const url = `/api/libros/listalibros/libro/${id}`
    const resp = await fetch(url);
    const { data } = await resp.json();


    //console.log(data)
    setFilt(data)
  }


  

  const idc  = useParams()
  console.log(idc);


  const comentarios = async (idc) => {

    const comentariosSnap = await db.collection(`/books/${idc}/comentarios`).get();
    const comentarios = [];

    comentariosSnap.forEach(snapHijo => {
      comentarios.push({
        id: snapHijo.id,
        usuario: snapHijo.data().usuario,
        fechaComentario: snapHijo.data().fechaComentario,
        descripComentario: snapHijo.data().descripComentario,
        calificacionUsuario: snapHijo.data().calificacionUsuario
      })
    });
    console.log(comentarios)

  }

  comentarios()




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
                <p className="card-text">Autor: {autor} </p>
                <div className="card-text">Calificación:
                  <ReactStars
                    count={calificacion}
                    onChange={ratingChanged}
                    size={18}
                    color={"#7B113A"}
                    edit={false}
                  />
                </div>
                <p className="card-text">Sinopsis: {descripCorta} </p>
                <p className="card-text"> {descripLarga} </p>
                <p className="card-text">categoria: {categoria} </p>
                <li className="card-text">Palabras Claves:{palabrasClaves}</li>
              </div>
            </div>
          </div>
        </div>




        {/* <hr />
        <h5>Comentarios:</h5>
        <hr />
        <div className="card">
          <div className="card-header">
            {}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{}</p>
              <footer className="blockquote-footer">{} 
              </footer>
            </blockquote>
          </div>
        </div> */}

      </div>
    </>
  )

}

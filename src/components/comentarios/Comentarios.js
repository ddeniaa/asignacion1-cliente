import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import ReactStars from 'react-rating-stars-component';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { login, startComment } from '../../actions/auth';
import Swal from 'sweetalert2';
import { Link  } from 'react-router-dom'







export const Comentarios = () => {


    //estrellas:
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const { id } = useParams();

    //agregar al state
    const comments = useSelector(state => state.comments);
    //obtener name
    const { name } = useSelector(state => state.auth);

    const [formValues, handleInputChange, reset] = useForm(comments);
    const { decripComentario, calificacionUsuario } = formValues;

    //Craga de Data 
    const [data, setData] = useState([]);


    const getComment = async () => {

        const comentariosSnap = await db.collection(`comments`).where('id','==',`${id}`).get();
        const comentarios = [];

        comentariosSnap.forEach(snapHijo => {
            comentarios.push({ ...snapHijo.data(), id: snapHijo.id })
        });
        console.log(comentarios)
        setData(comentarios)

    }

    useEffect(() => {
        getComment();
    }, []);



    //dispatch
    const dispatch = useDispatch();


    //estado local para saber si el usuario se encuentra autenticado:
    const [cheking, setCheking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    //efecto cuando el estado de la autenticación cambia:
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

            } else {
                setIsLoggedIn(false);

            }
            setCheking(false);

        });

    }, [dispatch, setCheking, setIsLoggedIn])


    if (cheking) {
        return (
          <div className="text-center">
            <div className="spinner-border  m-5" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }

    const contenido = {
        decripComentario: '',
        calificacionUsuario: ''
    }


    const handleGuardar = (e) => {
        if (isLoggedIn) {
            if (data.find(contenido => contenido.name === name)) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Comentario Guardado',
                    showConfirmButton: false,
                    timer: 1500
                })
                reset(contenido)
            } else {
                e.preventDefault();
                dispatch(startComment(formValues, name, id ))

                    .then((res) => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Comentario Guardado',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        reset(contenido)
                        window.location.reload(true);
                    })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes autenticarte para agregar un comentario.',
              });  
             
        } 

    }

   

    if (calificacionUsuario > 5){
     Swal.fire({
            icon: 'info',
            title: 'La puntuación debe estar dentro del rango de 1 a 5',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }


    return (
        <>

            <hr />

            <div className="card border-success mb-3" >
                <div className="card-header bg-transparent border-success"> <h5>Dejar un comentario:</h5>
                <Link  className="session"  to="/login"> Iniciar sesion</Link>
                </div>
              
                <div>
                    <h5 className="card-title">
                        Descripción:
                        <input
                            name="decripComentario"
                            placeholder="Dejanos tu opinión..."
                            onChange={handleInputChange}
                            autoComplete="off"
                            type="text"
                            className="comentario"
                            value={decripComentario}
                        /></h5>
                </div>
                <div>
                    <h5 className="card-title">
                        Calificación:
                        <input
                            name="calificacionUsuario"
                            autoComplete="off"
                            onChange={handleInputChange}
                            type="text"
                            className="comentario"
                            value={calificacionUsuario}
                            placeholder="La puntuación debe ser entre 1-5"
                        /></h5>
                </div>
                <div className="card-footer bg-transparent border-success">
                    <button  className="btn btn-fefault"  onClick={ handleGuardar } >
                        Comentar
                    </button>
                </div>
            </div>


            <hr />


            <div>
            <h5>Sala de comentarios:</h5>
            <hr/>
                {data.map((data) => (
                    <>
                        <ul className="list-group-item list-group-item-success">
                            <div className="card-header">{data.name}</div>
                            <div className="card-body-co">
                                <p className="card-text">
                                    <ReactStars
                                        count={data.calificacionUsuario}
                                        onChange={ratingChanged}
                                        size={20}
                                        color={"#7B113A"}
                                        edit={false}
                                    />
                                </p>
                                <p className="card-text"> 
                                {data.decripComentario}
                                 </p>
                            </div>
                        </ul>

                    </>
                ))}
            </div>

        </>
    )
}

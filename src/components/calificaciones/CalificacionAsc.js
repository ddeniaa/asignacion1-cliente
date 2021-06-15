import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "../books/BookCard";



export const CalificacionAsc = ({history}) => {


   //handlReturn retorna a la pagina anterior
  const handleReturn = () =>{

    if ( history.length <= 2){
        history.push('/');
    }else{
     history.goBack();
  }
}




    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItems()
    }, []);

    const fetchItems = async () => {
        const url = `https://commerce-app.herokuapp.com/api/libros/librosasc/calificaciones`
        const resp = await fetch(url);
        const { data } = await resp.json();



        //console.log(libros)
        setData(data)

    };
    return (
        <>
        <button
          className="btn m-1 btn-block btn-outline-ligth"
          onClick={handleReturn}
        >
         <i className="fas fa-chevron-circle-left"></i>
        </button>
            <h1>Libros con menor puntaje:</h1>
            <hr />
            <div>
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




import React, { useEffect, useState } from "react";





export const SimpleSlider = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const url = `https://commerce-app.herokuapp.com/api/carrusel/listaimg`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const img = data.map(img => {
      return {
        id: img.id,
        img: img.img
      }
    })

    //console.log(img)
    setImages(img)

  };



  return (
    <>
      <div className="simpleSlider" id="slider">
        <figure>
          {
            images.map(img => (
              <img
                key={img.id}
                src={img.img}
                alt="img"
              />
            ))
          }
        </figure>

      </div>

    </>
  );
}






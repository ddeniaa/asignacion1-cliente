import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export const SimpleSlider = () => {

  const [images, setImages] = useState([]);

    useEffect(() => {
      fetchItems();
    },[])
  
    const fetchItems = async () => {
      const url =`/api/carrusel/listaimg`
      const resp = await fetch(url);
      const { data } = await resp.json();
      
      const img = data.map(img=>{
        return{
          id: img.id,
          img: img.img
        }
      })
      
      //console.log(img)
      setImages(img)
     
    };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <>
       <Slider {...settings}>
                 {
                     images.map ( img =>(
                      <div className="simpleSlider">
                      <img 
                      key={img.id}
                      src={img.img} 
                      alt="img" 
                      />
                     </div>
                     ))
                 }
             </Slider> 
    </>
  );
}





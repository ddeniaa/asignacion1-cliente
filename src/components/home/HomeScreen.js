import React from 'react';
import { BookList } from '../books/BookList';
import { Footer } from '../ui/Footer';
import { SimpleSlider } from './Slider';
import { Link } from 'react-router-dom';




export const HomeScreen = () => {



    return (
        <>
            <div> <SimpleSlider /> </div>
            <div>
                <h1>Catálogo</h1>
                <hr />
                <BookList />

                <Link 
                className="btn btn-light" 
                to="/catalogo">Ver más...</Link>
                <hr />

                <h1>Encuentranos:</h1>
                <hr />
                <Footer />

            </div>
        </>
    )
}



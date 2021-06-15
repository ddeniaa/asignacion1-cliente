import React from 'react';
import { BookList } from '../books/BookList';
import { Footer } from '../ui/Footer';
import { SimpleSlider } from './Slider';




export const HomeScreen = () => {

    const handlePageChange = () => {
        window.location.href = '/catalogo'
    }
    
    return (
        <>
            <div> <SimpleSlider /> </div>
            <div>
                <h1>Catálogo</h1>
                <hr />
                <BookList /> 
                <button
                    type="submit"
                    className="btn btn-light"
                    onClick={handlePageChange}
                >Ver más...</button>
                <hr /> 
                
                <h1>Encuentranos:</h1>
                <hr />
                <Footer/>

            </div>
        </>
    )
}



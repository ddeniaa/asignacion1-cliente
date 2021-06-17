import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm'
import { BookCard } from '../books/BookCard';




export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = values;

    //handleSearch:
    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }



    const [filt, setFilt] = useState([]);

    useEffect(() => {
        fetchTitulo(searchText)
    }, [searchText]);



    const fetchTitulo = async (searchText) => {
        const url = `https://commerce-app.herokuapp.com/api/libros/libros/palabrasClaves/${searchText}`
        const resp = await fetch(url);
        const { data } = await resp.json();

        if (data === undefined) {
            return [];
        }

        //console.log(url)
        console.log(data)
        setFilt(data)

    }


    //console.log(filt)



    return (
        <div >
            <h1>Buscar</h1>
            <hr />

            <div className="row">
                <div>
                    <form className="d-flex " onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Encuentra tu Libro..."
                            className="form-control"
                            name='searchText'
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-ligth"
                            onClick={() => fetchTitulo(searchText)}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                <div className="results">
                    <h4> Results </h4>
                    <hr />


                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Encuentra tu libro...
                        </div>
                    }

                    {
                        (q !== '' && filt.length === 0)
                        &&
                        <div className="alert alert-danger">
                            No se encuentran Resultados con: {q}
                        </div>
                    }

                    {
                        filt.map(libro => (
                            <BookCard
                                key={libro.id}
                                {...libro}
                            />
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

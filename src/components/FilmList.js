import React from 'react';
import Film from './Film';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return(
            <Film name= {film.name} key={film.id}>{film.url}</Film>
        )
    })

    return(
        <>
        {filmArray}
        </>
    );
}

export default FilmList;
import React from 'react'
import './Movie.css'

const Movie = (props) => (
    <div className="ui segment column twelve">
        <img className="poster" src = {`https://image.tmdb.org/t/p/w342${props.movie.img}`} alt="poster"/>
        <h3 className="title">{props.movie.title}</h3>
    </div>
)

export default Movie;
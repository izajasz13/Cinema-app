import React from 'react'
import './Movie.css'

const Movie = ({ movie }) => (
    <div className="movie-card-content">
        <img className="poster" src={`https://image.tmdb.org/t/p/w342${movie.img}`} alt="poster" />
        <h3 className="title">{movie.title}</h3>
    </div>
)

export default Movie;
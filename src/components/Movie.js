import React from 'react';
import './Movie.css';

class Movie extends React.Component {

    posterPath(){
        const url = `https://image.tmdb.org/t/p/w342${this.props.movie.img}`;
        return url;
    }

    movieName(){
        return this.props.movie.title;
    }
    render() {
        return(
            <div className="ui segment column twelve">
                <img className="poster" src = {this.posterPath()} alt="poster"/>
                <h3 className="title">{this.movieName()}</h3>
            </div>
        );
    }
}

export default Movie;
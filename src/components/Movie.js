import React from 'react';

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
                <img src = {this.posterPath()} alt="poster"/>
                <h3>{this.movieName()}</h3>
            </div>
        );
    }
}

export default Movie;
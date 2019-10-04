import React from 'react';

class Info extends React.Component{
    posterPath(){
        const url = `https://image.tmdb.org/t/p/original${this.props.movie.img}`;
        return url;
    }

    render(){
        return (
            <div className = "info-box ui grid">
                <div className = "six wide column">
                    <img className = "poster" src = {this.posterPath()} alt="poster"/>
                    <div className = "stackable grid">
                        <button className = "ui button eight wide column">Buy</button>
                        <button className = "ui button eight wide column">Book</button>
                    </div>
                </div>
                <div className = "ten wide column">
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                    <ul>{this.props.movie.genre.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
                    <p>{this.props.movie.release_date}</p>
                    <p>{this.props.movie.vote}</p>
                </div>
                
            </div>
        );
    };
}

export default Info;
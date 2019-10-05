import React from 'react'
import {withRouter} from 'react-router-dom'


class Info extends React.Component {
    state={
        img: "",
        title: "",
        description: "",
        genre: [],
        releaseDate: "",
        vote: ""
    }

    async componentDidMount() {
        await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.filmId}?api_key=e2cc5c81b40a3219ee15462c33afab71`)
            .then(res => res.json()).then(res => {
                this.setState({
                    img: res.poster_path,
                    title: res.title,
                    description: res.overview,
                    genre: [],
                    releaseDate: res.release_date,
                    vote: res.vote_average
                })
            })
    }

    render(){
        return (
            <div className = "info-box ui grid">
                <div className = "six wide column">
                    <img className = "poster" src = {`https://image.tmdb.org/t/p/original${this.state.img}`} alt="poster"/>
                    <div className = "stackable grid">
                        <button className = "ui button eight wide column">Buy</button>
                        <button className = "ui button eight wide column">Book</button>
                    </div>
                </div>
                <div className = "ten wide column">
                    <h2>{this.state.title}</h2>
                    <p>{this.state.description}</p>
                    <ul>{this.state.genre.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
                    <p>{this.state.release_date}</p>
                    <p>{this.state.vote}</p>
                </div>
                
            </div>
        )
    }
}

export default withRouter(Info);
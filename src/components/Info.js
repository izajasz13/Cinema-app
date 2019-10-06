import React from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RouteBuilder } from "../RouteBuilder"
import "./Info.css"

class Info extends React.Component {
    state = {
        dataSet: false,
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
                    dataSet: true,
                    img: res.poster_path,
                    title: res.title,
                    description: res.overview,
                    genre: [],
                    releaseDate: res.release_date,
                    vote: res.vote_average
                })
            })
    }

    render() {
        return this.state.dataSet ? (
            <div className="info-box">
                <div className="poster-box">
                    <img className="poster" src={`https://image.tmdb.org/t/p/original${this.state.img}`} alt="poster" />
                </div>
                <div className="info-content">
                    <h2><span className="info-span">Tittle: </span>{this.state.title}</h2>
                    <p><span className="info-span">Description: </span>{this.state.description}</p>
                    <ul>{this.state.genre.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
                    <p>{this.state.release_date}</p>
                    <p><span className="info-span">Average rating: </span>{this.state.vote}</p>
                    <div className="buttons">
                        <button className="ui button eight wide column">Buy</button>
                        <button className="ui button eight wide column">Book</button>
                    </div>
                </div>
            </div>
        ) : (
                <div className="ui active dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            )
    }
}

export default withRouter(Info);
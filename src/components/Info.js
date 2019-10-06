import React from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {RouteBuilder} from "../RouteBuilder"

class Info extends React.Component {
    state={
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

    render(){
        if(this.state.dataSet){
            return (
                <div className = "info-box ui grid">
                    <div className = "six wide column">
                        <img className = "poster" src = {`https://image.tmdb.org/t/p/original${this.state.img}`} alt="poster"/>
                        <div className = "stackable grid">
                            <Link to={{
                                    pathname: RouteBuilder.reservation(this.props.location.pathname),
                                    params: this.state.title
                                }}>
                                    <button className = "ui button eight wide column">Book</button>
                            </Link>
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
            );
        }
        else{
            return (
                <div className="ui active dimmer">
                        <div className="ui text loader">Loading</div>
                </div>
            );
        }
    }
}

export default withRouter(Info);
import React from 'react'
import {withRouter} from 'react-router-dom'


const Info = (props) => (
    <div className = "info-box ui grid">
        <div className = "six wide column">
            <img className = "poster" src = {`https://image.tmdb.org/t/p/original${props.location.params.img}`} alt="poster"/>
            <div className = "stackable grid">
                <button className = "ui button eight wide column">Buy</button>
                <button className = "ui button eight wide column">Book</button>
            </div>
        </div>
        <div className = "ten wide column">
            <h2>{props.location.params.title}</h2>
            <p>{props.location.params.description}</p>
            <ul>{props.location.params.genre.map((ele, index) => <li key={index}>{ele}</li>)}</ul>
            <p>{props.location.params.release_date}</p>
            <p>{props.location.params.vote}</p>
        </div>
        
    </div>
);

export default withRouter(Info);
import React from 'react';
import Movie from './Movie';
import './List.css'
import { Link } from 'react-router-dom'
import { RouteBuilder } from "../RouteBuilder"

const List = ({ movies }) =>{return (
    <div className="movie-box">
        {
            movies.map((ele, index) => (
                <div className = "movie-card" key={ele.title} data-index={index}>
                    <Link to={{
                        pathname: RouteBuilder.toMovieInfo(ele.id),
                    }}>
                        <Movie movie={ele} />
                    </Link>
                </div>
            ))
        }
    </div>
)}

export default List;
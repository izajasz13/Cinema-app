import React from 'react';
import Movie from './Movie';
import './List.css'
import { Link } from 'react-router-dom'
import { RouteBuilder } from "../RouteBuilder"

const List = ({ movies }) => (
    <div className="movie-box">
        {movies.map((ele, index) => {
            return(<div className = "movie-card" key={ele.title} data-index={index}>
                <Link to={{
                    pathname: RouteBuilder.toMovieInfo(ele.id),
                    params: ele
                }}>
                    <Movie movie={ele} />
                </Link>
            </div>)
        }
        )}
    </div>
)

export default List;
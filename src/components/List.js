import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom'
import {RouteBuilder} from "../RouteBuilder"

const List = ({ movies, selectMovie}) => {
    const onSelectMovie = e =>{
        e.preventDefault()
        const index = e.currentTarget.dataset.index
        selectMovie(index)
    }

    return(
        <div className="ui grid">
            {movies.map((ele, index) => 
                <div className = "four wide column one column stackable center aligned page grid" onClick={onSelectMovie} key={ele.title} data-index={index}>
                    <Link to={{
                            pathname: RouteBuilder.toMovieInfo(),
                            params: ele
                        }}>
                        <Movie movie={ele} />
                    </Link>
                </div>
            )}
        </div>
    )
}

export default List;
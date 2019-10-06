import React from 'react';
import Movie from './Movie';
import { Link } from 'react-router-dom'
import {RouteBuilder} from "../RouteBuilder"

const List = ({ movies }) => {

    return(
        <div className="ui grid">
            {movies.map((ele, index) => {
                return(<div style = {{padding: '0px'}} className = "four wide column stackable center aligned page grid" key={ele.title} data-index={index}>
                    <Link to={{
                            pathname: RouteBuilder.toMovieInfo(ele.id),
                            params: ele
                        }}>
                        <Movie movie={ele} />
                    </Link>
                </div>)}
            )}
        </div>
    )
}

export default List;
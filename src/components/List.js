import React from 'react';
import Movie from './Movie';

class List extends React.Component{
    selectMovie = (e) =>{
        e.preventDefault();

        const index = e.currentTarget.dataset.index;
        this.props.selectMovie(index)
    }

    render(){
        return(
            <div className="ui grid">
                {this.props.movies.map((ele, index) => 
                    <div className = "four wide column one column stackable center aligned page grid" onClick={this.selectMovie} key={ele.title} data-index={index}>
                        <Movie movie = {ele} />
                    </div>
                )}
            </div>
        );
    }
}

export default List;
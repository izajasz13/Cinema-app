import React from 'react';
import Movie from './Movie';

class List extends React.Component{
    render(){
        return(
            <div className="ui grid">
                {this.props.movies.map(ele => 
                    <div className = "four wide column one column stackable center aligned page grid" key={ele.title}>
                        <Movie movie = {ele} />
                    </div>
                )}
            </div>
        );
    }
}

export default List;
import React from 'react';
import getMovies from '../api';
import List from './List';
import Info from './Info';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            component: 'list',
            movie: '',
            movies: []
        }
    }

    selectMovie = (index) => {
        const movie = this.state.movies[index];
        this.setState({component: 'info', movie});
    }
    toShow(){
        if(this.state.component === 'list')
            return <List 
                        movies = {this.state.movies} 
                        selectMovie = {this.selectMovie}
                    />
        if(this.state.component === 'info')
            return <Info movie = {this.state.movie} />;
    }

    componentDidMount(){
        getMovies().then(res => this.setState({movies: res}));
    }

    render() {
        return (
            <div className="main-box">
                {this.toShow()}
            </div>
        );
    }
}

export default App;
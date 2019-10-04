import React from 'react';
import getMovies from '../api';
import List from './List';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        getMovies().then(res => this.setState({movies: res}));
    }

    render() {
        return (
            <div className="main-box">
                <List movies = {this.state.movies} />
            </div>
        );
    }
}

export default App;
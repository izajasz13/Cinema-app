import React from 'react';
import getMovies from '../api';
import List from './List';
import './App.css';

//Redux
// import {connect} from 'react-redux';
// import { addReservation, removeReservation } from '../actions';

// const mapStateToProps = (state) => {
//   return {
//     reservations: state.reservations // (1)
//   }
// };
// const mapDispatchToProps = { addReservation, removeReservation };

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            movie: '',
            movies: []
        }
    }

    componentDidMount(){
        getMovies().then(res => this.setState({movies: res}));
    }

    render() {
        return (
            <div className="main-box">
                <List movies = {this.state.movies}/>
            </div>
        );
    }
}

export default App;

//Redux
// export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
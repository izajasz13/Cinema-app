import React from 'react';
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
const filmsIdList = [324857, 299536, 284054, 383498, 363088, 297802, 260513, 424694, 353081, 332562, 454983, 375588]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: '',
            movies: []
        }
    }

    async componentDidMount(){
        const movies = []
        filmsIdList.map(async (id) => {
            await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e2cc5c81b40a3219ee15462c33afab71`)
                .then(res => res.json())
                .then(res => {
                    const movie = {
                        id,
                        title: res.title,
                        description: res.overview,
                        release_date: res.release_date,
                        vote: res.vote_average,
                        img: res.poster_path
                    }
                    movies.push(movie)
                })
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return (               
            <div className="container">
                <List movies = {this.state.movies}/>
            </div>
        );
    }
}

export default App;

//Redux
// export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
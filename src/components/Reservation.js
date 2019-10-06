import React from 'react';
import {seatDiv, proceed} from '../reservation';
import './Reservation.css';
import { validate } from '@babel/types';

class Reservation extends React.Component{
    constructor() {
        super();
        this.form = React.createRef();
    }

    state = {
        seats:[]
    }

    componentDidMount(){
        const arrSeat = this.state.seats;
        for(let i = 1; i <= 48; ++i){
            arrSeat.push(i);
        }
        this.setState({seats: arrSeat})
    }

    validate = () => {
        this.form.current.reportValidity();
    }

    onClickProceed = (e) => {
        validate();

        const email = e.currentTarget.parentNode.querySelector('.email').value;
        if(email === '')
            return;
        const id = this.props.match.params.filmId
        proceed(id, email)
    }

    render(){
        return(
            <div className="hall-box">
                <div className="ui grid">
                    <div className="column sixteen wide" style={{textAlign: "center"}}>SCREEN</div>
                    {this.state.seats.map(seatDiv)}
                </div>
                <form className="ui form" ref={this.form} onSubmit = {e => e.preventDefault()}>
                    <input className="email field" type="email" placeholder="email" required/>
                    <button className="ui button" onClick={this.onClickProceed}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Reservation;
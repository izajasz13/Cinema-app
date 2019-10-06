import React from 'react';
import {seatDiv, proceed, getReservations} from '../reservation';
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

    async componentDidMount(){
        const id = this.props.match.params.filmId
        await getReservations(id);

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
        if(proceed(id, email)){
            const form = e.currentTarget.parentNode;
            const div = form.parentNode;
            div.removeChild(form);
            const message = document.createElement('div');
            message.innerText = `Confiramtion send to ${email}`;
            div.appendChild(message);
        }
    }

    render(){
        return(
            <div className="hall-box">
                <div className="screen">SCREEN</div>
                <div className="grid">
                    {this.state.seats.map(seatDiv)}
                </div>
                <form className="form" ref={this.form} onSubmit = {e => e.preventDefault()}>
                    <input className="email field" type="email" placeholder="email" required/>
                    <button className="button" onClick={this.onClickProceed}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Reservation;
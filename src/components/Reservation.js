import React from 'react';
import {seatDiv} from '../reservation';
import './Reservation.css';

const Reservation = () => {
    const seats = [];
    for(let i = 1; i <= 48; ++i){
        seats.push(i);
    }

    return(
        <div className="hall-box">
            <div className="ui grid">
                <div className="column sixteen wide" style={{textAlign: "center"}}>SCREEN</div>
                {seats.map(seatDiv)}
            </div>
        </div>
    );
};

export default Reservation;
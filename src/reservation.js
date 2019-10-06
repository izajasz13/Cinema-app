import React from 'react';
import Seat from './components/Seat';

const reserved = [12, 15, 19, 41];
let selected = [];

const onClickSeat = (e) => {
    const box = e.currentTarget;
    const num = parseInt(box.innerText);
    if(reserved.includes(num)){
        return;
    }
    box.querySelector('.seat').classList.toggle('avalible');
    box.querySelector('.seat').classList.toggle('selected');
    if(selected.includes(num)){
        selected = selected.filter(n => n !== num);
    }
    else{
        selected.push(num);
    }
    console.log(selected);
}

export const proceed = (id, email) => {

    console.log(id);
    console.log(email);
}

export const seatDiv = (seat) => {
    const style = reserved.includes(seat) ? 'seat reserved' : 'seat avalible';
    return(
        <div className="two column wide" onClick = {onClickSeat} key={seat}>
            <Seat num = {seat} css = {style}/>
        </div>            
    );
}
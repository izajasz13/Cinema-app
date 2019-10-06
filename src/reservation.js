import React from 'react';
import Seat from './components/Seat';

let reserved = [12];
let selected = [];

export const getReservations = async (id) =>{
    await fetch(`http://cinema-app-coderscamp.herokuapp.com/api/movies/${id}`)
        .then(res => res.json())
        .then(res => reserved = res[0].hall.seats);
}

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

export const proceed = async (id, email) => {
    if(selected === [])
        return false;
    const data = {
        seats: selected,
        seance: id,
        email
    }
    await fetch(`http://cinema-app-coderscamp.herokuapp.com/api/movies/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return true;
}

export const seatDiv = (seat) => {
    const style = reserved.includes(seat) ? 'seat reserved' : 'seat avalible';
    return(
        <div className="two column wide" onClick = {onClickSeat} key={seat}>
            <Seat num = {seat} css = {style}/>
        </div>            
    );
}
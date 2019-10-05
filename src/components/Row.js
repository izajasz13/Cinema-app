import React from 'react';
import Seat from './Seat'

const Row = () => {
    const seats = []
    for(let i = 1; i <= 48; ++i){
        seats.push(i);
    }

    const onClickSeat = (e) => {
        const num = e.currentTarget.innerText;
        console.log(num);
    }

    return(
        <div className="ui grid">
            <div className="column sixteen wide" style={{textAlign: "center"}}>SCREEN</div>
            {seats.map(seat => <div onClick={onClickSeat} className = "two wide column" key={seat}>
                                    <Seat num={seat} />
                                </div>)}
        </div>
    );
};

export default Row;
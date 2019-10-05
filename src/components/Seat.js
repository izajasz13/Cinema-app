import React from 'react';

const Seat = ({num}) => {
    return(
        <div style={{border: "1px solid black", margin: "5px", width: "50px", height: "50px"}}>
            {num}
        </div>
    );
};

export default Seat;
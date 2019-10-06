import React from 'react';

const Seat = ({num, css}) => {
    return(
        <div className = {css}>
            {num}
        </div>
    );
};

export default Seat;
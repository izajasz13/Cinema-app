import {combineReducers} from 'redux';

export const reservedSeatsReducer = (state = {reservations: ['res']}, action) => {
    switch(action.type){
        case 'ADD_RESERVATION':
            return{
                ...state,
                reservations: state.reservations.push(action.reservation)
            }
        case 'REMOVE_RESERVATION':
            return{
                ...state,
                reservations: state.reservations.filter(res => 
                    res.title !== action.title 
                    && res.seats !== action.seats
                )
            }
        default:
            return state;
    }
}

export default combineReducers({
    res: reservedSeatsReducer
});


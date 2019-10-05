import * as ActionTypes from './ActionTypes';

export const addReservation = (title, seats) => ({
    type: ActionTypes.ADD_RESERVATION,
    reservations: {title, seats}
});

export const removeReservation = (title, seats) => ({
    type: ActionTypes.REMOVE_RESERVATION,
    title,
    seats
});
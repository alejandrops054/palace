import
    {
        ADD_NOTE
    }
from '../types/index'

const initialState = {
    notes: []
}

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_NOTE:
            return{
                ...state,
                notes: action.payload
            }


        default:
            return state;
    }
}
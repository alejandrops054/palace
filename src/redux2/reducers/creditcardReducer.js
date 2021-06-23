import {
    LOADING,
    
    NEW_CREDITCARD_SUCCESSS,
    NEW_CREDITCARD_ERROR
} from '../types/index'

const initialState = {
    loading : false,
    creditcard:{
        creditcard:{
            data:[],
            error: null
        }
    }
}

export default function (state = initialState, action){
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

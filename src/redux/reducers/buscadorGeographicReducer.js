import {
    GET_CITIES,
    GET_CITIES_SUCCESS,
    GET_CITIES_FAILURE,
    SELECT_TABLE_GEO,
    GET_GEOLOCA,
    DELETE_GEO
} from '../types/index';

const initialState = {
    loading: false,
    cities: null,
    error: '',
    selectCity: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_GEOLOCA:
        case GET_CITIES:
            return {
                ...state,
                loading: true
            }

        case GET_CITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                cities: action.payload,
                error: ''
            }
        case GET_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                cities: [],
                selectCity: null,
                error: action.payload
            }
        case SELECT_TABLE_GEO:
            return {
                ...state,
                loading: false,
                selectCity: action.payload
            }
        case DELETE_GEO:
            return {
                ...state,
                cities: []
            }
        default: return state;
    }
}

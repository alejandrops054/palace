import {
    ADD_EMAIL,
    DELETE_EMAIL,
    DELETE_EMAIL_CONFIRM,
    ADD_EMAIL_CONFIRM,
    GET_EMAIL,
    GET_EMAIL_SUCCESS,
    POST_EMAIL,
    POST_EMAIL_SUCCESS,
    EMAIL_EDIT_SUCCESS,
    GET_EMAIL_DELETE,
    EMAIL_DELETE_SUCCESS,
    ADD_EMAIL_TABLE
} from '../types';

const initialState = {
    email: [],
    emailDelete: null,
    emailconfirm: null,
    emaildataget: [],
    emailedit: {},
    recnum: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case POST_EMAIL:
        case GET_EMAIL:
            return {
                ...state,
                loading: action.payload,
            }
        case POST_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                emaildataget: [...state.email, action.payload]

            }
        case GET_EMAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                emaildataget: action.payload
            }
        case ADD_EMAIL:
            return {
                ...state,
                emaildataget: [...state.email, action.payload]
            }
        case ADD_EMAIL_TABLE:
            return {
                ...state,
                email: [...state.email, action.payload]
            }
        case EMAIL_EDIT_SUCCESS:
            return {
                ...state,
                emailedit: null,
                // emaildataget: state.emaildataget.map(email =>
                //     email.COOWNER_ID === action.payload.profile ? email = action.payload : email
                // )
            }
        case DELETE_EMAIL_CONFIRM:
            return {
                ...state,
                email: state.email.filter((data) => data.recnum !== action.payload),
                emailconfirm: null
            }
        case DELETE_EMAIL:
            return {
                ...state,
                email: []
            }
        case GET_EMAIL_DELETE:
            return {
                ...state,
                recnum: action.payload
            }
        case EMAIL_DELETE_SUCCESS:
            return {
                ...state,
                emaildataget: state.emaildataget.filter(email => email.Recnum !== state.recnum),
                recnum: null
            }

        default:
            return state
    }

};

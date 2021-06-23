import {
    POST_CREDITCARD,
    POST_CREDITCARD_SUCCESS,
    GET_CREDITCARD,
    GET_CREDITCARD_SUCCESS,
    GET_CREDITCARD_DELETE,
    CREDITCARD_DELETE_SUCCESS,
    SELECT_CREDITCARD_EDIT,
    CREDITCARD_EDIT_SUCCESS,
}from '../../types';

const initialState = {
    creditcards:[],
    loading: false, 
    creditcardsdelete: null,
    creditcardsdit: null
    }

    export default function (state = initialState, action) {
        switch (action.type) {
            case GET_CREDITCARD:
            case POST_CREDITCARD:
                return {
                    ...state,
                    loading: action.payload,
                }
            case POST_CREDITCARD_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    creditcards: [...state.creditcards, action.payload]
    
                }
            case GET_CREDITCARD_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    creditcards: action.payload
                }
            case GET_CREDITCARD_DELETE:
                return {
                    ...state,
                    creditcardsdelete: action.payload
                }
            case CREDITCARD_DELETE_SUCCESS:
                return {
                    ...state,
                    creditcards: state.creditcards.filter(creditcards => creditcards.IDPROFILEOPERA !== state.creditcardsdelete),
                    creditcardsdelete: null
                }
            case SELECT_CREDITCARD_EDIT:
                return {
                    ...state,
                    creditcardsdit: action.payload
                }
            case CREDITCARD_EDIT_SUCCESS:
                return {
                    ...state,
                    creditcardsdit: null,
                    creditcards: state.creditcards.map(credit =>
                        credit.CREDITCARD_ID === action.payload.profile ? credit = action.payload : credit
                    )
                }
            default:
                return state
        }
    }
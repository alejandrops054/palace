import {
    POST_COOWNER,
    POST_COOWNER_SUCCESS,
    GET_COOWNER,
    GET_COOWNER_SUCCESS,
    GET_COOWNER_DELETE,
    COOWNER_DELETE_SUCCESS,
    SELECT_COOWNER_EDIT,
    COOWNER_EDIT_SUCCESS,
    GET_SOCIALMEDIA,
    GET_SOCIALMEDIA_SUCCESS
} from '../../types'


const initialState = {
    coOwners: [],
    loading: false,
    ownerdelete: null,
    owneredit: null,
    socialmedia: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SOCIALMEDIA:
        case GET_COOWNER:
        case POST_COOWNER:
            return {
                ...state,
                loading: action.payload,
            }
        case POST_COOWNER_SUCCESS:
            return {
                ...state,
                loading: false,
                coOwners: [...state.coOwners, action.payload]

            }
        case GET_COOWNER_SUCCESS:
            return {
                ...state,
                loading: false,
                coOwners: action.payload
            }
        case GET_COOWNER_DELETE:
            return {
                ...state,
                ownerdelete: action.payload
            }
        case COOWNER_DELETE_SUCCESS:
            return {
                ...state,
                coOwners: state.coOwners.filter(coOwners => coOwners.IDPROFILEOPERA !== state.ownerdelete),
                ownerdelete: null
            }
        case SELECT_COOWNER_EDIT:
            return {
                ...state,
                owneredit: action.payload
            }
        case COOWNER_EDIT_SUCCESS:
            return {
                ...state,
                owneredit: null,
                coOwners: state.coOwners.map(owner =>
                    owner.COOWNER_ID === action.payload.profile ? owner = action.payload : owner
                )
            }
        case GET_SOCIALMEDIA_SUCCESS:
            return {
                ...state,
                loading: false,
                socialmedia: action.payload
            }
        default:
            return state
    }
}
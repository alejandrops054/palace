import {
    POST_BENEFICIARIES,
    POST_BENEFICIARIES_SUCCESS,
    GET_BENEFICIARIES,
    GET_BENEFICIARIES_SUCCESS,
    GET_BENEFICIARIES_DELETE,
    BENEFICIARIES_DELETE_SUCCESS,
    SELECT_BENEFICIARIES_EDIT,
    BENEFICIARIES_EDIT_SUCCESS
} from '../../types/index'



const initialState = ({
    beneficiaries: [],
    loading: false,
    beneficiariesdelete: null,
    beneficiariesedit: null,
    socialmedia: []
})


export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BENEFICIARIES:
        case POST_BENEFICIARIES:
            return {
                ...state,
                loading: action.payload
            }
        case POST_BENEFICIARIES_SUCCESS:
            return {
                ...state,
                beneficiaries: [...state.beneficiaries, action.payload]
            }
        case GET_BENEFICIARIES_SUCCESS:
            return {
                ...state,
                beneficiaries: action.payload
            }
        case GET_BENEFICIARIES_DELETE:
            return {
                ...state,
                beneficiariesdelete: action.payload
            }
        case BENEFICIARIES_DELETE_SUCCESS:
            return {
                ...state,
                //    beneficiaries: state.beneficiaries.filter( beneficiaries => beneficiaries.IDPROFILEOPERA !== state.beneficiariesdelete ),
                beneficiariesdelete: null
            }
        case SELECT_BENEFICIARIES_EDIT:
            return {
                ...state,
                beneficiariesedit: action.payload
            }

        case BENEFICIARIES_EDIT_SUCCESS:
            return {
                ...state,
                beneficiariesedit: null,
                beneficiaries: state.beneficiaries.map(beneficiaries =>
                    beneficiaries.BENEFICIARY_ID === action.payload.profile ? beneficiaries = action.payload : beneficiaries
                )
            }
        default:
            return state
    }
}
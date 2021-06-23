import {
    GET_AFFILIATION_BASIC,
    GET_AFFILIATION_BASIC_SUCCESS
} from '../../types/index'


const initialState = ({
    affiliationBasicInfo: [],
    loading: false,
})


export default function(state = initialState, action){
    switch(action.type){
        case GET_AFFILIATION_BASIC:
            return {
                ...state,
                loading: action.payload
            }
        case GET_AFFILIATION_BASIC_SUCCESS:
            return {
                ...state,
                affiliationBasicInfo: [...state.affiliationBasicInfo, action.payload]
            }
        default :
        return state      
    }
}
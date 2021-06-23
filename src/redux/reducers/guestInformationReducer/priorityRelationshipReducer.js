import {
    POST_PRIORITY_RELATIONSHIP,
    POST_PRIORITY_RELATIONSHIP_SUCCESS
    } from '../../types';

    const initialState = {
        memberProfileData:[],
        loading: false,
        selectRelationship:null
    }
    



    export default function(state=initialState,action){
            switch(action.type){
                case  SET_PRIORITY_RELATIONSHIP:
                    return {
                        ...state,
                        loading: action.payload
                    }
                case POST_PRIORITY_RELATIONSHIP_SUCCESS:
                    return{
                        ...state,
                        memberProfileData: [...state.memberProfileData, action.payload]
                    }
                default:
                 return state
            }
    }
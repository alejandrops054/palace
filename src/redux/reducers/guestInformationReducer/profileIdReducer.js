import {
    GET_PROFILEID,
    GET_PROFILEID_SUCCESS,
    GET_PROFILEID_FAILURE,
    } from '../../types';


    const initialState = {
        loading: false,
        profileId: null,
        error: '',
        selectmember:null
    }

    export default function (state= initialState, action){
        switch(action.type){
            case GET_PROFILEID:
                return{
                 ...state,
                 loading: action.payload
                }
            case GET_PROFILEID_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    profileId: action.payload
                }
            case GET_PROFILEID_FAILURE:
                return {
                    ...state,
                    loading:false,
                    profileId:[],
                    error: action.payload
                }
            default:
                return state
        }
    }

    
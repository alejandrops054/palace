import {
    GET_MEMBERPROFILE,
    GET_MEMBERPROFILE_SUCCESS,
    GET_MEMBERPROFILE_FAILURE,
    } from '../../types';


    const initialState = {
        loading: false,
        memberProfile: null,
        error: '',
        selectmember:null
    }

    export default function (state= initialState, action){
        switch(action.type){
            case GET_MEMBERPROFILE:
                return{
                 ...state,
                 loading: action.payload
                }
            case GET_MEMBERPROFILE_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    memberProfile: action.payload
                }
            case GET_MEMBERPROFILE_FAILURE:
                return {
                    ...state,
                    loading:false,
                    memberProfile:[],
                    error: action.payload
                }
            default:
                return state
        }
    }

    
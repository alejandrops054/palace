import {
    GET_MEMBERBYAPPLICATION,
    GET_MEMBERBYAPPLICATION_SUCCESS,
    GET_MEMBERBYAPPLICATION_FAILURE,
    } from '../../types';


    const initialState = {
        loading: false,
        memberApplication: null,
        error: '',
        selectmember:null
    }

    export default function (state= initialState, action){
        switch(action.type){
            case GET_MEMBERBYAPPLICATION:
                return{
                 ...state,
                 loading: action.payload
                }
            case GET_MEMBERBYAPPLICATION_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    memberApplication: action.payload
                }
            case GET_MEMBERBYAPPLICATION_FAILURE:
                return {
                    ...state,
                    loading:false,
                    memberApplication:[],
                    error: action.payload
                }
            default:
                return state
        }
    }

    
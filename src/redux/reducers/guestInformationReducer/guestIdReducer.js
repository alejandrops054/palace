import {
    GET_GUESTID,
    GET_GUESTID_SUCCESS,
    GET_GUESTID_FAILURE,
    } from '../../types';


    const initialState = {
        loading: false,
        guestId: null,
        error: '',
        selectmember:null
    }

    export default function (state= initialState, action){
        switch(action.type){
            case GET_GUESTID:
                return{
                 ...state,
                 loading: action.payload
                }
            case GET_GUESTID_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    guestId: action.payload
                }
            case GET_GUESTID_FAILURE:
                return {
                    ...state,
                    loading:false,
                    guestId:[],
                    error: action.payload
                }
            default:
                return state
        }
    }

    
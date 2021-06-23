import {
    GET_MEMBERBYAPPLICATION,
    GET_MEMBERBYAPPLICATION_SUCCESS,
    GET_MEMBERBYAPPLICATION_FAILURE,
    } from '../../types';

import clienteAxios from '../../../config/axios';

export const memberByApplicationSuccessAction=(application)=>{
    return async (dispatch)=>{
        dispatch(getMemberByApplication);

        try {
            const {data} = await clienteAxios.get(`/member/byapplication?application=${application}`)
            dispatch(getMemberByApplicationSuccess(data))
        }catch(error){
            console.log(error)
            dispatch(getMemberByApplicationError)
        }
    }
}

const getMemberByApplication =_=>({
    type:GET_MEMBERBYAPPLICATION,
    payload:true
});

const getMemberByApplicationSuccess = data =>({
    type:GET_MEMBERBYAPPLICATION_SUCCESS,
    payload:data
})

const getMemberByApplicationError = () => ({
    type: GET_MEMBERBYAPPLICATION_FAILURE, 
    payload: true
});
import {
    GET_PROFILEID,
    GET_PROFILEID_SUCCESS,
    GET_PROFILEID_FAILURE,
    } from '../../types';


    import clienteAxios from '../../../config/axios';

    export const getProfileIdSuccessAction=(company, application)=>{
        return async (dispatch)=>{
            dispatch(getProfileId);
    
            try {
                const {data} = await clienteAxios.get(`/member/shortid?company=${company}&application=${application}`)
                dispatch(getProfileIdSuccess(data))
            }catch(error){
                console.log(error)
                dispatch(getProfileIdError)
            }
        }
    }
    
    const getProfileId =_=>({
        type:GET_PROFILEID,
        payload:true
    });
    
    const getProfileIdSuccess = data =>({
        type:GET_PROFILEID_SUCCESS,
        payload:data
    })
    
    const getProfileIdError = () => ({
        type: GET_PROFILEID_FAILURE, 
        payload: true
    });
import {
    GET_MEMBERPROFILE,
    GET_MEMBERPROFILE_SUCCESS,
    GET_MEMBERPROFILE_FAILURE,
    } from '../../types';


    import clienteAxios from '../../../config/axios';

    export const getMemberProfileSuccessAction=(idprofileopera,company, application)=>{
        return async (dispatch)=>{
            dispatch(getMemberProfile);
    
            try {
                ///member/profile?application=1000001&company=5
                const {data} = await clienteAxios.get(`/member/profile?application=${application}&company=${company}`)
                dispatch(getMemberProfileSuccess(data))
            }catch(error){
                console.log(error)
                dispatch(getMemberProfileError)
            }
        }
    }
    
    const getMemberProfile =_=>({
        type:GET_MEMBERPROFILE,
        payload:true
    });
    
    const getMemberProfileSuccess = data =>({
        type:GET_MEMBERPROFILE_SUCCESS,
        payload:data
    })
    
    const getMemberProfileError = () => ({
        type: GET_MEMBERPROFILE_FAILURE, 
        payload: true
    });
import {
    GET_GUESTID,
    GET_GUESTID_SUCCESS,
    GET_GUESTID_FAILURE,
    } from '../../types';

import clienteAxios from '../../../config/axios';

export const getGuestIdSuccessAction=(datainputs)=>{
    const {guestid, arrivalDateFrom, arrivalDateTo, showDateFrom, showDateTo, first, last, hotel, folioInHouse,
        folioOutHouse}=datainputs

        function formato(texto){
            return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
          }

    return async (dispatch)=>{
        dispatch(getGuestId);
        //https://0stlfq22ok.execute-api.us-east-1.amazonaws.com/dev/guestinformation/member/getguest?guestId=${guestid}&firstName=${first}&lastName=${last}&hotel=${hotel}&folio=${folioInHouse}&folioOutHouse=${folioOutHouse}&arrivalFrom=${formato(arrivalDateFrom)}&arrivalTo=${formato(arrivalDateTo)}&showFrom=${formato(showDateFrom)}&showTo=${formato(showDateTo)} 
        try {
            const {data} = await clienteAxios.get(`/member/getguest?guestId=${guestid}&firstName=${first}&lastName=${last}&hotel=${hotel}&folio=${folioInHouse}&folioOutHouse=${folioOutHouse}&arrivalFrom=${formato(arrivalDateFrom)}&arrivalTo=${formato(arrivalDateTo)}&showFrom=${formato(showDateFrom)}&showTo=${formato(showDateTo)}`)
            dispatch(getGuestIdSuccess(data))
        }catch(error){
            console.log(error)
            dispatch(getGuestIdError)
        }
    }
}

const getGuestId =_=>({
    type:GET_GUESTID,
    payload:true
});

const getGuestIdSuccess = data =>({
    type:GET_GUESTID_SUCCESS,
    payload:data
})

const getGuestIdError = () => ({
    type: GET_GUESTID_FAILURE, 
    payload: true
});
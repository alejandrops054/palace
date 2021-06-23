import {
    GET_AFFILIATION_BASIC_SUCCESS,
    GET_AFFILIATION_BASIC
} from '../../types'


import clienteAxios from "../../../config/axios";


export function getAffiliationBasicAction(application) {
    return async (dispatch) => {
      dispatch(getAffiliation());
  
      try {
        //Consulta GET de Microservicios
        const { data } = await clienteAxios.get(
          `/profile/simpleSelection/AAK?application=${application}`
        );
        dispatch(getAffiliationSuccess(data));
      
      } catch (error) {
        console.log("------------ Error *DG* al cargar affiliation Basic Info ---------- ", error);
      }
    };
  }
  
  const getAffiliation =()=> ({
    type: GET_AFFILIATION_BASIC,
    payload: true,
  });
  
  const getAffiliationSuccess = (affiliation) => ({
    type: GET_AFFILIATION_BASIC_SUCCESS,
    payload: affiliation,
  });
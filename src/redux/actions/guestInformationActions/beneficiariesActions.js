import {
  POST_BENEFICIARIES,
  POST_BENEFICIARIES_SUCCESS,
  GET_BENEFICIARIES,
  GET_BENEFICIARIES_SUCCESS,
  GET_BENEFICIARIES_DELETE,
  BENEFICIARIES_DELETE_SUCCESS,
  SELECT_BENEFICIARIES_EDIT,
  BENEFICIARIES_EDIT_SUCCESS
} from "../../types";

import clienteAxios from "../../../config/axios";
export function postBeneficiariesAction(beneficiaries) {
  return async (dispatch) => {
    dispatch(postBeneficiaries());
    try {
      const {data}  = await clienteAxios
        .post(
          `/members/beneficiaries`,
          beneficiaries
        )
            dispatch(postBeneficiariesSuccess(beneficiaries));
            dispatch(getBeneficiariesAction());
            console.log("Respuesta POST Beneficiaries correcta", data);
    } catch (error) {
      console.log(error);
      console.log("Error al intentar agregar Beneficiaries");
    }
  };
}

const postBeneficiaries = (_) => ({
  type: POST_BENEFICIARIES,
  payload: true,
});

const postBeneficiariesSuccess = (beneficiaries) => ({
  type: POST_BENEFICIARIES_SUCCESS,
  payload: beneficiaries,
});

export function getBeneficiariesAction() {
  return async (dispatch) => {
    dispatch(getBeneficiaries());

    try {
      //Consulta GET de Microservicios
      const { data } = await clienteAxios.get(
        "/beneficiaries/table/1000049"
      );
      dispatch(getBeneficiariesSuccess(data));
      console.log(
        "------------- Beneficiaries cargados con exito ---------------------"
      );
    } catch (error) {
      console.log("------------ Error *DG* al cargar Beneficiaries ---------- ", error);
    }
  };
}

const getBeneficiaries = (_) => ({
  type: GET_BENEFICIARIES,
  payload: true,
});

const getBeneficiariesSuccess = (beneficiaries) => ({
  type: GET_BENEFICIARIES_SUCCESS,
  payload: beneficiaries,
});

export function deleteBeneficiariesAction(recnum) {
  return async (dispatch) => {
    dispatch(getBeneficiariesDetele(recnum));
    try {
      ///member/general/c?idprofileopera=${idprofileopera}&application=${application}
      ///member/general/:type?recnum=


      await clienteAxios.delete(
        `/member/general/b?recnum=${recnum}`
      );
      dispatch(deleteBeneficiariesSuccess());
      dispatch(getBeneficiariesAction());
      console.log("-------- Beneficiaries eliminado con exito --------");
    } catch (error) {
      console.log(error);
      console.log("------ Error al eliminar el Beneficiaries -----");
    }
  };
}

const getBeneficiariesDetele = (idprofileopera) => ({
  type: GET_BENEFICIARIES_DELETE,
  payload: idprofileopera,
});

const deleteBeneficiariesSuccess = (_) => ({
  type: BENEFICIARIES_DELETE_SUCCESS,
});

export function getBeneficiariesEditAction(beneficiaries) {
  return (dispatch) => {
    dispatch(getBeneficiariesEdit(beneficiaries));
  };
}

const getBeneficiariesEdit = (beneficiaries) => ({
  type: SELECT_BENEFICIARIES_EDIT,
  payload: beneficiaries,
});

export function editBeneficiariesAction(beneficiaries, recnum) {
  return async (dispatch) => {
    try {
      /* const  RECNUMcool = coowner.RECNUM;
            delete coowner.RECNUM; */
      delete beneficiaries.USERSOCIALMEDIA
      delete beneficiaries.SOCIALMEDIA
      delete beneficiaries.EMAIL_CONFIRM
      for (var key in beneficiaries) {
        if (key !== "socialNetworks") {
          var upper = key.toLowerCase();
          // check if it already wasn't uppercase
          if (upper !== key) {
            beneficiaries[upper] = beneficiaries[key];
            delete beneficiaries[key];
          }
        }
      }

      console.log("data a enviar PUT EDIT", beneficiaries);
      await clienteAxios.put(`/members/beneficiaries/${recnum}`, beneficiaries);
      dispatch(editBeneficiariesSuccess(beneficiaries));
      dispatch(getBeneficiariesAction());
      console.log("---- Actualizo beneficiaries ------");
    } catch (error) {
      console.log(error);
    }
  };
}

const editBeneficiariesSuccess = (beneficiaries) => ({
  type: BENEFICIARIES_EDIT_SUCCESS,
  payload: beneficiaries,
});



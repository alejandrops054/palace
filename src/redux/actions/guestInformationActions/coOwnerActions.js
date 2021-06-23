import {
    POST_COOWNER,
    POST_COOWNER_SUCCESS,
    GET_COOWNER,
    GET_COOWNER_SUCCESS,
    GET_COOWNER_DELETE,
    COOWNER_DELETE_SUCCESS,
    SELECT_COOWNER_EDIT,
    COOWNER_EDIT_SUCCESS,
    GET_SOCIALMEDIA,
    GET_SOCIALMEDIA_SUCCESS
} from '../../types'

import clienteAxios from '../../../config/axios';

export function postCoOwnerAction(coOwner) {
    return async (dispatch) => {
        dispatch(postCoOwner());
        delete coOwner.email_confirm
        try {
            const {data} = await clienteAxios.post('/members/coowners', coOwner)
              
                dispatch( postCoOwnerSuccess(coOwner));
                dispatch(getCoOwnerAction());
                console.log('Respuesta POST CoOwner correcta', data)
        } catch (error) {
            console.log(error);
            console.log('Error al intentar agregar method POST CoOwner')
        }
    }
}


const postCoOwner = (_) => ({
    type: POST_COOWNER,
    payload: true,
});

const postCoOwnerSuccess = (coOwner) => ({
    type: POST_COOWNER_SUCCESS,
    payload: coOwner,
});

export function postUpdateCoOwnerAction(coOwner) {
    return async (dispatch) => {
        dispatch(postUpdateCoOwner());
    }
}



export function getCoOwnerAction() {
    return async (dispatch) => {
        dispatch(getCoOwner());

        try {
            const { data } = await clienteAxios.get('/coowner/table/1000049?company=5');
            dispatch(getCoOwnerSuccess(data))
            console.log('----------------- CoOwners cargados con exito ----------------')
        } catch (error) {
            console.log(error);
            console.log("------------ Error *DG* al cargar CoOwner ---------- ", error);
        }

    }
}

export function obtainProductEditAction(idCoowner) {
    return (dispatch) => {
        dispatch(obtainProductoEdit(idCoowner))
    }
}

const obtainProductoEdit = idCoowner => ({
    type: OBTAIN_PRODUCT_EDIT_COOWNER,
    payload: idCoowner
})

const postUpdateCoOwner = (_) => ({
    type: POST_UPDATE_COOWNER,
    payload: true,
});

const postUpdateCoOwnerSuccess = (coOwner) => ({
    type: POST_UPDATE_COOWNER_SUCCESS,
    payload: coOwner,
});



const getCoOwner = (_) => ({
    type: GET_COOWNER,
    payload: true,
});

const getCoOwnerSuccess = (coOwners) => ({
    type: GET_COOWNER_SUCCESS,
    payload: coOwners,
});

export function deleteCoOwnerAction(recnum) {
    return async (dispatch) => {
        dispatch(getCoOwnerDetele(recnum));
        console.log('deleteCoOwnerAction recnum: ', recnum)
        try {
            await clienteAxios.delete(`/member/general/c?recnum=${recnum}`);
            dispatch(deleteCoOwnerSuccess());
            dispatch(getCoOwnerAction());
            console.log('------------- CoOwner eliminado con exito')
        } catch (error) {
            console.log(error);
            console.log('-------------  Error al eliminar el CoOwner')
        }
    }
};


const getCoOwnerDetele = (idprofileopera) => ({
    type: GET_COOWNER_DELETE,
    payload: idprofileopera,
});

const deleteCoOwnerSuccess = _ => ({
    type: COOWNER_DELETE_SUCCESS
})


export function obtenerCoOwnerEditarAction(coOwner) {
    return (dispatch) => {
        dispatch(obtenerCoOwnerEditar(coOwner))
    }
}

const obtenerCoOwnerEditar = coOwner => ({
    type: SELECT_COOWNER_EDIT,
    payload: coOwner
})

export function editCoOwnerAction(coowner, recnum) {
    return async (dispatch) => {

        try {
            /* const  RECNUMcool = coowner.RECNUM;
            delete coowner.RECNUM; */
            delete coowner.USERSOCIALMEDIA
            delete coowner.SOCIALMEDIA

            for (var key in coowner) {
                if (key !== "socialNetworks") {
                    var upper = key.toLowerCase();
                    // check if it already wasn't uppercase
                    if (upper !== key) {
                        coowner[upper] = coowner[key];
                        delete coowner[key];
                    }
                }

            }
            await clienteAxios.put(`/members/coowners/${recnum}`, coowner);
            dispatch(editCoOwnerSuccess(coowner));
            dispatch(getCoOwnerAction());
            console.log('------------ Actualizo coowner exitoso ------------')
        } catch (error) {
            console.log(error);
            console.log('--------- Error edit coOwner --------------')
        }
    }
}

const editCoOwnerSuccess = coowner => ({
    type: COOWNER_EDIT_SUCCESS,
    payload: coowner
})

export function getSocialMediaAction() {
    return async (dispatch) => {
        dispatch(getSocialMedia());

        try {
            // const {data} = await clienteAxios.get('/coowner/table?application=1000049&company=5');
            const { data } = await clienteAxios.get('/members/socialmedia/5/1001584/51168');
            dispatch(getSocialMediaSuccess(data))
            console.log('----------------- SocialMedia cargada con exito ----------------')
        } catch (error) {
            console.log(error);
            console.log("------------ Error *DG* al cargar SocialMedia ---------- ", error);
        }
    }
}
const getSocialMedia = _ => ({
    type: GET_SOCIALMEDIA,
    payload: true
})

const getSocialMediaSuccess = socialmedia => ({
    type: GET_SOCIALMEDIA_SUCCESS,
    payload: socialmedia
})
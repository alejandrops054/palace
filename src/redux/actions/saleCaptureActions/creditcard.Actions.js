import {
    POST_CREDITCARD,
    POST_CREDITCARD_SUCCESS,
    GET_CREDITCARD,
    GET_CREDITCARD_SUCCESS,
    GET_CREDITCARD_DELETE,
    CREDITCARD_DELETE_SUCCESS,
    SELECT_CREDITCARD_EDIT,
    CREDITCARD_EDIT_SUCCESS,
} from '../../types'

import clienteAxios from '../../../config/axios';

export function postCreditcardAction(Credidcard) {
    return async (dispatch) => {
        dispatch(postCreditcard());
        try {
            const {data} = await clienteAxios.post('/creditcards/saveMemberCreditCard', Credidcard)
              
                dispatch( postCreditcardSuccess(Credidcard));
                dispatch(getCreditcardAction());
                console.log('Respuesta POST Creditcard correcta', data)
        } catch (error) {
            console.log(error);
            console.log('Error al intentar agregar method POST Creditcard')
        }
    }
}


const postCreditcard = (_) => ({
    type: POST_CREDITCARD,
    payload: true,
});

const postCreditcardSuccess = (Credidcard) => ({
    type: POST_CREDITCARD_SUCCESS,
    payload: Credidcard,
});

export function postUpdateCreditcardAction(Credidcard) {
    return async (dispatch) => {
        dispatch(postUpdateCreditcard());
    }
}



export function getCreditcardAction() {
    return async (dispatch) => {
        dispatch(getCreditcard());

        try {
            const { data } = await clienteAxios.get('/creditCards/getMemberCreditCardsByMember?application=1000005&status=A');
            dispatch(getCreditcardSuccess(data))
            console.log('----------------- Creditcard cargados con exito ----------------')
        } catch (error) {
            console.log(error);
            console.log("------------ Error *DG* al cargar Creditcard ---------- ", error);
        }

    }
}

export function obtainProductEditAction(recnum) {
    return (dispatch) => {
        dispatch(obtainProductoEdit(recnum))
    }
}

const obtainProductoEdit = recnum => ({
    type: OBTAIN_PRODUCT_EDIT_CREDITCARD,
    payload: recnum
})

const postUpdateCreditcard = (_) => ({
    type: POST_UPDATE_CREDITCARD,
    payload: true,
});

const postUpdateCreditcardSuccess = (Credidcard) => ({
    type: POST_UPDATE_CREDITCARD_SUCCESS,
    payload: Credidcard,
});



const getCreditcard = (_) => ({
    type: GET_CREDITCARD,
    payload: true,
});

const getCreditcardSuccess = (credidcards) => ({
    type: GET_CREDITCARD_SUCCESS,
    payload: credidcards,
});

export function deleteCreditcardAction(recnum, application) {
    return async (dispatch) => {
        dispatch(getCreditcardDetele(recnum, application));
        console.log('deleteCreditcardAction recnum: ', recnum, 'delete application', application)
        try {
            await clienteAxios.delete(`/creditCards/deleteMemberCreditCard?recnum=${recnum}&application=${application}`);
            dispatch(deleteCreditcardSuccess());
            dispatch(getCreditcardAction());
            console.log('------------- Creditcard eliminado con exito')
        } catch (error) {
            console.log(error);
            console.log('-------------  Error al eliminar el Creditcard')
        }
    }
};


const getCreditcardDetele = (idprofileopera) => ({
    type: GET_CREDITCARD_DELETE,
    payload: idprofileopera,
});

const deleteCreditcardSuccess = _ => ({
    type: CREDITCARD_DELETE_SUCCESS
})


export function obtenerCreditcardEditarAction(Credidcard) {
    return (dispatch) => {
        dispatch(obtenerCreditcardEditar(Credidcard))
    }
}

const obtenerCreditcardEditar = Credidcard => ({
    type: SELECT_CREDITCARD_EDIT,
    payload: Credidcard
})

export function editCreditcardAction(credidcard, recnum) {
    return async (dispatch) => {

        try {
            await clienteAxios.put(`/creditcards/updatemembercreditcard/${recnum}`, credidcard);
            dispatch(editCreditcardSuccess(credidcard));
            dispatch(getCreditcardAction());
            console.log('------------ Actualizo Creditcard exitoso ------------')
        } catch (error) {
            console.log(error);
            console.log('--------- Error edit Creditcard --------------')
        }
    }
}

const editCreditcardSuccess = credidcard => ({
    type: CREDITCARD_EDIT_SUCCESS,
    payload: credidcard
})

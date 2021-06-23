import {
    ADD_EMAIL,
    DELETE_EMAIL,
    DELETE_EMAIL_CONFIRM,
    ADD_EMAIL_CONFIRM,
    GET_EMAIL,
    GET_EMAIL_SUCCESS,
    POST_EMAIL,
    POST_EMAIL_SUCCESS,
    EMAIL_EDIT_SUCCESS,
    GET_EMAIL_DELETE,
    EMAIL_DELETE_SUCCESS,
    ADD_EMAIL_TABLE
} from '../types';

import clienteAxios from '../../config/axios';

export function addEmailAction(data) {
    return async (dispatch) => {
        dispatch(addEmail(data));
    }
}

const addEmail = (dataEmail) => ({
    type: ADD_EMAIL,
    payload: dataEmail
})
export function addEmailTableAction(data) {
    return async (dispatch) => {
        dispatch(addEmailTable(data));
    }
}
const addEmailTable = (dataEmail) => ({
    type: ADD_EMAIL_TABLE,
    payload: dataEmail
})
export function deleteEmailAction() {
    return async (dispatch) => {
        dispatch(deleteEmail())
    }
}

const deleteEmail = (_) => ({
    type: DELETE_EMAIL,
    payload: true
})

export function deleteEmailCAction(recnum) {
    return async (dispatch) => {
        dispatch(deleteEmailC(recnum))
    }
}

const deleteEmailC = (recnum) => ({
    type: DELETE_EMAIL_CONFIRM,
    payload: recnum
})

export function getEmailAction() {
    return async (dispatch) => {
        dispatch(getEmail());

        try {
            const { data } = await clienteAxios.get('/profile/email/1000049/5');
            dispatch(getEmailSuccess(data))
            console.log('----------------- Email cargados con exito ----------------')
        } catch (error) {
            console.log(error);
            console.log("------------ Error *DG* al cargar Email ---------- ", error);
        }
    }
}
const getEmail = (_) => ({
    type: GET_EMAIL,
    payload: true,
});

const getEmailSuccess = (email) => ({
    type: GET_EMAIL_SUCCESS,
    payload: email,
});

export function postEmailAction(email) {
    return async (dispatch) => {
        dispatch(postEmail());
        try {
            const { data } = clienteAxios.post('/profile/email', email)
            dispatch(postEmailSuccess(email));
            dispatch(getEmailAction());
            console.log('Respuesta POST Email correcta')
        } catch (error) {
            console.log(error);
            console.log('Error al intentar agregar method POST Email')
        }
    }
}


const postEmail = (_) => ({
    type: POST_EMAIL,
    payload: true,
});

const postEmailSuccess = (email) => ({
    type: POST_EMAIL_SUCCESS,
    payload: email,
});
export function editEmailAction(email, recnum) {
    return async (dispatch) => {
        try {
            await clienteAxios.put(`/profile/email`);
            dispatch(editEmailSuccess(email));
        } catch (error) {
            console.log(error);
        }
    }
}

const editEmailSuccess = email => ({
    type: EMAIL_EDIT_SUCCESS,
    payload: email
})

export function deleteEmailProfileAction(recnum) {
    return async (dispatch) => {
        dispatch(getEmailProfileDetele(recnum));
        try {
            //await clienteAxios.delete(`/member/general/c?recnum=${recnum}`);
            await clienteAxios.delete(`/profle/email/${recnum}`);
            dispatch(deleteEmailProfileSuccess());
            dispatch(getEmailAction());
            console.log('Respuesta DELETE Email correcta')
        } catch (error) {
            console.log(error);
            console.log('Respuesta DELETE Email fallida')

        }
    }
};


const getEmailProfileDetele = (recnum) => ({
    type: GET_EMAIL_DELETE,
    payload: recnum,
});

const deleteEmailProfileSuccess = _ => ({
    type: EMAIL_DELETE_SUCCESS
})
import {
    LOADING, GET_MEMBER, GET_GUESTID, GET_PROFILEID, GET_MEMBERPROFILE,
    POST_COOWNER_SUCCESS,
    GET_COOWNER_SUCCESS,
    GET_COOWNER_DELETE,
    COOWNER_DELETE_SUCCESS,
    COOWNER_EDIT_SUCCESS,
    GET_SOCIALMEDIA_SUCCESS,
    GET_CITIES,
    SELECTED_CITY,
    CLEAN_STATE_CITY,
    ADD_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA_USER,
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
    ADD_EMAIL_TABLE,
    POST_BENEFICIARIES_SUCCESS,
    GET_BENEFICIARIES_SUCCESS,
    BENEFICIARIES_DELETE_SUCCESS,
    BENEFICIARIES_EDIT_SUCCESS,
    GET_BENEFICIARIES_DELETE
} from '../types/index';

import clienteAxios from '../../config/axios';

const validator = require('validator');


const loading = _ => ({
    type: LOADING,
    payload: true
});

 
/*Microservicio GET MemberByApplication*/
export const getMemberAction = (application) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const { data } = await clienteAxios.get(`/member/byapplication?application=${application}`)
            dispatch(getMemberSuccess(data))
        } catch (error) {
            console.log(error)
        }
    }
}

const getMemberSuccess = data => ({
    type: GET_MEMBER,
    payload: data
});


/*Microservicio GET GuestID*/

export const getGuestIdAction = (datainputs) => {
    const { guestid, arrivalDateFrom, arrivalDateTo, showDateFrom, showDateTo, first, last, hotel, folioInHouse,
        folioOutHouse } = datainputs

    function formato(texto) {
        return texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g, '$3/$2/$1');
    }

    return async (dispatch)=>{
        dispatch(loading());
        //https://0stlfq22ok.execute-api.us-east-1.amazonaws.com/dev/guestinformation/member/getguest?guestId=${guestid}&firstName=${first}&lastName=${last}&hotel=${hotel}&folio=${folioInHouse}&folioOutHouse=${folioOutHouse}&arrivalFrom=${formato(arrivalDateFrom)}&arrivalTo=${formato(arrivalDateTo)}&showFrom=${formato(showDateFrom)}&showTo=${formato(showDateTo)} 
        try {
            const { data } = await clienteAxios.get(`/member/getguest?guestId=${guestid}&firstName=${first}&lastName=${last}&hotel=${hotel}&folio=${folioInHouse}&folioOutHouse=${folioOutHouse}&arrivalFrom=${formato(arrivalDateFrom)}&arrivalTo=${formato(arrivalDateTo)}&showFrom=${formato(showDateFrom)}&showTo=${formato(showDateTo)}`)
            dispatch(getGuestId(data))
        } catch (error) {
            console.log(error)
        }
    }
}



const getGuestId = data => ({
    type: GET_GUESTID,
    payload: data
})


/* PROFILE ID*/
export const getProfileIdAction=(company, application)=>{
    return async (dispatch)=>{
        dispatch(loading());

        try {
            const { data } = await clienteAxios.get(`/member/shortid?company=${company}&application=${application}`)
            dispatch(getProfileId(data))
        } catch (error) {
            console.log(error)
        }
    }
}

const getProfileId = data => ({
    type: GET_PROFILEID,
    payload: data
})


/** MEMBERS PROFILE */

export const getMemberProfileAction=(idprofileopera,company, application)=>{
    return async (dispatch)=>{
        dispatch(loading());

        try {

            const { data } = await clienteAxios.get(`/member/profile?idProfileOpera=${idprofileopera}&company=${company}&application=${application}`)
            dispatch(getMemberProfile(data))
        } catch (error) {
            console.log(error)
        }
    }
}

const getMemberProfile = data => ({
    type: GET_MEMBERPROFILE,
    payload: data
})

/*Actions Coowner */
//funcion GET Coowner
export function getCoOwnerAction() {
    return async (dispatch) => {
        dispatch(loading());
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

const getCoOwnerSuccess = (coOwners) => ({
    type: GET_COOWNER_SUCCESS,
    payload: coOwners,
});

//funcion POST Coowner
export function postCoOwnerAction(coOwner) {
    return async (dispatch) => {
        dispatch(loading);
        delete coOwner.email_confirm
        try {
            const { data } = await clienteAxios.post('/members/coowners', coOwner)
            dispatch(postCoOwnerSuccess(data));
            dispatch(getCoOwnerAction());
        } catch (error) {
            console.log(error);
            console.log('Error al intentar agregar method POST CoOwner')
        }
    }
}

const postCoOwnerSuccess = (coOwner) => ({
    type: POST_COOWNER_SUCCESS,
    payload: coOwner,
});

//funcion PUT Cowner
export function editCoOwnerAction(coowner, recnum) {
    return async (dispatch) => {
        dispatch(loading());
        try {
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

//funcion DELETE Coowner
export function deleteCoOwnerAction(recnum) {
    return async (dispatch) => {
        dispatch(getCoOwnerDetele(recnum));
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
}

const getCoOwnerDetele = (idprofileopera) => ({
    type: GET_COOWNER_DELETE,
    payload: idprofileopera,
});

const deleteCoOwnerSuccess = _ => ({
    type: COOWNER_DELETE_SUCCESS
})

//funcion GET social media del Coowner
export function getSocialMediaAction() {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const { data } = await clienteAxios.get('/members/socialmedia/5/1001584/51168');
            dispatch(getSocialMediaSuccess(data))
            console.log('----------------- SocialMedia cargada con exito ----------------')
        } catch (error) {
            console.log(error);
            console.log("------------ Error *DG* al cargar SocialMedia ---------- ", error);
        }
    }
}
const getSocialMediaSuccess = socialmedia => ({
    type: GET_SOCIALMEDIA_SUCCESS,
    payload: socialmedia
})

/*GEOGRAPHIC LOCATION 
//
*/
export function getCitiesAction (valor,paginaactual, perPage){
    return async (dispatch) =>{
        dispatch(loading());

        try {
            if(validator.isPostalCode(valor,'any')){
                const {data} = await clienteAxios.get(`/members/geographiclocation?numberItems=${perPage}&page=${paginaactual}&zipcode=${valor}`)
                dispatch( getCitiesSuccess(data) )

            }else{
                const {data} = await clienteAxios.get(`/members/geographiclocation?numberItems=${perPage}&page=${paginaactual}&name=${valor}`)
                dispatch( getCitiesSuccess(data) )
            }

        // /members/geographiclocation?numberItems=10&page=2&name=arg
        } catch (error) {
            console.log(error);
        }

    }
}

const getCitiesSuccess = (Cities) => {
    return{
        type: GET_CITIES,
        payload: Cities
    }
}

export function selectGeoAction(city){
    return async (dispatch) =>{
        dispatch(selectTable(city))
    }
}

const selectTable =city=>{
    return{
        type: SELECTED_CITY,
        payload:city
    }
}

export function cleanGeographicAction() {
    return async (dispatch) => {
        dispatch(cleanCitiesSelected())
    }
}

const cleanCitiesSelected = (_) => ({
    type: CLEAN_STATE_CITY,
})
/*Actions Beneficiaries */
//funcion GET Beneficiaries
export function getBeneficiariesAction() {
    return async (dispatch) => {
        dispatch(loading());
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

const getBeneficiariesSuccess = (beneficiaries) => ({
    type: GET_BENEFICIARIES_SUCCESS,
    payload: beneficiaries,
});

//funcion POST Beneficiaries
export function postBeneficiariesAction(beneficiaries) {
    return async (dispatch) => {
        dispatch(loading());
        try {
            const { data } = await clienteAxios
                .post(
                    `/members/beneficiaries`,
                    beneficiaries
                )
            dispatch(postBeneficiariesSuccess(beneficiaries));
            dispatch(getBeneficiariesAction());
        } catch (error) {
            console.log(error);
            console.log("Error al intentar agregar Beneficiaries");
        }
    };
}

const postBeneficiariesSuccess = (beneficiaries) => ({
    type: POST_BENEFICIARIES_SUCCESS,
    payload: beneficiaries,
});
//funcion PUT Beneficiaries
export function editBeneficiariesAction(beneficiaries, recnum) {
    return async (dispatch) => {
        try {
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
//funcion DELETE Beneficiaries
export function deleteBeneficiariesAction(recnum) {
    return async (dispatch) => {
        dispatch(getBeneficiariesDetele(recnum));
        try {
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
//social media

export function addSocialMediaAction(data) {
    return async(dispatch) => {
        dispatch(addSocialMedia(data));
    }
}

const addSocialMedia = (dataSm) => ({
    type: ADD_SOCIAL_MEDIA,
    payload: dataSm
})

export function deleteSocialMediaUserAction(user){
    return async(dispatch) => {
        dispatch(deleteSocialMediaUser(user))
    }
}

const deleteSocialMediaUser = (user) => ({
    type: DELETE_SOCIAL_MEDIA_USER,
    payload: user
})

export function deleteSocialMediaAction(){
    return async(dispatch) => {
        dispatch(deleteSocialMedia())
    }
}

const deleteSocialMedia = (_) => ({
    type: DELETE_SOCIAL_MEDIA,
    payload: true 
})

//email

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
        dispatch(loading());

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


const getEmailSuccess = (email) => ({
    type: GET_EMAIL_SUCCESS,
    payload: email,
});

export function postEmailAction(email) {
    return async (dispatch) => {
        dispatch(loading());
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
}


const getEmailProfileDetele = (recnum) => ({
    type: GET_EMAIL_DELETE,
    payload: recnum,
});

const deleteEmailProfileSuccess = _ => ({
    type: EMAIL_DELETE_SUCCESS
})

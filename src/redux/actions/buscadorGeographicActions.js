import {GET_CITIES, GET_CITIES_FAILURE, GET_CITIES_SUCCESS, SELECT_TABLE_GEO, GET_GEOLOCA,DELETE_GEO} from '../types/index';
import clienteAxios from '../../config/axios';
var validator = require('validator');
export const getCitiesAction = () => {
    return (dispatch) => {
        dispatch( getCities() )
    }
}


const getCities= _ => ({
    type: GET_CITIES,
    payload: true
})



export function CitysAction (valor,paginaactual, perPage){
    return async (dispatch) =>{
        dispatch(getCitiesAction());

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

const getCitiesSuccess = (City) => {
    return{
        type: GET_CITIES_SUCCESS,
        payload: City
    }
}
 const getfailureCities = () => {
    return{
        type: GET_CITIES_FAILURE,
        payload: error
    }
}

export function selectGeoAction(city){
    return async (dispatch) =>{
        dispatch(getGeo())
        dispatch(selectTable(city))
    }
}

const selectTable =city=>{
    return{
        type: SELECT_TABLE_GEO,
        payload:city
    }
}

const getGeo=_=>{
    return{
        type:GET_GEOLOCA,
        payload: true
    }
}

export function deleteGeoAction() {
    return async (dispatch) => {
        dispatch(deleteGeo())
    }
}

const deleteGeo = (_) => ({
    type: DELETE_GEO,
    payload: true
})

export function updateNameCity(location, newCity) {    
    return async (dispatch) => {
        let info = {
            name: newCity,
            cvuser:"GLJIMENEZ",
            cvlada:"",
            status:"A"
        };
        await clienteAxios.put(`/vatrate/cityname/${location.RECNUM}`, info);
    }
}


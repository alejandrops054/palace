import {
    LOADING,
    NEW_CREDITCARD,
    NEW_CREDITCARD_SUCCESSS,
    NEW_CREDITCARD_ERROR
    } from '../types/index';

    import clienteAxios from '../../config/axios';

    const loading = _ =>({
        type: LOADING,
        payload: true
    });
    //CREAR CREDICTCARD
    export function crearNuevoCreditCard(creditcard){
        return(dispatch)=>{
            dispatch(agregarCreditCard());
        }
    }
    
    const agregarCreditCard = () =>({
        type:NEW_CREDITCARD,
    });
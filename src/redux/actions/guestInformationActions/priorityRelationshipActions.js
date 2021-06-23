import {
    POST_PRIORITY_RELATIONSHIP_SUCCESS
    } from '../../types';


    import clienteAxios from '../../../config/axios';


    export function postRelationshipAction(relationship) {
        return async (dispatch) => {
            dispatch(postRelationship());
         
            try {
               dispatch(postRelationshipSuccess(relationship))
               console.log('Action ',relationship)
            } catch (error) {
                console.log(error);
                console.log('Error al intentar agregar method POST CoOwner')
            }
        }
    }
    
    
    const postRelationship = (_) => ({
        type: POST_PRIORITY_RELATIONSHIP,
        payload: true,
    });
    
    const postRelationshipSuccess = (relationship) => ({
        type: POST_PRIORITY_RELATIONSHIP_SUCCESS,
        payload: relationship,
    });
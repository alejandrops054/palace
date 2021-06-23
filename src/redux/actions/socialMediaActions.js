import {
    ADD_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA_USER,
    GET_USER_SOCIAL_MEDIA
} from '../types';

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
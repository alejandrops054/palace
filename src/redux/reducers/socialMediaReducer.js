import {
    ADD_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA,
    GET_USER_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA_USER
} from '../types';


const initialState = ({
    socialMedia: [],
    socialMediaDelete: null,
    socialMediaUser: null
});

export default function (state = initialState, action) {
    switch(action.type){
        case ADD_SOCIAL_MEDIA:
            return {
                ...state,
                socialMedia: [...state.socialMedia, action.payload] 
            }
        
        case GET_USER_SOCIAL_MEDIA:
            return {
                ...state,
                socialMediaUser: action.payload
            }
        case DELETE_SOCIAL_MEDIA_USER:
            return{
                ...state,
                socialMedia: state.socialMedia.filter((data) => data.usersocialnetwork !== action.payload),
                socialMediaUser: null
            }
            case DELETE_SOCIAL_MEDIA:
                return{
                    ...state,
                    socialMedia: []
                }

        default: 
            return state
    }
    
};

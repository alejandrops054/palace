import { data } from 'jquery';
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
    GET_USER_SOCIAL_MEDIA,
    DELETE_SOCIAL_MEDIA_USER,
    ADD_EMAIL,
    DELETE_EMAIL,
    DELETE_EMAIL_CONFIRM,
    GET_EMAIL_SUCCESS,
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


const initialState = {
    loading: false,
    data: null,
    AccesoCamposGolfObject: [],
    AccesoHotelsObject: [],
    AccessGolfCourses: [],
    AreadeObject: [],
    Beneficiaries: {
        data: [],
        beneficiariesdelete: null,
        beneficiariesedit: null,
    },
    CancelCodeObject: [],
    CancelReasonObject: [],
    Ciudad: {
        data: null,
        selectedCity: null,
    },
    CoOwners: {
        data: [],
        ownerdelete: null,
        owneredit: null,
        socialMedia: [],
    },
    SocialMedia: {
        data: [],
        socialMediaDelete: null,
        socialMediaUser: null
    },
    Email: {
        email: [],
        emailDelete: null,
        emailconfirm: null,
        emaildataget: [],
        emailedit: {},
        recnum: null
    },
    CompanyObject: [],
    ContractTexts: [],
    Currency: [],
    DerechoObject: [],
    EliteProductsCustomList: [],
    GuestId: null,
    ProfileId: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case GET_MEMBER:
            return {
                ...state,
                data: action.payload
            }
        //guest id 
        case GET_GUESTID:
            return {
                ...state,
                GuestId: action.payload
            }
        case GET_PROFILEID:
            return {
                ...state,
                ProfileId: action.payload
            }
        case GET_MEMBERPROFILE:
            return {
                ...state,
                MemberProfiles: action.payload
            }
        /*Case Coowner */
        case GET_COOWNER_SUCCESS:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    data: action.payload
                }
            }
        case POST_COOWNER_SUCCESS:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    data: [...state.CoOwners.data, action.payload]
                }
            }
        case GET_COOWNER_DELETE:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    ownerdelete: action.payload
                }
            }
        case COOWNER_DELETE_SUCCESS:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    data: state.CoOwners.data.filter(coOwners => coOwners.IDPROFILEOPERA !== state.CoOwners.ownerdelete),
                    ownerdelete: null
                }
            }
        case COOWNER_EDIT_SUCCESS:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    owneredit: null,
                    data: state.CoOwners.data.map(owner =>
                        owner.COOWNER_ID === action.payload.profile ? owner = action.payload : owner
                    )
                }
            }
        case GET_SOCIALMEDIA_SUCCESS:
            return {
                ...state,
                CoOwners: {
                    ...state.CoOwners,
                    socialmedia: action.payload
                }

            }
        //Social media
        case ADD_SOCIAL_MEDIA:
            return {
                ...state,
                SocialMedia: {
                    ...state.SocialMedia,
                    data: [...state.SocialMedia.data, action.payload]
                }
            }
        /*Case Beneficiaries */
        case GET_BENEFICIARIES_SUCCESS:
            return {
                ...state,
                Beneficiaries: {
                    ...state.Beneficiaries,
                    data: action.payload
                }
            }
        case POST_BENEFICIARIES_SUCCESS:
            return {
                    ...state,
                    Beneficiaries: {
                        ...state.Beneficiaries,
                        data: [...state.Beneficiaries.data, action.payload]
                    }
            }
        case BENEFICIARIES_EDIT_SUCCESS:
            return {
                    ...state,
                    Beneficiaries: {
                        ...state.Beneficiaries,
                        beneficiariesedit: null,
                        data: state.Beneficiaries.map(beneficiaries =>
                            beneficiaries.BENEFICIARY_ID === action.payload.profile ? beneficiaries = action.payload : beneficiaries
                        )
                    }
            }
        case GET_BENEFICIARIES_DELETE:
            return {
                    ...state,
                    Beneficiaries: {
                        ...state.Beneficiaries,
                        beneficiariesdelete: action.payload
                    }
            }
        case BENEFICIARIES_DELETE_SUCCESS:
            return {
                    ...state,
                    Beneficiaries: {
                        ...state.Beneficiaries,
                        beneficiariesdelete: null
                    }
            }
        case GET_USER_SOCIAL_MEDIA:
            return {
                    ...state,
                    SocialMedia: {
                        ...state.data,
                        socialMediaUser: action.payload
                }
            }
        case DELETE_SOCIAL_MEDIA_USER:
            return { 
                    ...state,
                    SocialMedia: {
                        ...state.SocialMedia,
                        data: state.SocialMedia.data.filter((data) => data.usersocialnetwork !== action.payload),
                        socialMediaUser: null
                    }

            }
        case DELETE_SOCIAL_MEDIA:
            return {
                    ...state,
                    socialMedia: {
                        ...state.socialMedia,
                        data: []
                    }
            }
        case POST_EMAIL_SUCCESS:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        loading: false,
                        emaildataget: [...state.Email.email, action.payload]
                    }
            }
        case GET_EMAIL_SUCCESS:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        emaildataget: action.payload
                    }
            }
        case ADD_EMAIL:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        emaildataget: [...state.Email.email, action.payload]
                    }

            }
        case ADD_EMAIL_TABLE:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        email: [...state.Email.email, action.payload]
                    }

            }
        case EMAIL_EDIT_SUCCESS:
            return {
                    ...state,
                    Email: {
                        ...state.Email.member.Email,
                        emailedit: null,
                        // emaildataget: state.emaildataget.map(email =>
                        //     email.COOWNER_ID === action.payload.profile ? email = action.payload : email
                        // )
                    }

            }
        case DELETE_EMAIL_CONFIRM:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        email: state.Email.email.filter((data) => data.recnum !== action.payload),
                        emailconfirm: null
                    }
            }
        case DELETE_EMAIL:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        email: []
                    }
            
            }
        case GET_EMAIL_DELETE:
            return {
                member: {
                    ...state.member,
                    Email: {
                        ...state.member.Email,
                        recnum: action.payload
                    }
                }

            }
        case EMAIL_DELETE_SUCCESS:
            return {
                    ...state,
                    Email: {
                        ...state.Email,
                        emaildataget: state.Email.emaildataget.filter(email => email.Recnum !== state.recnum),
                        recnum: null
                    }
            }
        case GET_CITIES:
            return {
                    ...state,
                    Ciudad: {
                        ...state.Ciudad,
                        data: action.payload
                    }
            }
        case SELECTED_CITY:
            return {
                    ...state,
                    Ciudad: {
                        ...state.Ciudad,
                        selectedCity: action.payload
                }
            }
        case CLEAN_STATE_CITY:
            return {
                ...state,
                    Ciudad: {
                        ...state.Ciudad,
                        data: []
                    }
                }
        default:
            return state
    }
}

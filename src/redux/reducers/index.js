import { combineReducers } from 'redux';
import memberReducer from '../reducers/memberReducer';
import notesReducer from '../reducers/notesReducer'
import coOwnerReducer from '../reducers/guestInformationReducer/coOwnerReducer'
import beneficiariesReducer from '../reducers/guestInformationReducer/beneficiariesReducer'
import geographicLocationReducer from '../reducers/buscadorGeographicReducer'
import socialMediReducer from '../reducers/socialMediaReducer'
import EmailReducer from '../reducers/emailReducer'
import memberByApplicationReducer from '../reducers/guestInformationReducer/memberByApplicationReducer'
import guestIdReducer from '../reducers/guestInformationReducer/guestIdReducer'
import profileIdReducer from '../reducers/guestInformationReducer/profileIdReducer'
import memberProfileReducer from '../reducers/guestInformationReducer/memberProfileReducer'
<<<<<<< HEAD
import creditCardsReducer  from '../reducers/saleCaptureActions/creditcard.reducers'
=======
import affiliationBasicReducer from '../reducers/guestInformationReducer/affiliationBasicReducer'

>>>>>>> master

export default combineReducers({
    member: memberReducer,
    notes: notesReducer,
    coowner: coOwnerReducer,
    beneficiaries: beneficiariesReducer,
    geographicLocation: geographicLocationReducer,
    socialMedia: socialMediReducer,
    email: EmailReducer,
    memberbyapplication: memberByApplicationReducer,
    guestid: guestIdReducer,
    profileid: profileIdReducer,
    memberprofile: memberProfileReducer,
<<<<<<< HEAD
    creditcard: creditCardsReducer
=======
    affiliationBasicInfo: affiliationBasicReducer,

>>>>>>> master
});
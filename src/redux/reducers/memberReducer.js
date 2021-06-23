import {
    GUEST_INFORMATION,
    SALE_CAPTURE,
    BENEFITS,
    PACKAGE_ACCESS,
    VAT_RATE,
    ADD_MEMBER_SUCCESS
} from '../types/index';


const initialState = {
    guestInformation: [
        {originInformation: 
            {
              office:'',
              project:'',
              application:'',
              previousApplication:'',
              nextApplication:'',
              guestId:'',
              profileId:'',
              ownerId:'',
              ownerName:'',
              guestName:'',
              profileName:'',
              title:'',
              lastName:''        
            }
          }
    ],
    saleCapture: {},
    benefits: {},
    packageAccess: {},
    vatRate: {},
    addMemberSucces: false
}

export default function (state = initialState, action) {

    switch (action.type) {

        case GUEST_INFORMATION:
            return{
                ...state,
                originInformation: action.payload
            }


        default:
            return state;
    }
}
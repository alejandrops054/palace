import {
    GUEST_INFORMATION,
    SALE_CAPTURE,
    BENEFITS,
    PACKAGE_ACCESS,
    VAT_RATE,
    ADD_MEMBER_SUCCESS
} from '../types';

export function createGuestInformation(data){
    return async (dispatch) => {
        dispatch(guestInformation(object));
    }
}

const guestInformation = data => ({
    type: GUEST_INFORMATION,
    payload: object
});

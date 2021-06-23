import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ClausesReservationsRates from '../../../../components/special-letter-titles-setting/tables/ClausesReservationsRates'

describe('ClausesReservationsRates component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ClausesReservationsRates/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ClausesEliteBenefits from '../../../../components/special-letter-titles-setting/tables/ClausesEliteBenefits'

describe('ClausesEliteBenefits component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ClausesEliteBenefits/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
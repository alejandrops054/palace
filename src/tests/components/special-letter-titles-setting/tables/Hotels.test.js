import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Hotels from '../../../../components/special-letter-titles-setting/tables/Hotels'

describe('Hotels component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Hotels/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
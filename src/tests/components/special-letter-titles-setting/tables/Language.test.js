import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Language from '../../../../components/special-letter-titles-setting/tables/Language'

describe('Language component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Language/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
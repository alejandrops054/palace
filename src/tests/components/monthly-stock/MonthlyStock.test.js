import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MonthlyStock from '../../../components/monthly-stock/MonthlyStock'

describe('MonthlyStock component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MonthlyStock/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})

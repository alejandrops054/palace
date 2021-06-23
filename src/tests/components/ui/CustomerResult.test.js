import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CustomerResult from '../../../components/ui/CustomerResult';

describe('Pueba en <CustomerResult/>', () => {
    test('Debe renderizar el CustomerResult ', () => {

        

   
        const wrapper = shallow(
            <CustomerResult
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})

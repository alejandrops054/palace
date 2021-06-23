import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Download from '../../../components/ui/Download';


describe('Pueba en <Download/>', () => {
    test('Debe renderizar el dropdown menu', () => {

        const wrapper = shallow( <Download/> );

        expect(wrapper).toMatchSnapshot();
    })

})
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import LiTab from '../../../components/ui/LiTab';

describe('Pueba en <LiTab/>', () => {
    test('Debe renderizar la tabla', () => {

        const wrapper = shallow(
            <LiTab/>
        );

        expect(wrapper).toMatchSnapshot();
    })

})

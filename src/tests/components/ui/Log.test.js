import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import {Log} from '../../../components/index';

describe('Pueba en <Log/>', () => {
    test('Debe renderizar el componente', () => {

        const wrapper = shallow(<Log/>);

        expect(wrapper).toMatchSnapshot();
    })

})

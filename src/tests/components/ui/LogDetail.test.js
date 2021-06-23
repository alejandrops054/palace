import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import {LogDetail} from '../../../components/index';

describe('Pueba en <LogDetail/>', () => {
    test('Debe renderizar el componente', () => {

        const wrapper = shallow(<LogDetail/>);

        expect(wrapper).toMatchSnapshot();
    })

})

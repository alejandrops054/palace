import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import {LogFilters} from '../../../components/ui/LogFilters';

describe('Pueba en <LogFilters/>', () => {
    test('Debe renderizar el componente', () => {

        const wrapper = shallow(<LogFilters/>);

        expect(wrapper).toMatchSnapshot();
    })

})

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import {Company} from '../../../components/companies/Company';

describe('Pueba en <Company/>', () => {
    test('Debe renderizar el componente', () => {

        const wrapper = shallow(<Company/>);

        expect(wrapper).toMatchSnapshot();
    })

})

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Modal from '../../../components/ui/Modal';

describe('Pueba en <Modal/>', () => {
    test('Debe renderizar el modal y componente', () => {

        const wrapper = shallow(
            <Modal/>
        );

        expect(wrapper).toMatchSnapshot();
    })

})
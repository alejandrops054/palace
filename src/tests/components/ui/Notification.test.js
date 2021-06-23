import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Notification from '../../../components/ui/Notification';

describe('Pueba en <Notification/>', () => {
    test('Debe renderizar notificaciones', () => {

        const wrapper = shallow(
            <Notification/>
        );

        expect(wrapper).toMatchSnapshot();
    })

})
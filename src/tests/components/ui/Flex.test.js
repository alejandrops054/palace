import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Flex from '../../../components/ui/Flex';


describe('Pueba en <Flex/>', () => {

    test('Renderiza un titulo en H5 ', () => {

        const wrapper = shallow(
            <Flex
                title='Titulo Prueba'
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
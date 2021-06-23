import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Header from '../../../components/ui/Header';


describe('Pueba en <Header/>', () => {

    test('Renderiza un titulo en H5 ', () => {

        const wrapper = shallow(
            <Header
                title='Titulo Prueba'
                icon='fas fa-clock'
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
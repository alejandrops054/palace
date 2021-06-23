import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Fecha from '../../../components/ui/Fecha';


describe('Pueba en <Fecha/>', () => {

    test('Debe renderizar label con fecha y props que recibe', () => {

        const wrapper = shallow(
            <Fecha
                etiqueta={'Etiqueta Prueba'}
                color='white'
                tamanio='1rem'
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})
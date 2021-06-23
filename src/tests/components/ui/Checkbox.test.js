/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Checkbox from '../../../components/ui/Checkbox';

describe('Pueba en <Checkbox/>', () => {
    test('Debe renderizar el Checkbox ', () => {

        const name = 'Checkbox';
        const value = 'true';
        const label = 'Pago inicial en efectivo';


   
        const wrapper = shallow(
            <Checkbox
                name = {name}
                value = {value}
                label = {label}
            />
        );

        expect(wrapper).toMatchSnapshot();
    })

})

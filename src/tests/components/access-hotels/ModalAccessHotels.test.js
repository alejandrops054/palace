/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ModalAccessHotels from '../../../components/access-hotels/ModalAccessHotels'

describe('Pruebas del componente ModalAccessHotels ', () => {
    test('Creacion de ModalAccessHotels', () => {
        
        const wrapper = shallow(<ModalAccessHotels/>)

        expect(wrapper).toMatchSnapshot();
    })
})
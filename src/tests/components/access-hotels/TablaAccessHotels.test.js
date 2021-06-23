/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TablaAccessHotels from '../../../components/access-hotels/TablaAccessHotels'

describe('Pruebas del componente TablaAccessHotels ', () => {
    test('Creacion de TablaAccessHotels', () => {
        
        const wrapper = shallow(<TablaAccessHotels/>)

        expect(wrapper).toMatchSnapshot();
    })
})
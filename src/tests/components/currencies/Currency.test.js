 /* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Currency from '../../../components/currencies/Currency'

describe('Pruebas del componente Currency', () => {
    test('Creacion de Currency', () => {
        
        const wrapper = shallow(<Currency/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})

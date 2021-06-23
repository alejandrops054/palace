 /* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Currencies from '../../../components/currencies/Currencies'

describe('Pruebas del componente Currencies', () => {
    test('Creacion de Currencies', () => {
        
        const wrapper = shallow(<Currencies/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
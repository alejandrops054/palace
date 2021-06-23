/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Promises from '../../../components/member-inquiry/Promises'

describe('Pruebas del componente Promises', () => {
    test('Creacion de Promises', () => {
        
        const wrapper = shallow(<Promises/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
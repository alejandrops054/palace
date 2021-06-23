/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Conciliations from '../../../components/member-inquiry/Conciliations'

describe('Pruebas del componente Conciliations', () => {
    test('Creacion de Conciliations', () => {
        
        const wrapper = shallow(<Conciliations/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
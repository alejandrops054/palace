/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import SapAccountingSideBar from '../../../components/accounting-accounts/SapAccountingSideBar'

describe('Pruebas del componente SapAccountingSideBar ', () => {
    test('Creacion de SapAccountingSideBar', () => {
        
        const wrapper = shallow(<SapAccountingSideBar/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import SapAccounting from '../../../components/accounting-accounts/SapAccounting'

describe('Pruebas del componente SapAccounting ', () => {
    test('Creacion de SapAccounting', () => {
        
        const wrapper = shallow(<SapAccounting/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
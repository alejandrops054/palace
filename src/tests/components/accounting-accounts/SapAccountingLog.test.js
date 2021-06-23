/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import SapAccountingLog from '../../../components/accounting-accounts/SapAccountingLog'

describe('Pruebas del componente SapAccountingLog ', () => {
    test('Creacion de SapAccountingLog', () => {
        
        const wrapper = shallow(<SapAccountingLog/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
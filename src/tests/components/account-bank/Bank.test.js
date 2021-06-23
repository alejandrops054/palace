/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Bank from '../../../components/account-bank/Bank'

describe('Pruebas del componente Bank ', () => {
    test('Creacion de Bank', () => {
        
        const wrapper = shallow(<Bank/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
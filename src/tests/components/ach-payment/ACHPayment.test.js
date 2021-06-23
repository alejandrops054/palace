/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import ACHPayment from '../../../components/ach-payment/ACHPayment'

describe('Pruebas del componente ACHPayment ', () => {
    test('Creacion de snapashot', () => {
        
        const wrapper = shallow(<ACHPayment/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
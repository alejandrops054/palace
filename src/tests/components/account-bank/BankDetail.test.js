/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import BankDetail from '../../../components/account-bank/BankDetail'

describe('Pruebas del componente BankDetail ', () => {
    test('Creacion de BankDetail', () => {
        
        const wrapper = shallow(<BankDetail/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
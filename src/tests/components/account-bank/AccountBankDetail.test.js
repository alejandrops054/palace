/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import AccountBankDetail from '../../../components/account-bank/AccountBankDetail'

describe('Pruebas del componente AccountBankDetail ', () => {
    test('Creacion de AccountBankDetail', () => {
        
        const wrapper = shallow(<AccountBankDetail/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
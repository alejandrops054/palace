/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import AccountingAccountsCatalog from '../../../components/accounting-accounts/AccountingAccountsCatalog'

describe('Pruebas del componente AccountingAccountsCatalog ', () => {
    test('Creacion de AccountingAccountsCatalog', () => {
        
        const wrapper = shallow(<AccountingAccountsCatalog/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import RolesTable from '../../../components/account-inquiry/RolesTable'

describe('Pruebas del componente RolesTable ', () => {
    test('Creacion de RolesTable', () => {
        
        const wrapper = shallow(<RolesTable/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
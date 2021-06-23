/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import AddAccessModal from '../../../components/add-access-golf-course/AddAccessModal'

describe('Pruebas del componente AddAccessModal ', () => {
    test('Creacion de AddAccessModal', () => {
        
        const wrapper = shallow(<AddAccessModal/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
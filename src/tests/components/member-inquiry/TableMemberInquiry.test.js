/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import TableMemberInquiry from '../../../components/member-inquiry/components/TableMemberInquiry'

describe('Pruebas del componente TableMemberInquiry', () => {
    test('Creacion de TableMemberInquiry', () => {
        
        const wrapper = shallow(<TableMemberInquiry/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
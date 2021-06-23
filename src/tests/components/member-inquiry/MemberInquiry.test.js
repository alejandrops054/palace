/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import MemberInquiry from '../../../components/member-inquiry/MemberInquiry'

describe('Pruebas del componente MemberInquiry', () => {
    test('Creacion de MemberInquiry', () => {
        
        const wrapper = shallow(<MemberInquiry/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
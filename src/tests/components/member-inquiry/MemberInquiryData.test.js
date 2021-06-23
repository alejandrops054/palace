/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import MemberInquiryData from '../../../components/member-inquiry/components/MemberInquiryData'

describe('Pruebas del componente MemberInquiryData', () => {
    test('Creacion de MemberInquiryData', () => {
        
        const wrapper = shallow(<MemberInquiryData/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
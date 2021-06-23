/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import BreadCrumbsMemberInquiry from '../../../components/member-inquiry/components/BreadCrumbsMemberInquiry'

describe('Pruebas del componente BreadCrumbsMemberInquiry', () => {
    test('Creacion de BreadCrumbsMemberInquiry', () => {
        
        const wrapper = shallow(<BreadCrumbsMemberInquiry/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
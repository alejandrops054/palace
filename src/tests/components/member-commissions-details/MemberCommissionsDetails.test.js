/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import MemberCommissionsDetails from '../../../components/member-commissions-details/MemberCommissionsDetails'

describe('Pruebas del componente MemberCommissionsDetails', () => {
    test('Creacion de MemberCommissionsDetails', () => {
        
        const wrapper = shallow(<MemberCommissionsDetails/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})

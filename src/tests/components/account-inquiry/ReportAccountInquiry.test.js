/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import ReportAccountInquiry from '../../../components/account-inquiry/ReportAccountInquiry'

describe('Pruebas del componente ReportAccountInquiry ', () => {
    test('Creacion de ReportAccountInquiry', () => {
        
        const wrapper = shallow(<ReportAccountInquiry/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
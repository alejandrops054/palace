/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import ReportAccountInquiryMI from '../../../components/account-inquiry/ReportAccountInquiryMI'

describe('Pruebas del componente ReportAccountInquiryMI ', () => {
    test('Creacion de ReportAccountInquiryMI', () => {
        
        const wrapper = shallow(<ReportAccountInquiryMI/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})


/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import ReportAccountInquiryModal from '../../../components/account-inquiry/ReportAccountInquiryModal'

describe('Pruebas del componente ReportAccountInquiryMI ', () => {
    test('Creacion de ReportAccountInquiryMI', () => {
        
        const wrapper = shallow(<ReportAccountInquiryModal/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
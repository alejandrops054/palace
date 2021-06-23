/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import ManagementReports from '../../../components/management-reports/ManagementReports'

describe('Pruebas del componente ManagementReports', () => {
    test('Creacion de ManagementReports', () => {
        
        const wrapper = shallow(<ManagementReports/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
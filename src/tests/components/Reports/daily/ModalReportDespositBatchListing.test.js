/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ModalReportDespositBatchListing from '../../../../components/reports/daily/ModalReportDespositBatchListing'

describe('ModalReportDespositBatchListing component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ModalReportDespositBatchListing/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
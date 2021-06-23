/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import EInvoiceCancellation from '../../../components/e-invoice-cancellation/EInvoiceCancellation'

describe('EInvoiceCancellation component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<EInvoiceCancellation/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
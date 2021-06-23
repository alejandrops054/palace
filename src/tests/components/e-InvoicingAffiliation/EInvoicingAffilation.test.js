/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import EInvoicingAffilation from '../../../components/e-InvoicingAffiliation/EInvoicingAffilation'

describe('EInvoicingAffilation component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<EInvoicingAffilation/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
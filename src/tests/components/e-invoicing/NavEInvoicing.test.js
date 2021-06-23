/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NavEInvoicing from '../../../components/e-invoicing/NavEInvoicing'

describe('NavEInvoicing component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<NavEInvoicing/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
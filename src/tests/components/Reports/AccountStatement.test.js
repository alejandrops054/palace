/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccountStatement from '../../../components/reports/AccountStatement'

describe('AccountStatement component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<AccountStatement/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FinancingPromises from '../../../components/add-member/financingPromises'

describe('FinancingPromises component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<FinancingPromises/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
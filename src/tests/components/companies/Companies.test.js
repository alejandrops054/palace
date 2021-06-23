/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Companies from '../../../components/companies/Companies'

describe('Companies component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Companies/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
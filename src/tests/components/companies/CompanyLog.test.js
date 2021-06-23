/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CompanyLog from '../../../components/companies/CompanyLog'

describe('CompanyLog component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<CompanyLog/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NavBenefits from '../../../components/benefits/NavBenefits'

describe('NavBenefits component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<NavBenefits/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BenefitType from '../../../../components/benefits/benefit-policy/BenefitType'

describe('BenefitType component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<BenefitType/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
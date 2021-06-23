/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BenefitType from '../../../components/special-letter-titles-setting/BenefitType'

describe('BenefitType component',() => {
    test('debe mostrar BenefitType', () => {
        
        const wrapper = shallow(<BenefitType/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
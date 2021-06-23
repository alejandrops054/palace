/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PromotionBenefitDetail from '../../../components/promotion/PromotionBenefitDetail'

describe('PromotionBenefitDetail component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<PromotionBenefitDetail/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
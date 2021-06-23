/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import BenefitPolicyLog from '../../../components/frm-not-accounting/BenefitPolicyLog'

describe('BenefitPolicyLog component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<BenefitPolicyLog />)
        expect(wrapper).toMatchSnapshot();
    })

})
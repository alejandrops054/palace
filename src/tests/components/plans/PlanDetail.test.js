/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PlanDetail from '../../../components/plans/PlanDetail'

describe('PlanDetail component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<PlanDetail />)
        expect(wrapper).toMatchSnapshot();
    })

})
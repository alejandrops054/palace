/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AdjustMovements from '../../../components/ajust-movements/AdjustMovements'

describe('AdjustMovements component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<AdjustMovements />)
        expect(wrapper).toMatchSnapshot();
    })

})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PaymenWay from '../../../../../components/add-member/new-partner-five/components/PaymenWay'

describe('PaymenWay component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<PaymenWay />)
        expect(wrapper).toMatchSnapshot();
    })

})
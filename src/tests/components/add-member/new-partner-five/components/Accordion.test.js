/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Accordion from '../../../../../components/add-member/new-partner-five/components/Accordion'

describe('Accordion component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<Accordion />)
        expect(wrapper).toMatchSnapshot();
    })

})
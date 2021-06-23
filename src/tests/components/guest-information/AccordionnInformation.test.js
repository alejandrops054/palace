/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccordionnInformation from '../../../components/guest-information/AccordionnInformation'

describe('AccordionnInformation component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<AccordionnInformation />)
        expect(wrapper).toMatchSnapshot();
    })

})
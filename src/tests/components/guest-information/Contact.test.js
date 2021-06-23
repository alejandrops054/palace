/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Contact from '../../../components/guest-information/Contact'

describe('Contact component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<Contact />)
        expect(wrapper).toMatchSnapshot();
    })

})
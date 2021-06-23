/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import OfficesLog from '../../../components/offices/OfficesLog'

describe('OfficesLog component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<OfficesLog />)
        expect(wrapper).toMatchSnapshot();
    })

})
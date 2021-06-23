/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableGestId from '../../../components/membership-input/TableGestId'

describe('TableGestId component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<TableGestId />)
        expect(wrapper).toMatchSnapshot();
    })

})
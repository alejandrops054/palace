/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableSuccess from '../../../components/frm-not-accounting/TableSuccess'

describe('TableSuccess component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<TableSuccess />)
        expect(wrapper).toMatchSnapshot();
    })

})
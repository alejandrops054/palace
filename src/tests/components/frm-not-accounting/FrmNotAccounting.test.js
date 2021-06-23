/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FrmNotAccounting from '../../../components/frm-not-accounting/FrmNotAccounting'

describe('FrmNotAccounting component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<FrmNotAccounting />)
        expect(wrapper).toMatchSnapshot();
    })

})
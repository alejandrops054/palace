/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableProduct from '../../../components/electronic-wallet/TableProduct'

describe('TableProduct component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<TableProduct />)
        expect(wrapper).toMatchSnapshot();
    })

})
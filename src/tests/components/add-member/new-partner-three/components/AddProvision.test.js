/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddProvision from '../../../../../components/add-member/new-partner-three/components/AddProvision'

describe('AddProvision component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<AddProvision />)
        expect(wrapper).toMatchSnapshot();
    })

})
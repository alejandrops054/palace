/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NewProvision from '../../../../../components/add-member/new-partner-three/components/NewProvision'

describe('NewProvision component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<NewProvision />)
        expect(wrapper).toMatchSnapshot();
    })

})
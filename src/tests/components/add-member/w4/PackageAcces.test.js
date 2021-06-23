/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PackageAcces from '../../../../components/add-member/w4/PackageAcces'

describe('PackageAcces component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<PackageAcces />)
        expect(wrapper).toMatchSnapshot();
    })

})
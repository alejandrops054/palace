/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberInformation from '../../../components/member-typeaccess/MemberInformation'

describe('MemberInformation component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<MemberInformation />)
        expect(wrapper).toMatchSnapshot();
    })

})
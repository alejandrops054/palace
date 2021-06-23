/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberRoomTypesAccess from '../../../components/member-room-types-access/MemberRoomTypesAccess'

describe('MemberRoomTypesAccess component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<MemberRoomTypesAccess />)
        expect(wrapper).toMatchSnapshot();
    })

})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import OtherRoomTypesAccess from '../../../components/member-typeaccess/OtherRoomTypesAccess'

describe('OtherRoomTypesAccess component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<OtherRoomTypesAccess />)
    expect(wrapper).toMatchSnapshot();
  })

})
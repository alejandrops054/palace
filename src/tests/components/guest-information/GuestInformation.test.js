/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GuestInformation from '../../../components/guest-information/GuestInformation'

describe('GuestInformation component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<GuestInformation />)
    expect(wrapper).toMatchSnapshot();
  })

})
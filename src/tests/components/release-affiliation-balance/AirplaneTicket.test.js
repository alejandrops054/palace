/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AirplaneTicket from '../../../components/release-affiliation-balance/AirplaneTicket'

describe('AirplaneTicket component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<AirplaneTicket />)
    expect(wrapper).toMatchSnapshot();
  })

})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import VatRateGuestInformation from '../../../components/guest-information/VatRateGuestInformation'

describe('VatRateGuestInformation component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<VatRateGuestInformation />)
    expect(wrapper).toMatchSnapshot();
  })

})
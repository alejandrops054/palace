/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import VatRateCoOwnerReasons from '../../../../components/vat-rate-coOwner/components/VatRateCoOwnerReasons'

describe('VatRateCoOwnerReasons component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<VatRateCoOwnerReasons />)
    expect(wrapper).toMatchSnapshot();
  })

})
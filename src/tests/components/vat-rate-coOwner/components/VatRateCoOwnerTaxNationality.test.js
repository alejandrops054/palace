/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import VatRateCoOwnerTaxNationality from '../../../../components/vat-rate-coOwner/components/VatRateCoOwnerTaxNationality'

describe('VatRateCoOwnerTaxNationality component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<VatRateCoOwnerTaxNationality />)
    expect(wrapper).toMatchSnapshot();
  })

})
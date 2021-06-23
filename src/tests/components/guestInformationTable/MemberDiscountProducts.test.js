/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberDiscountProducts from '../../../components/guestInformationTable/MemberDiscountProducts'

describe('MemberDiscountProducts component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<MemberDiscountProducts />)
    expect(wrapper).toMatchSnapshot();
  })

})
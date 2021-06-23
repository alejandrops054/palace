/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberElectronicDetailLog from '../../../components/electronic-wallet/MemberElectronicDetailLog'

describe('MemberElectronicDetailLog component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<MemberElectronicDetailLog />)
    expect(wrapper).toMatchSnapshot();
  })

})
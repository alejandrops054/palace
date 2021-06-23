/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ProvitionalQuery from '../../../components/electronic-wallet/ProvitionalQuery'

describe('ProvitionalQuery component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<ProvitionalQuery />)
    expect(wrapper).toMatchSnapshot();
  })

})
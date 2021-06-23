/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FormContact from '../../../components/guest-information/FormContact'

describe('FormContact component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<FormContact />)
    expect(wrapper).toMatchSnapshot();
  })

})
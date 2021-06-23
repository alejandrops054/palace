/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import W2Promisses from '../../../components/w2-promisses/W2Promisses'

describe('W2Promisses component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<W2Promisses />)
    expect(wrapper).toMatchSnapshot();
  })

})
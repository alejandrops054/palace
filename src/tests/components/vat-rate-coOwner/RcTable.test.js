/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import RcTable from '../../../components/vat-rate-coOwner/RcTable'

describe('RcTable component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<RcTable />)
    expect(wrapper).toMatchSnapshot();
  })

})
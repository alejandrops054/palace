/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ReportDownPaymentsRemaining from '../../../components/report-down/ReportDownPaymentsRemaining'

describe('ReportDownPaymentsRemaining component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<ReportDownPaymentsRemaining />)
    expect(wrapper).toMatchSnapshot();
  })

})
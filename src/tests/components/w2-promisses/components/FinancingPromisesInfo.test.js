/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import FinancingPromisesInfo from '../../../../components/w2-promisses/components/FinancingPromisesInfo'

describe('FinancingPromisesInfo component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<FinancingPromisesInfo />)
    expect(wrapper).toMatchSnapshot();
  })

})
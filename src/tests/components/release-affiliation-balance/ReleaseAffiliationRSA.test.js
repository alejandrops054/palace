/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ReleaseAffiliationRSA from '../../../components/release-affiliation-balance/ReleaseAffiliationRSA'

describe('ReleaseAffiliationRSA component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<ReleaseAffiliationRSA />)
    expect(wrapper).toMatchSnapshot();
  })

})
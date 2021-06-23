/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ReleaseAffiliationCriteria from '../../../components/release-affiliation-balance/ReleaseAffiliationCriteria'

describe('ReleaseAffiliationCriteria component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<ReleaseAffiliationCriteria />)
    expect(wrapper).toMatchSnapshot();
  })

})
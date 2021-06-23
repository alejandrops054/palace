/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import InfoMembersNoContainer from '../../../components/info-members/InfoMembersNoContainer'

describe('InfoMembersNoContainer component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<InfoMembersNoContainer />)
    expect(wrapper).toMatchSnapshot();
  })

})
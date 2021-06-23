/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ConsultarAfiliacion from '../../../components/interfaz-afiliciones/ConsultarAfiliacion'

describe('ConsultarAfiliacion component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<ConsultarAfiliacion />)
    expect(wrapper).toMatchSnapshot();
  })

})
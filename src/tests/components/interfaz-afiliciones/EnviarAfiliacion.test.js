/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import EnviarAfiliacion from '../../../components/interfaz-afiliciones/EnviarAfiliacion'

describe('EnviarAfiliacion component', () => {
  test('debe mostrar snapshot', () => {

    const wrapper = shallow(<EnviarAfiliacion />)
    expect(wrapper).toMatchSnapshot();
  })

})
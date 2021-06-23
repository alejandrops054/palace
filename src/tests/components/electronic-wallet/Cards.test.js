/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Cards from '../../../components/electronic-wallet/Cards'

describe('Cards component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<Cards />)
        expect(wrapper).toMatchSnapshot();
    })

})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GolfRatesDiscount from '../../../components/golf-rates-discount/GolfRatesDiscount'

describe('GolfRatesDiscount component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<GolfRatesDiscount />)
        expect(wrapper).toMatchSnapshot();
    })

})
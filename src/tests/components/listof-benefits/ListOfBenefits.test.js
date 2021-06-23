/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ListOfBenefits from '../../../components/listof-benefits/ListOfBenefits'

describe('ListOfBenefits component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<ListOfBenefits />)
        expect(wrapper).toMatchSnapshot();
    })

})
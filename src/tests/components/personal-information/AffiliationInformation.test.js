/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AffiliationInformation from '../../../components/personal-information/AffiliationInformation'

describe('AffiliationInformation component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<AffiliationInformation />)
        expect(wrapper).toMatchSnapshot();
    })

})
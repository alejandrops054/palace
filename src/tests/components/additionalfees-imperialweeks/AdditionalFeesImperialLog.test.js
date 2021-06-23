/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AdditionalFeesImperialLog from '../../../components/additionalfees-imperialweeks/AdditionalFeesImperialLog'

describe('AdditionalFeesImperialLog component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<AdditionalFeesImperialLog/>)
        expect(wrapper).toMatchSnapshot();
    })

})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ImperialWeekRate from '../../../components/additionalfees-imperialweeks/ImperialWeekRate'

describe('ImperialWeekRate component', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<ImperialWeekRate/>)
        expect(wrapper).toMatchSnapshot();
    })

})
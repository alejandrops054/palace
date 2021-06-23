/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ModalDailyInvoing from '../../../../components/reports/daily/ModalDailyInvoing'

describe('ModalDailyInvoing component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ModalDailyInvoing/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
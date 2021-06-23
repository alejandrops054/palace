/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import DailyInvoing from '../../../../../components/reports/daily/Componentes/DailyInvoing'

describe('DailyInvoing component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<DailyInvoing/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import InformationAdicional from '../../../../../components/reports/daily/Componentes/InformationAdicional'

describe('InformationAdicional component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<InformationAdicional/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import ModalRef500 from '../../../../components/reports/corporative/ModalRef500'

describe('ModalRef500 component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<ModalRef500/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
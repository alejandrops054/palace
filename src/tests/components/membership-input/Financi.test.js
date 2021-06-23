/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Financi from '../../../components/membership-input/Financi'

describe('Financi component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Financi/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
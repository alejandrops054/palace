/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/

import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import CleanSuspense from '../../../components/clean-suspense/CleanSuspense'

describe('CleanSuspense component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<CleanSuspense/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
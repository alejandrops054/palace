/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddNote from '../../../components/new-partner/W5-AddNote'

describe('AddNote component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<AddNote/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
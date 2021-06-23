/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AddProvision from '../../../components/new-partner/W3-AddProvision'

describe('AddProvision component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<AddProvision/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
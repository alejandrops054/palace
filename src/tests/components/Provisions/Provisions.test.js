/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Provisions from '../../../components/provisions/Provisions'

describe('Provisions component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Provisions/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
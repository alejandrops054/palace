/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import NavBar from '../../../components/main-menu/NavBar'

describe('NavBar component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<NavBar/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
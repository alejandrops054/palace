/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import View from '../../../components/catalogo-views/View'

describe('View component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<View/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
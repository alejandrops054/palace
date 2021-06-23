/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Promotion2 from '../../../components/promotion/Promotion2'

describe('Promotion2 component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<Promotion2/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
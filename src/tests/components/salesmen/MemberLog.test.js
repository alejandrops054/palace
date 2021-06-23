/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberLog from '../../../components/salesmen/MemberLog'

describe('MemberLog component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MemberLog/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})

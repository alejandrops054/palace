/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberLogDetail from '../../../components/salesmen/MemberLogDetail'

describe('MemberLogDetail component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MemberLogDetail/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})

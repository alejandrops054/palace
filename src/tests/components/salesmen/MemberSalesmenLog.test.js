/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberSalesmenLog from '../../../components/salesmen/MemberSalesmenLog'

describe('MemberSalesmenLog component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MemberSalesmenLog/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})

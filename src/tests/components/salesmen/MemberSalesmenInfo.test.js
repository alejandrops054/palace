/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import MemberSalesmenInfo from '../../../components/salesmen/MemberSalesmenInfo'

describe('MemberSalesmenInfo component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<MemberSalesmenInfo/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})

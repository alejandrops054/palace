/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableInProcess from '../../../components/e-invoicing/TableInProcess'

describe('TableInProcess component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<TableInProcess/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
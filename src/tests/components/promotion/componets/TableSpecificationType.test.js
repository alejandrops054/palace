/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import TableSpecificationType from '../../../../components/promotion/componets/TableSpecificationType'

describe('TableSpecificationType component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<TableSpecificationType/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import RoomTypes from '../../../components/special-letter-titles-setting/RoomTypes'

describe('RoomTypes component',() => {
    test('debe mostrar snapshot', () => {
        
        const wrapper = shallow(<RoomTypes/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
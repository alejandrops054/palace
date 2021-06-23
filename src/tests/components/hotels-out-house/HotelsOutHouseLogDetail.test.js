/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import HotelsOutHouseLogDetail from '../../../components/hotels-out-house/HotelsOutHouseLogDetail'

describe('HotelsOutHouseLogDetail component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<HotelsOutHouseLogDetail/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
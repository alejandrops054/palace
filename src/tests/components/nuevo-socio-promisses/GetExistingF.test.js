/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GetExistingF from '../../../components/nuevo-socio-promisses/GetExistingF'

describe('GetExistingF component',() => {
    test('Debe mostrar snapshot', () => {
        
        const wrapper = shallow(<GetExistingF/>)
        expect(wrapper).toMatchSnapshot();
    })
    
})
/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Usuario from '../../../components/users/Usuario'

describe('UsersClass Usuario', () => {
    test('debe mostrar snapshot', () => {

        const wrapper = shallow(<Usuario />)
        expect(wrapper).toMatchSnapshot();
    })

})
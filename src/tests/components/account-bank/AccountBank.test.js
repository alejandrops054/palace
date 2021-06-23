/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import AccountBank from '../../../components/account-bank/AccountBank'

describe('Pruebas del componente AccountBank ', () => {
    test('Creacion de AccountBank', () => {
        
        const wrapper = shallow(<AccountBank/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
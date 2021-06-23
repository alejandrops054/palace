/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import Account from '../../../components/member-inquiry/AccountDetails'

describe('Pruebas del componente Account', () => {
    test('Creacion de Account', () => {
        
        const wrapper = shallow(<Account/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
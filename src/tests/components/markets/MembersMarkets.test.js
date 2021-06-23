/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import MembersMarkets from '../../../components/markets/MembersMarkets'

describe('Pruebas del componente MembersMarkets', () => {
    test('Creacion de MembersMarkets', () => {
        
        const wrapper = shallow(<MembersMarkets/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
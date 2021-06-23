/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import UnimitedGolfAdditionalFees from '../../../components/unlimited-golf-additional/UnimitedGolfAdditionalFees'

describe('Pruebas del componente UnimitedGolfAdditionalFees', () => {
    test('Creacion de UnimitedGolfAdditionalFees', () => {
        
        const wrapper = shallow(<UnimitedGolfAdditionalFees/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
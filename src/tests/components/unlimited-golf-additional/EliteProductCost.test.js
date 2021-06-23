/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import EliteProductCost from '../../../components/unlimited-golf-additional/EliteProductCost'

describe('Pruebas del componente EliteProductCost', () => {
    test('Creacion de EliteProductCost', () => {
        
        const wrapper = shallow(<EliteProductCost/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
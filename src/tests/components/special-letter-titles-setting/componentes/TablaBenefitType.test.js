/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import TablaBenefitType from '../../../../components/special-letter-titles-setting/componentes/TablaBenefitType'

describe('Pruebas del componente TablaBenefitType', () => {
    test('Creacion de TablaBenefitType', () => {
        
        const wrapper = shallow(<TablaBenefitType/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
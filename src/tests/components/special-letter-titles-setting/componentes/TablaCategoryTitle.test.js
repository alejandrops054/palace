/* Sistema Intelligence 2.0
Módulo Contratos
Versión 1.0
Author: IntregraIT Contratos
Comentarios: xxxxx
*/
import React from 'react'
import {shallow} from 'enzyme'

import TablaCategoryTitle from '../../../../components/special-letter-titles-setting/componentes/TablaCategoryTitle'

describe('Pruebas del componente TablaCategoryTitle', () => {
    test('Creacion de TablaCategoryTitle', () => {
        
        const wrapper = shallow(<TablaCategoryTitle/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})